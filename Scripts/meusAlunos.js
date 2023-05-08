

//tabela de alunos 
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


function teste(){
  $divSearchTable.append($('<button>Adicionar aluno</button>'))
  console.log("função foi chamada")
  console.log($divSearchTable)
}

teste()

function abrirAgenda(){
  console.log("href:")
  console.log(window.location.href)
  console.log("--------------------")
  console.log("location:")
  console.log(window.location)

}
  
