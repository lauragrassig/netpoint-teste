var $qtdSticker = $("#qtdSticker");
$qtdSticker.val(0);

$(".btn-counter").click(function () {
  if ($(this).hasClass('adicionar'))
    $qtdSticker.val(parseInt($qtdSticker.val()) +1);
  else if ($qtdSticker.val() >= 1)
    $qtdSticker.val(parseInt($qtdSticker.val()) -1);
})


// VALIDAÇÃO
$( "form" ).submit(function(e) {
  if ( $(".input-style").is(":checked") == false || $("#qtdSticker").val() == 0){
    alert("Preencha todos os campos");
      event.preventDefault();
    return false;
  } else {
    alert("Formulário enviado!");
  }
});
