$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

var nome={"nome":"Luiz","sobrenome":"Martins"}
var  saida = document.getElementById('saida');
saida.innerHTML = nome.nome + ' ' + nome.sobrenome;

var dropdown = document.getElementById('drop');