import { Chismosa } from "./Chismosa";

export class TiaVecina extends Chismosa{
    constructor(nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme);
    }
    recolectarInfo(){
        console.log("Aprovecha la reunión del barrio para escuchar discretamente")
    }
    contarChisme(){
        console.log("Difunde el chisme mientras ofrece café")
    }
}