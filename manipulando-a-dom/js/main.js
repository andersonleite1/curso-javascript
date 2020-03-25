/*+++++++++++++++++++++++++MANIPULANDO A DOM+++++++++++++++++++++++++*/

/*-----------Eventos inlene-----------*/

// function mostrarAlerta() {
//     alert("Botão foi cricado");
// }


/*---------Trabalhando com a DOM---------*/

var inputElement = document.getElementById("nome");
console.log(inputElement);

var inputElement = document.getElementsByTagName("input");
console.log(inputElement);

var inputElement = document.getElementsByClassName("nome");
console.log(inputElement);

var inputElement = document.querySelector("div#app input");

var btnElement = document.querySelector("button.btn-adicionar");
btnElement.onclick = function() {
    var text = inputElement.value;
    alert("Botão clicado"+
      "\nTexto do campo input diz: "+ text);
}

