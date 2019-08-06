var $qtdSticker = $("#qtdSticker");
  $qtdSticker.val(0);

$(".btn-counter").click(function () {
  if ( $(this).hasClass('adicionar'))
    $qtdSticker.val(parseInt($qtdSticker.val()) +1);
  else if ($qtdSticker.val() >= 1)
    $qtdSticker.val(parseInt($qtdSticker.val()) -1);
})


// VALIDAÇÃO
$('#enviar').click(function() {
  if( $(".input-style").is(":checked") == false )
    window.alert('Por favor preencha corretamente os campos');
});