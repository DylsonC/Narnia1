const cards = document.querySelectorAll('.containerProduto .comida')
const filterElemnet = document.querySelector('.pesquisaProduto .containerPesquisa .pesquisaComida')

filterElemnet.addEventListener('input', filterCards)

function filterCards() {
    if(filterElemnet.value != ''){
        for (let card of cards) {

            let title = card.querySelector('.nomeComida')

            title = title.textContent.toLowerCase()
            let filterText = filterElemnet.value.toLowerCase()
            if(!title.includes(filterText)){
                card.style.display = "none"
            }
            else{
                card.style.display = "flex"
            }
        }
    }
    else{
        for (let card of cards) {
            card.style.display = "flex"
        }

    }
}

/*$('body').on('click', '.valor', function (prices)
{
    $(this).text();
    var valorComida = prices.target.innerHTML;
    console.log(valorComida);
});*/

/*var valor = document.querySelectorAll(".containerProduto .comida .valor");
console.log(valor[0].innerHTML)*/


$('.valor').click(function(event){

    var valores = $(this).text();
    $('#valor-da-comida').text(valores);

    var container = $(this).closest('.comida');

    var nomeComida = container.find('.nomeComida').text();
    $('.nome-da-comida').text(nomeComida);

    var image = container.find('.img-comida').attr("src");
    $(".img-da-comida").attr("src",image);

    $('.container-compra').fadeIn();

    $('#quantidade').keyup(function(){
    
        let quantidades = $(this);
        let cal = quantidades.val() * parseFloat(valores);
    
        let nomeValor = $('#valor-da-comida').text(cal);
        nomeValor.text(cal.toFixed(2).replace(".",","));
    });
});

$('.closed').click(function(){
    $('.container-compra').fadeOut();
});