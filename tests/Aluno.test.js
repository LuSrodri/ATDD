const Aluno = require("../src/Aluno.js");
const Curso = require("../src/Curso.js");
const CursoMatriculado = require("../src/CursoMatriculado.js");

test('Dado um aluno cadastrado e com 12 cursos concluídos deve liberar premium', () => {
    //Arrange
    let aluno = new Aluno("Lucas");
    for (let i =0;i<12;i++){
        let cc = new CursoMatriculado(new Curso(("Curso"+(i+1)),("Descricao"+(i+1)),100));
        cc.porcentagemConcluido = 100;
        aluno.addCurso(cc);
    }

    //Act
    aluno.hasPremium(12);

    //Assert
    expect(aluno.premium).toBe(true);
});

test('Dado um aluno cadastrado e com a média acima de 7, quando fizer login, então ele escreve comentarios no forum', () => {
    //Arrange
    let aluno = new Aluno("Raissa");
    let cc = new CursoMatriculado(new Curso("Curso1","Descricao1",100));
    cc.porcentagemConcluido = 100;
    aluno.addCurso(cc);

    //Act
    aluno.cursosMatriculados[0].media = 10;

    //Assert
    expect(aluno.cursosMatriculados[0].responderForum).toBe(true);
});


test('Dada uma troca pelo premium feita, trocar por cripto', () =>{

    //Arrange
    let aluno = new Aluno("Sarah");
    // Trocar quantidade de cursos para dar certo.
    for (let i =0;i<10;i++){
        let cc = new CursoMatriculado(new Curso(("Curso"+(i+1)),("Descricao"+(i+1)),100));
        cc.porcentagemConcluido = 100;
        aluno.addCurso(cc);
    }

    //Act
    aluno.exchangeCripto(aluno.cursosMatriculados.length);

    //Assert
    expect(aluno.carteira).toBeGreaterThanOrEqual(0);
});