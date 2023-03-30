const {v4: uuidv4} = require("uuid");

module.exports = class Aluno {
    constructor (nome) {
        this.nome = nome;
        this.premium = false;
        this.id = uuidv4();
        this.cursosMatriculados = new Array();
    }

    addCurso(curso) {
        this.cursosMatriculados.push(curso);
    }

    hasPremium(numeroCursosConcluidos) {
        if (this.cursosMatriculados.every(x => x.concluido == true) && this.cursosMatriculados.length >= numeroCursosConcluidos)
            this.premium = true;
    }
}
