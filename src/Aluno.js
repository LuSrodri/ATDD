const {v4: uuidv4} = require("uuid");

module.exports = class Aluno {
    constructor (nome) {
        this.nome = nome;
        this.premium = false;
        this.id = uuidv4();
        this.cursosMatriculados = new Array();
        this.carteira = 0.0;
    }


    setPremium(){
        this.premium = !this.premium;
    }


    addCurso(curso) {
        this.cursosMatriculados.push(curso);
    }

    hasPremium(numeroCursosConcluidos) {

    }

    exchangeCripto(numCursosConcluidos){
        let valor = this.cursosMatriculados.length;
        this.carteira = this.carteira + (0.0005 * valor);
    }
}
