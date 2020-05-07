let imagen = document.getElementById("imagen") // imagen
let titulito = document.getElementById("titulo"); // titulo
let parrafito = document.getElementById("txt"); // texto
let botonsin = document.getElementById('buti'); // boton
let div = document.getElementById('combo');

function getIt(){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function(){
        if(this.status == 200){
           // const list = JSON.parse(this.responseText);
           div.style.display = "block";
            titulito.textContent = (JSON.parse(this.responseText)).title;
           imagen.setAttribute('src', (JSON.parse(this.responseText)).hdurl);
           parrafito.textContent = (JSON.parse(this.responseText).explanation); 
            botonsin.setAttribute("disabled", "true");
        }else{console.log("error");}
    })
    xhr.open('get', "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    xhr.send();
}