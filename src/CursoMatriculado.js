

module.exports = class CursoMatriculado {
    constructor (Curso) {
        this.Curso = Curso;
        this.porcentagemConcluida = 0;
        this.concluido = false;
    }

    set setPorcentagemConcluido(value) {
        this.porcentagemConcluida = value;
        if (this.porcentagemConcluida >= 100)
            this.concluido = true;
    }
}