
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
for (let i = 0; i < 9; i++) {
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
  item.botao = `<i class="fa-solid fa-pen-to-square btn-editar" onclick="detalharAluno(${item.id})"></i>` 
}


$('#table').bootstrapTable({
  data: listaAlunos
});
//#endregionendregion

let aluno;
function detalharAluno(alunoId){

  btnContratoEVoltar = $("#gerar-contrato").text();
  btnDesempenhoESalvar = $("#desempenho").text();

  aluno = listaAlunos.find(a => a.id == alunoId)
  $("#modal-detalhe").css("display", "block")
  $("#modal-nome-aluno").text(aluno.nome)
  $("#modal-inpt-fone").val(aluno.telefone).prop('disabled', true)
  $("#modal-inpt-email").val(aluno.email).prop('disabled', true)
  $("#modal-inpt-endereco").val(aluno.endereco).prop('disabled', true)
  $("#modal-inpt-valor").val(aluno.valorMensal).prop('disabled', true)
  $("#modal-inpt-pagamento").val(aluno.formaDePagamento).prop('disabled', true)
  $("#modal-inpt-vencimento").val(aluno.diaVencimento).prop('disabled', true)
  $("#modal-inpt-aprendizagem").val(aluno.disciplina).prop('disabled', true)
  $("#modal-inpt-horario").val(aluno.horarioDaAula).prop('disabled', true)
  $("#modal-inpt-data").prop('disabled', true)
  $("#modal-inpt-hora").prop('disabled', true)
  $("#modal-inpt-repeticao").prop('disabled', true)
  $("#info-adicionais-modal").prop('disabled', true)

  if( btnContratoEVoltar === 'Voltar'){
    $("#gerar-contrato").text('Gerar contrato')
    $("#gerar-contrato").attr('onclick', 'gerarContrato()')
  }

  if( btnDesempenhoESalvar === 'Salvar'){
    $("#desempenho").text('Acompanhar desempenho')
    $("#desempenho").attr('onclick', 'abrirDesempenho()')
  }

}




// $(document).ready(function() {
//   // Abrir o modal ao clicar no botão
//   $("#openBtn").click(function() {
//       $("#modal-detalhe").css("display", "block");
//   });

//   Fechar o modal ao clicar no botão de fechar
//   $(".close").click(function() {
//       $("#modal-detalhe").css("display", "none");
//   });
// });

let btnContratoEVoltar = $("#gerar-contrato").text();
let btnDesempenhoESalvar = $("#desempenho").text();

$(".close").click(function() {
  $("#modal-detalhe").css("display", "none");
});


$("#editar").click(function(){
  console.log("pegou") 
  editarAluno(aluno.id)
})

function editarAluno(alunoId){

  btnContratoEVoltar = $("#gerar-contrato").text();
  btnDesempenhoESalvar = $("#desempenho").text();
  
  $("#modal-inpt-fone").prop('disabled', false)
  $("#modal-inpt-email").prop('disabled', false)
  $("#modal-inpt-endereco").prop('disabled', false)
  $("#modal-inpt-valor").prop('disabled', false)
  $("#modal-inpt-pagamento").prop('disabled', false)
  $("#modal-inpt-vencimento").prop('disabled', false)
  $("#modal-inpt-aprendizagem").prop('disabled', false)
  $("#modal-inpt-horario").prop('disabled', false)
  $("#modal-inpt-data").prop('disabled', false)
  $("#modal-inpt-hora").prop('disabled', false)
  $("#modal-inpt-repeticao").prop('disabled', false)
  $("#info-adicionais-modal").prop('disabled', false)

  if( btnContratoEVoltar === 'Gerar contrato'){
    $("#gerar-contrato").text('Voltar')
    $("#gerar-contrato").attr('onclick', `voltar(${alunoId})`)
  }

  if( btnDesempenhoESalvar === 'Acompanhar desempenho'){
    $("#desempenho").text('Salvar')
    $("#desempenho").attr('onclick', `salvarEdicao(${alunoId})`)
  }


}


function voltar(alunoId){
  detalharAluno(alunoId)
}



function gerarContrato(){
  alert("Contrato gerado com sucesso!")
}


function salvarEdicao(alunoId){
  detalharAluno(alunoId)
  alert("Salvo com sucesso")
  
}