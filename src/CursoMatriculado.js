

module.exports = class CursoMatriculado {
    constructor (Curso) {
        this.Curso = Curso;
        this.porcentagemConcluida = 0;
        this.concluido = false;
        this.media = 0;
        this.responderForum = false;
    }

    set setPorcentagemConcluido(value) {
        this.porcentagemConcluida = value;
        if (this.porcentagemConcluida >= 100)
            this.concluido = true;
    }

    set setMedia(value){
        this.media = value;
    }
}