
//tabela de alunos --bootstrap
let $table = $('#table')
let $remove = $('#remove')
let $divSearchTable = $('.fixed-table-toolbar')

$(function() {
  $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
    $remove.prop('disabled', !$table.bootstrapTable('getSelections').length)
  })
  $remove.click(function () {
    var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
      return row.id
    })

    $table.bootstrapTable('remove', {
      field: 'id',
      values: ids
    })
    $remove.prop('disabled', true)
  })

})



//region "Mock-Alunos"
class Aluno {
  constructor(id, nome, email, telefone, endereco, valorMensal, formaDePagamento, diaVencimento, disciplina, horarioDaAula, infoAdicional) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.valorMensal = valorMensal;
    this.formaDePagamento = formaDePagamento;
    this.diaVencimento = diaVencimento;
    this.disciplina = disciplina;
    this.horarioDaAula = horarioDaAula;
    this.infoAdicional = infoAdicional;
  }
}

// Função para gerar um número aleatório entre dois valores (min e max)
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar uma string aleatória com um tamanho específico
function gerarStringAleatoria(tamanho) {
  let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let stringAleatoria = '';
  for (let i = 0; i < tamanho; i++) {
    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return stringAleatoria;
}

// Lista de Alunos
let listaAlunos = [];

// Preencher a lista de Alunos com 30 objetos
for (let i = 0; i < 15; i++) {
  let id = gerarNumeroAleatorio(0, 500)
  let nomePessoal = gerarStringAleatoria(8); 
  let email = gerarStringAleatoria(6) + '@example.com'; 
  let telefone = String(gerarNumeroAleatorio(100000000, 999999999)); 
  let valorMensal = String(gerarNumeroAleatorio(100, 1000)); 
  let formaDePagamento = Math.random() < 0.5 ? 'pix' : 'dinheiro'; 
  let diaVencimento = String(gerarNumeroAleatorio(1, 30)); 
  let disciplina = gerarStringAleatoria(10);
  let horarioDaAula = new Date().toLocaleString(); 
  let infoAdicional = gerarStringAleatoria(20); 

  let aluno = new Aluno(id, nomePessoal, email, telefone, '', valorMensal, formaDePagamento, diaVencimento, disciplina, horarioDaAula, infoAdicional);
  listaAlunos.push(aluno);
}

for(let item of listaAlunos){
  item.botao = `<i class="fa-solid fa-pen-to-square" onclick="editarAluno(${item.id})"></i>` 
}


$('#table').bootstrapTable({
  data: listaAlunos
});
//#endregionendregion


function editarAluno(alunoId){
  alert("Abrir modal do aluno" + alunoId)
  let modal = $("<div>").addClass("modal-overlay")
  modal.append("<p>").text("Conteúdo do modal")
}