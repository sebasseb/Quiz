"use strict";
var email, nombre, dni, rut;
var btnSub;
validarForm();
function validarForm() {
    email = document.getElementById('email');
    nombre = document.getElementById('nombre');
    dni = document.getElementById('dni');
    rut = document.getElementById('rut');
    btnSub = document.getElementById('btnSub');
    btnSub.addEventListener('click', function (event) {
        event.preventDefault();
        if (email.value != "" && nombre.value != "") {
            imprimir("datos enviados");
            console.log(email.value, nombre.value);
        }
        else {
            imprimir("llenar campos");
        }
    });
}
function imprimir(msg) {
    var lectura = null;
    lectura = document.getElementById('log');
    //console.log(lectura);
    lectura.innerHTML = msg;
}
