var btnMenu = document.querySelector(".icone-menu");
var btnFecha = document.querySelector(".fecha-toggle");
var menuToggle = document.querySelector(".menu-toglle");
var conteudo = document.querySelector(".conteudo");

btnMenu.addEventListener("click", () => {
    menuToggle.classList.toggle('abriMenu');
    conteudo.classList.toggle('contentBlur');
});
btnFecha.addEventListener("click", () => {
    menuToggle.classList.toggle('abriMenu');
    conteudo.classList.toggle('contentBlur');
});

var lastScrollTop = 0;
topo = document.getElementById("topo");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        topo.style.top= "-80px";
        menuToggle.style.top = "80px";
    }
    else{
        topo.style.top= "0";
        menuToggle.style.top = "0";
    }
    lastScrollTop = scrollTop;
});