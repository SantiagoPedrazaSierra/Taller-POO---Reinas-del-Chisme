// Clase abstracta
 export class Chismosa {
    #reputacion
    #nivelChisme

    constructor(nombre, reputacion, nivelChisme){
        if (this.constructor === Chismosa){
            throw new Error("No se puede instanciar una clase abstracta.")
        }
        this.nombre= nombre;
        this.#reputacion= reputacion;
        this.#nivelChisme=nivelChisme; 
    }
    recolectarInfo(){
        throw new Error("Este método no tiene implementación porque es abstracto!!")
    }
    contarChisme(){
        throw new Error("Este método no tiene implementación porque es abstracto!!")
    }


    get nivelChisme(){
        return this.#nivelChisme
    }
    get reputacion(){
        return this.#reputacion
    }

    getReputacion(){
        return this.#reputacion
    }

    getNivelChisme(){
        return this.#nivelChisme
    }
    
    subirNivel(valor) {
    this.#nivelChisme = Math.min(this.#nivelChisme + valor, 10);
}

subirReputacion(valor) {
    this.#reputacion = Math.min(this.#reputacion + valor, 10);
}

bajarReputacion(valor) {
    this.#reputacion = Math.max(this.#reputacion - valor, 0);
}

}