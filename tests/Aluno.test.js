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


test('Dada uma troca pelo premium feita, trocar por cripto', () =>{

    //Arrange
    let aluno = new Aluno("Sarah");
    aluno.setPremium();
    aluno.addCurso(new Curso("Curso 1","Descricao bla", 3));
    aluno.addCurso(new Curso("Curso 2","Descricao blaa", 4));
    aluno.addCurso(new Curso("Curso 3","Descricao blaaa", 10));
    aluno.addCurso(new Curso("Curso 4","Descricao blaaaa", 12));
    aluno.addCurso(new Curso("Curso 5","Descricao blaaaaa", 1));
    aluno.addCurso(new Curso("Curso 6","Descricao blaaaaaa", 2));
    aluno.addCurso(new Curso("Curso 7","Descricao blaaaa", 3));
    //Tirar os comentários para passar

    // aluno.addCurso(new Curso("Curso 8","Descricao blaaaa", 10));
    // aluno.addCurso(new Curso("Curso 9","Descricao blaaaa", 20));
    // aluno.addCurso(new Curso("Curso 10","Descricao blaaaa", 8));
    // aluno.addCurso(new Curso("Curso 11","Descricao blaaaa", 3));
    // aluno.addCurso(new Curso("Curso 12","Descricao blaaaa", 3));


    //Act
    aluno.exchangeCripto(aluno.cursosMatriculados.length);

    //Assert
    expect(aluno.carteira).toBeGreaterThanOrEqual(0);
});