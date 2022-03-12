
const main = () =>{
    let element = document.querySelector("#formulario");
    console.log(element);
    let element2 = document.getElementById("Nombre");
    console.log(element2);
    let element3 = document.getElementById("Correo");
    console.log(element3);
    
    let element4 = document.getElementById("Asunto");
    console.log(element4);
    let element5 = document.getElementById("Mensaje");
    console.log(element5);


    const formulario = document.querySelector('#formulario');

   formulario.addEventListener('submit',handleSubmit);
   formulario.addEventListener('submit',e =>{
       e.preventDefault();
       if(element2.value.length ==0 && element3.value.length ==0 && element4.value.length ==0 && element5.value.length ==0 ){
           document.getElementById("aviso").innerHTML = "Diligencia los datos del formulario para poder continuar";
           
       }else if(element2.value.length ==0){
        document.getElementById("aviso").innerHTML = "Escriba su nombre";
        element2.focus();
       }else if(element3.value.length ==0){
        document.getElementById("aviso").innerHTML = "Escriba su correo";
        element3.focus();

       }else if(element4.value.length ==0){
        document.getElementById("aviso").innerHTML = "Escriba el asunto del mensaje";
        element4.focus();

       }else if(element5.value.length ==0){
        document.getElementById("aviso").innerHTML = "Escriba el mensaje para que pueda ser enviado";
        element5.focus();

       }
   } )
}



function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('Nombre'));
    console.log(form.get('Correo'));
    console.log(form.get('Asunto'));
    console.log(form.get('Mensaje'));
  


}