function frente(id){
    document.getElementById(id).scrollLeft += 305;
}
function volta(id){
    document.getElementById(id).scrollLeft -= 305;
}
var tela = window.innerWidth;
if (tela <= 600){
    var footer = document.getElementById("footer");
    var containicone = document.getElementById("contain-icone");
    var rodape = document.getElementById("rodape");
    footer.classList.remove('flex-row'); 
    footer.classList.add('flex-column');
    containicone.classList.remove('flex-row'); 
    containicone.classList.add('flex-column');
    rodape.classList.remove('flex-row'); 
    rodape.classList.add('flex-column');
}

document.getElementById("menu-responsivo").addEventListener("click", mudardisplay);

function mudardisplay() {
    if (document.getElementById('menu-mobile').style.display == 'none'){
        document.getElementById('menu-mobile').style.display = 'block';
    }else{
        document.getElementById('menu-mobile').style.display = 'none';
    }
}