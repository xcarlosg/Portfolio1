let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("analisisdato");
        habilidades[6].classList.add("planeacion");
        habilidades[7].classList.add("gestion");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}



/*
function ver(link) {
    var anchor = document.createElement('a');
    anchor.href = link;
    anchor.click();
  }

*/ 
//Ver retos
function ver(link) {
    window.location.href = link;
  }
  
  // Obtener todos los elementos <a> en la página
  var links = document.getElementsByTagName('a');
  
  // Recorrer todos los enlaces y asignar la función ver() a cada uno
  for (var i = 0; i < links.length; i++) {
    var link = links[i].getAttribute('data-link');
    if (link) {
      links[i].onclick = function(event) {
        event.preventDefault();
        ver(this.getAttribute('data-link'));
      };
    }
  }