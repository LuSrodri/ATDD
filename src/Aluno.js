const {v4: uuidv4} = require("uuid");

module.exports = class Aluno {
    constructor (nome) {
        this._nome = nome;
        this._premium = false;
        this._id = uuidv4();
        this._cursosMatriculados = new Array();
    }

    get premium() {
        return this._premium;
    }

    get cursosMatriculados() {
        return this._cursosMatriculados;
        this.carteira = 0.0;
    }

    setPremium(){
        this._premium = !this._premium;
    }

    addCurso(curso) {
        this._cursosMatriculados.push(curso);
    }

    hasPremium(numeroCursosConcluidos) {
        if (this._cursosMatriculados.every(x => x.concluido == true) && this._cursosMatriculados.length >= numeroCursosConcluidos)
            this._premium = true;
    }

    exchangeCripto(numCursosConcluidos){
        let valor = this.cursosMatriculados.length;
        this._carteira = this._carteira + (0.0005 * valor);
    }
}
