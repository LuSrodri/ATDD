const Aluno = require("../src/Aluno.js");
const Curso = require("../src/Curso.js");
const CursoMatriculado = require("../src/CursoMatriculado.js");

test('Dado um aluno cadastrado e com 12 cursos concluídos deve liberar premium', () => {
    //Arrange
    let aluno = new Aluno("Lucas");
    aluno.addCurso(new CursoMatriculado(new Curso("Curso 1","Descricao1", 100)), );
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));
    aluno.addCurso(new Curso("Curso 1","Descricao1", 100));

    //Act
    aluno.hasPremium(12);

    //Assert
    expect(aluno.premium).toBe(true);
});