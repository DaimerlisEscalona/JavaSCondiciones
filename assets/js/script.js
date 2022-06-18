
let vTotal = document.getElementById("verificar");
let vIngresar = document.getElementById("ingresar");
let cBorder = document.getElementById("clickBorder");

cBorder.addEventListener("click", function(){
    let borderImagen = document.querySelector("#bImagen");

    if (borderImagen.classList == 'border-none-img' ) {
        borderImagen.classList.remove('border-none-img');
        borderImagen.classList.add('border-img');
    }else{
        borderImagen.classList.remove('border-img');
        borderImagen.classList.add('border-none-img');
        
    }

});

vTotal.addEventListener("click", function () {

    let cantidadSticGH = document.querySelector("#cantidadGitH").value;
    let cantidadSticS = document.querySelector("#cantidadSlack").value;
    let cantidadSticG = document.querySelector("#cantidadGit").value;
    let cantidadStic = Number(cantidadSticGH) + Number(cantidadSticS)+ Number(cantidadSticG) ;

    if (cantidadStic == ""){
        alert("Debe ingresar una cantidad");
    } else if (cantidadStic <= 0){
        alert("Debe ingresar un valor positivo");
    }else if (cantidadStic <= 10){
        document.querySelector("#labCantidadStic").innerText = "Levas " + cantidadStic + " Stickers";
    }else{
        document.querySelector("#labMaxCantidadStic").innerText = "Levas muchos stickers";
    }

});

vIngresar.addEventListener("click", function () {

    let cantidadUno = document.querySelector("#opcionUno").value;
    let cantidadDos = document.querySelector("#opcionDos").value;
    let cantidadTres = document.querySelector("#opcionTres").value;

    if ((cantidadUno == 9) & (cantidadDos == 1) & (cantidadTres == 1)){
        document.querySelector("#labPasw").innerText = "Password 1 Es Correcto";
    }
    else if ((cantidadUno == 7) & (cantidadDos == 1) & (cantidadTres == 4)){
        document.querySelector("#labPasw").innerText = "Password 2 Es Correcto";
    }else{
        document.querySelector("#labPasw").innerText = "Password Incorrecto";
    }

});