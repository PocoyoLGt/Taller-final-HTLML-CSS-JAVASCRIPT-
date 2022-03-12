const main = () =>{
    let element = document.querySelector("#cuerpo");
    console.log(element);
    let element2 = document.getElementById("titulo1");
    console.log(element2);
    let element3 = document.getElementById("subtitulo");
    console.log(element3);
    let btnEjecutar = document.querySelector("#btnEjecutar");
    btnEjecutar.addEventListener("click", ejecutar);
  
}
const cambiarColor = (id) => {
   let element = document.querySelector(`#${id}`);
   element.classList.add("fondotitulo");
}
const cambiarColor2 = (id) => {
   let element = document.querySelector(`#${id}`);
   element.classList.add("subfondo");
}

const removerEstilo = (id, estilo) => {
   let element = document.querySelector(`#${id}`);
   element.classList.remove(estilo);
}

const ejecutar = () => {
   let element = document.querySelector(`#slcOpciones`);
   let parrafo = document.querySelector(`#cuerpo`);
   switch (Number(element.value)) {
       case 1:
           parrafo.classList.add("fondotitulo");
           break;
       case 2:
           parrafo.classList.add("subfondo");
           break;
       case 3:
           parrafo.classList.remove("fondotitulo","subfondo");
           break; 
       default:
           console.log(element.value);
   }
}
var click = 1;
function myFunction() {
    
    if(click == 1){
      document.getElementById("primerp").style.display = 'none';
   
    click= click+1;  
    }else{
         document.getElementById("primerp").style.display = 'block';
        click =1;
    }
    
    
  }
  function myFunction2() {
    
    if(click == 1){
      document.getElementById("segunda2").style.display = 'none';
   
    click= click+1;  
    }else{
         document.getElementById("segunda2").style.display = 'block';
        click =1;
    }
    
  }
  function myFunction3() {
    
    if(click == 1){
      document.getElementById("tercero").style.display = 'none';
   
    click= click+1;  
    }else{
         document.getElementById("tercero").style.display = 'block';
        click =1;
    }
    
  }
  function myFunction4() {
    
    if(click == 1){
      document.getElementById("cuarto").style.display = 'none';
   
    click= click+1;  
    }else{
         document.getElementById("cuarto").style.display = 'block';
        click =1;
    }
    
  }
  function myFunction5() {
    
    if(click == 1){
      document.getElementById("quinto").style.display = 'none';
   
    click= click+1;  
    }else{
         document.getElementById("quinto").style.display = 'block';
        click =1;
    }
    
  }
  function myFunction6() {
    
    if(click == 1){
      document.getElementById("sexto").style.display = 'none';
   
    click= click+1;  
    }else{
         document.getElementById("sexto").style.display = 'block';
        click =1;
    }
    
  }
  function myFunction7() {
    
    if(click == 1){
      document.getElementById("septimo").style.display = 'none';
   
    click= click+1;  
    }else{
         document.getElementById("septimo").style.display = 'block';
        click =1;
    }
    
  }