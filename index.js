// Importaciones

import chalk from "chalk";
import readline from "readline";
import { TiaVecina } from "./clases/TiaVecina.js";
import { CompaneraCuriosa } from "./clases/CompaneraCuriosa.js";
import { EstudianteEspia } from "./clases/EstudianteEspia.js";

// Inicialización de las chismosas

const chismosas = [
    new TiaVecina("Doña Gladys", 5, 3),
    new CompaneraCuriosa("Sandra la contadora", 6, 2),
    new EstudianteEspia("La Yuli", 4, 4),
];

// Función para simular rondas de chismes

function simularRondas(cantidad) {
    console.log(chalk.bold(`\nSimulando ${cantidad} ronda(s)\n`));

    for (let i = 1; i <= cantidad; i++) {
        console.log(chalk.underline(`Ronda ${i}`));

        chismosas.forEach((chismosa) => {
            console.log(chalk.bold(`\n${chismosa.nombre}:`));
            chismosa.recolectarInfo();
            chismosa.contarChisme();

            if (chismosa instanceof TiaVecina) {
                chismosa.subirNivel(Math.floor(Math.random() * 3) + 2);
                if (Math.random() < 0.4) chismosa.bajarReputacion(1);
            } else if (chismosa instanceof CompaneraCuriosa) {
                chismosa.subirNivel(1);
                chismosa.subirReputacion(Math.floor(Math.random() * 2) + 1);
            } else if (chismosa instanceof EstudianteEspia) {
                chismosa.subirNivel(Math.floor(Math.random() * 3) + 2);
                if (Math.random() < 0.3) chismosa.bajarReputacion(2);
            }

            mostrarEstado(chismosa);
        });
    }

    mostrarResultados();
}
// Mostrar estado de cada chismosa

function mostrarEstado(chismosa) {
    const nivel = chismosa.getNivelChisme();
    const reputacion = chismosa.getReputacion();

    const nivelColor = nivel >= 7 ? chalk.magentaBright : chalk.white;
    const reputacionColor = reputacion >= 7 ? chalk.hex("#FFA500") :
        reputacion <= 3 ? chalk.blackBright : chalk.white;

    console.log(`Chisme: ${nivelColor(nivel)} | Rep: ${reputacionColor(reputacion)}`);
}

// Mostrar resultados finales

function mostrarResultados() {
    console.log(chalk.bold("\nResultados Finales"));

    const ordenadas = [...chismosas].sort((a, b) => b.getNivelChisme() - a.getNivelChisme());

    ordenadas.forEach(chismosa => {
        const nivel = chismosa.getNivelChisme();
        const reputacion = chismosa.getReputacion();

        const nivelColor = nivel >= 7 ? chalk.magentaBright : chalk.magenta;
        const reputacionColor = reputacion >= 7 ? chalk.hex("#FFA500") :
            reputacion <= 3 ? chalk.blackBright : chalk.white;

        console.log(
            `${chalk.bold(chismosa.nombre)}: ${nivelColor(nivel)} | ${reputacionColor(reputacion)}`
        );
    });

    const ganadora = ordenadas[0];
    console.log(chalk.magentaBright(`\nGanadora: ${ganadora.nombre}`));
}

// Menú interactivo con readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mostrarMenu() {
    console.log(chalk.bold(`\n=== MENÚ PRINCIPAL ===`));
    console.log("1) Simular 1 ronda");
    console.log("2) Simular 2 rondas");
    console.log("3) Mostrar resultados y salir");
    console.log("4) Salir sin mostrar resultados");

    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion.trim()) {
            case "1":
                simularRondas(1);
                mostrarMenu();
                break;
            case "2":
                simularRondas(2);
                mostrarMenu();
                break;
            case "3":
                mostrarResultados();
                console.log("\n¡Hasta la próxima batalla de chismes!");
                rl.close();
                break;
            case "4":
                console.log("\n¡Hasta pronto!");
                rl.close();
                break;
            default:
                console.log(chalk.red("Opción inválida. Intente de nuevo."));
                mostrarMenu();
        }
    });
}

// Iniciar aplicación
console.log(chalk.bold.magentaBright("\n🌟 BIENVENIDO A LA BATALLA DE LAS REINAS DEL CHISME 🌟"));
mostrarMenu();