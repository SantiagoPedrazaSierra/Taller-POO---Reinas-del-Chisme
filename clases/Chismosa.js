// Clase abstracta
class Chismosa {
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
    
}