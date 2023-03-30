const Aluno = require("../src/Aluno.js");
const Curso = require("../src/Curso.js");
const CursoMatriculado = require("../src/CursoMatriculado.js");

test('Dado um aluno cadastrado e com 12 cursos concluídos deve liberar premium', () => {
    //Arrange
    let aluno = new Aluno("Lucas");
    for (let i =0;i<12;i++){
        let cc = new CursoMatriculado(new Curso(("Curso"+(i+1)),("Descricao"+(i+1)),100));
        cc.porcentagemConcluida = 100;
        cc.concluido = true;
        aluno.addCurso(cc);
    }

    //Act
    aluno.hasPremium(12);

    //Assert
    expect(aluno.premium).toBe(true);
});