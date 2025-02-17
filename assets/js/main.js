$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();

    const enderecoNovaImg = $("#linkNovaImagem").val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoNovaImg}" />`).appendTo(novoItem);
    $(`<div class="overlay-img-link">
        <a href="${enderecoNovaImg}" target="_black" title="Ver a imagem em tamanho real" >
            Ver imagem em tamanho real
        </a>
    </div>`).appendTo(novoItem);

    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#linkNovaImagem').val('')
  });
});
