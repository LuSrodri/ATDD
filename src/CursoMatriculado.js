

module.exports = class CursoMatriculado {
    constructor (curso) {
        this._curso = curso;
        this._porcentagemConcluida = 0;
        this._concluido = false;
        this._media = 0;
        this._responderForum = false;
    }

    get responderForum() {
        return this._responderForum;
    }

    get concluido() {
        return this._concluido;
    }

    set porcentagemConcluido(value) {
        this._porcentagemConcluida += value;
        if (this._porcentagemConcluida >= 100)
            this._concluido = true;
    }

    set media(value){
        if (!this._concluido)
            throw "O curso deve estar concluído para atribuir uma nota";

        this._media = value;
        if (this._media > 7)
            this._responderForum = true;
    }
}