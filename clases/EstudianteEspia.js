 import { Chismosa } from "./Chismosa.js";

 export class EstudianteEspia extends Chismosa{
    constructor(nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme);
    }
    recolectarInfo(){
        console.log("Lee chats ajenos desde el último puesto del salón")
    }
    contarChisme(){
        console.log("Filtra el chisme por estados en WhatsApp")
    }
}