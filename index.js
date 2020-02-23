const alunosDaEscola = [{
    nome: "Henrique",
    notas: [],
    cursos: [],
    faltas: 5
},
{
    nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2
},
{
    nome: "Bruno",
    notas: [10, 9.8, 9.6],
    cursos: [],
    faltas: 0
},
{
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
},
{
    nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0
},
{
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
}
];


//############################# FUNÇÃO RESPONSÁVEL EM CADASTRAR ALUNOS ################################
function adicionarAluno(nome) {
//FEEDBACK DO ALUNO CADASTRADO
console.log("Aluno Cadastrado com sucesso")
console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
console.log("Nome: " + nome + " seja bem vindo em nossa escola!");
console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
//ADICIONA UM VALOR NO OBJETO
return alunosDaEscola.push({
    nome: nome,
    notas: [],
    cursos: [],
    faltas: 0
});

} //############################# FIM DA FUNÇÃO adicionarAluno(nome) ##################################


//##################### FUNÇÃO RESPONSÁVEL EM LISTAR TODOS OS ALUNOS CADASTRADO #######################
function listarAlunos() {
//FAZ A LISTA DOS NOMES DOS ALUNOS
console.log("Lista de Alunos:")
console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
alunosDaEscola.forEach((element, numero) => {
    console.log('Nº: ' + (numero + 1) + ' - nome: ' + element.nome);
});
console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
} //############################# FIM DA FUNÇÃO listarAlunos() ########################################


//############## FUNÇÃO RESPONSÁVEL DE BUSCAR OS ALUNOS CADASTRADOS APÓS DIGITAR O NOME ##############
function buscarAluno(nome) {
// RECEBE O FILTRO PELO NOME DO ALUNO
let resultado = alunosDaEscola.filter((item => item.nome.includes(nome)));
//VERIFICA SE EXISTE REGISTRO ENCONTRADO    
if (resultado.length > 0) {
    let matricula;
    let cont = 0;
    console.log(`Foram encontrado ${resultado.length} registro(s).`);
    console.log("_________________________________")
    console.log(`Busca por Nome: `);
    aluno = resultado.forEach(element => {
        cont++;
        console.log('nome: ' + element.nome);
        return matricula = true;
    })
} else {
    console.log(`Atenção: `);
    console.log('* Aluno não encontrado\n* Procure a administração da sua escola');
    return matricula = false
}
console.log(`...................................................`);
} //############################# FIM DA FUNÇÃO buscarAluno(nome) ########################################


//######################### FUNÇÃO RESPONSÁVEL DE MATRICULAR O ALUNO EM UM CURSO ########################
function matricularAluno(aluno, curso) {
//FUNÇÃO RESPONSÁVEL DE VERIFICA SE O ALUNO ESTÁ CADASTRADO
function consultaAluno(NomeDeAluno) {
    for (let i in alunosDaEscola) {
        if (alunosDaEscola[i].nome == NomeDeAluno.nome) {
            return true
            break;
        }
    }
}
//VARIAVEL RETORNA A POSIÇÃO DESSE ALUNO NO VETOR DE OBJETOS 
let pos = alunosDaEscola.map(function (e) {
    return e.nome
}).indexOf(aluno.nome);
if (consultaAluno(aluno) == true) {
    console.log("Matricula:")
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨")
    //MATRICULA O ALUNO EM UM CURSO 
    resultado = alunosDaEscola[pos].cursos.push = {
        nomeDoCurso: curso,
        dataMatricula: new Date()
    }
    let exibirCurso = () => {
        return alunosDaEscola[pos].cursos
    }
    // FEEDBACK NO RETORNO TRUE
    console.log('Nome:' + alunosDaEscola[pos].nome);
    console.log("Aluno Matriculado no curso: ", exibirCurso());
} else {
    // FEEDBACK NO RETORNO FALSE ALUNO NÃO CADASTRADO
    console.log("Atenção:")
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨")
    console.log('Aluno Não Cadastrado, procure a secretaria da unidade escolar');
}
console.log('-------------------------------------------------------------------');
} //################FIM DA FUNÇÃO matricularAluno(aluno, curso)###################################


//################# FUNÇÃO RESPONSÁVEL EM APLICAR FALTA ##########################################
function aplicarFalta(aluno) {
//FUNÇÃO RESPONSÁVEL DE VERIFICA SE O ALUNO ESTÁ CADASTRADO
function consultaAluno(NomeDeAluno) {
    for (let i in alunosDaEscola) {
        if (alunosDaEscola[i].nome == NomeDeAluno.nome) {
            return true
            break;
        }
    }
}
//VARIAVEL RETORNA A POSIÇÃO DESSE ALUNO NO VETOR DE OBJETOS 
let pos = alunosDaEscola.map(e => {
    return e.nome
}).indexOf(aluno.nome)
//LANÇAMENTO DAS FALTAS E VERIFICAÇÃO DOS ALUNOS CADASTRADO
if (consultaAluno(aluno) == true) {
    let resultado = alunosDaEscola[pos].faltas += 1
    //RETORNO TRUE COM O FEEDBACK 
    return console.log(`Falta lançada para ${aluno.nome} no dia" ${new Date()} - Total: ${resultado}`)
} else {
    //RETORNO FALSE COM O FEEDBACK 
    console.log("Atenção:")
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨")
    console.log('Aluno Não Cadastrado, procure a secretaria da unidade escolar');
}
} //################FIM DA function aplicarFalta(aluno) APLICAR FALTA###################################


//#########################FUNÇÃO RESPONSÁVEL LANÇAR A NOTAS EM UM ALUNO CADASTRADO#####################
function aplicarNota(aluno) {
//FUNÇÃO RESPONSÁVEL DE VERIFICA SE O ALUNO ESTÁ CADASTRADO
function consultaAluno(NomeDeAluno) {
    for (let i in alunosDaEscola) {
        if (alunosDaEscola[i].nome == NomeDeAluno.nome) {
            return true
            break;
        }
    }
}
//FUNÇÃO RETORNA A POSIÇÃO DESSE ALUNO NO VETOR DE OBJETOS   
let pos = alunosDaEscola.map(e => {
    return e.nome
}).indexOf(aluno.nome);
//ADICIONA A NOTA AO ALUNO
if (consultaAluno(aluno) == true) {
    console.log("Lançamento de Notas:")
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
    //FEEDBACK NO RETORNO TRUE 
    console.log(`Nº: ${pos} - Nome: ${aluno.nome} - Nota Lançada: ${ aluno.notas}`)
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
    return alunosDaEscola[pos].notas.push(aluno.notas);
} else {
    // FEEDBACK NO RETORNO FALSE
    console.log("Atenção:")
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
    console.log('Aluno Não Cadastrado, procure a secretaria da unidade escolar');
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
}
} //#################################### FIM FA FUNÇÃO aplicarNota(aluno) ###################################


//########################### ESSA FUNÇÃO CALCULA A MEDIA APROVA E REPROVA #################################
function aprovarAluno(aluno) {
//FUNÇÃO RESPONSÁVEL EM CALCULAR  A MÉDIA
function media(notas) {
    const media = notas.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    }) / notas.length
    return media;
}
//FUNÇÃO RETORNA A POSIÇÃO DESSE ALUNO NO VETOR DE OBJETOS   
let pos = alunosDaEscola.map(e => {
    return e.nome
}).indexOf(aluno.nome);
//FUNÇÃO RESPONSÁVEL DE VERIFICAR SE O ALUNO ESTÁ CADASTRADO
function consultaAluno(NomeDeAluno) {
    for (let i in alunosDaEscola) {
        if (alunosDaEscola[i].nome == NomeDeAluno.nome) {
            return true
            break;
        }
    }
}
//CONDIÇÃO DE ALUNO CADASTRADO
if (consultaAluno(aluno) == true) {
    notas = alunosDaEscola[pos].notas
    media = media(notas)
    //ANALISA A MÉDIA > 7    
    if (media >= 7) {
        console.log("Situação:(aprovado >=7 ou reprovado < 7")
        console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
        //FEEDBACK NO RETORNO "APROVADO"
        console.log(`Nº: ${pos} - Nome: ${aluno.nome} - Média Final: ${ media} -> APROVADO`)
        console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
        //ANALISA A MÉDIA <7     
    } else if (media < 7) {
        console.log("Situação:(aprovado >=7 ou reprovado < 7")
        console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
        //FEEDBACK NO RETORNO "REPROVADO" 
        console.log(`Nº: ${pos} - Nome: ${aluno.nome} - Média Final: ${ media} ->REPROVADO`)
        console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
    }
} else {
    // FEEDBACK NO RETORNO FALSE ALUNO NÃO CADASTRADO
    console.log("Atenção:")
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
    console.log('Aluno Não Cadastrado, procure a secretaria da unidade escolar');
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
}
} //########################FIM DA function aprovarAluno(aluno)#############################################


