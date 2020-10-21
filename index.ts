var email:any, nombre : any, dni:any, rut :any;
var btnSub;
validarForm();


function validarForm() {
 
  

  email =<HTMLInputElement> document.getElementById('email');
  
  
  nombre = <HTMLInputElement>document.getElementById('nombre');

  
  
  dni = <HTMLInputElement>document.getElementById('dni');
  rut = <HTMLInputElement>document.getElementById('rut');

  btnSub = <HTMLButtonElement>document.getElementById('btnSub');

  
 
  btnSub.addEventListener('click', function (event) {
    event.preventDefault();
    if (email.value != "" && nombre.value != "") {
      imprimir("datos enviados")
      console.log(email.value,nombre.value);
    } else {
      imprimir("llenar campos");
    }
  });
  

  
}



function imprimir(msg : string) {
  var lectura = null;
 
  lectura =<HTMLElement> document.getElementById('log');

//console.log(lectura);
  lectura.innerHTML = msg;
}
