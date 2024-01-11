const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const btnAccedi = document.getElementById("accedi")
const btnEsci = document.getElementById("esci")
const elementPagina1 = document.getElementById("pagina1")
const elementPagina2 = document.getElementById("pagina2")
const elementInput = document.getElementsByClassName("inputs")


function onClickAccedi() {
    elementPagina1.style.visibility = "hidden";
    elementPagina2.style.visibility = "visible";
}

btnAccedi.addEventListener("click", onClickAccedi)


function ability() {
    if ( inputEmail.value!= " " && inputPassword!=" ")
      btnAccedi.disabled=false;
}

for(let i=0; i<elementInput.length; i++)
elementInput[i].addEventListener("keyup", ability);

function onClickEsci() {
    elementPagina2.style.visibility = "hidden";
    elementPagina1.style.visibility = "visible";
    btnAccedi.disabled=true;
    inputEmail.value= "";
    inputPassword.value= ""

}

btnEsci.addEventListener("click", onClickEsci)