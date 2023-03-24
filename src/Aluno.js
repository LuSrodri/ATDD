import { v4 as uuidv4 } from "uuid";

export class Aluno {
    constructor (nome) {
        this.nome = nome;
        this.premium = false;
        this.id = uuidv4();
        this.cursosMatriculados = new Array();
    }
}
