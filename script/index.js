
function isChecked(){
    if(document.getElementById("route__checkbox").
    checked){
        document.getElementById("message").
        textContent = "recogido";
        console.log("is checked");
        //cambio de color del texto del botón
        let colortext = "#FFA235";
        var mypoptext = document.querySelector("#message"); 
        mypoptext.style.color=colortext;

        //con esto cambio de color el boton
        let colorB = "#ffffff";
       var myElem = document.querySelector(".button__popup--checkbox"); 
       myElem.style.backgroundColor=colorB;
       //cambio de color el texto
       let colorT = "#ffffff";
       let colorN = "#FFA235";

       var myElem = document.querySelector(".route__name"); 
       myElem.style.color=colorT;
       
       var myElem = document.querySelector(".route__number"); 
       myElem.style.color=colorN;
       //aqui cambio el color del fonde de la card 
      
       let colorC = "#211C70";
       var myElem = document.querySelector(".route__box"); 
       myElem.style.backgroundColor=colorC;

         //aqui cambio el color del fondo de la imagen
         let colorI = "#4B45A1";
         var myElem = document.querySelector(".route__img"); 
         myElem.style.backgroundColor=colorI;
  

    }
    else{
        document.getElementById("message")
        .textContent = "Recoger";
        console.log("not checked");

 //cambio de color del texto del botón
 let colortext = "#ffffff";
 var mypoptext = document.querySelector("#message"); 
 mypoptext.style.color=colortext;

        let colorB = "#FFA235";
        var myElem = document.querySelector(".button__popup--checkbox"); 
        myElem.style.backgroundColor=colorB;

          //cambio de color el texto
       let colorT = "#FFA235";
       let colorN = "#211C70";

       var myElem = document.querySelector(".route__name"); 
       myElem.style.color=colorT;
       
       var myElem = document.querySelector(".route__number"); 
       myElem.style.color=colorN;

        //aqui cambio el color del fonde de la card al original
      
        let colorC = "#ffffff";
        var myElem = document.querySelector(".route__box"); 
        myElem.style.backgroundColor=colorC;

          //aqui cambio el color del fondo de la imagen al original
          let colorI = "#FFDBB0";
          var myElem = document.querySelector(".route__img"); 
          myElem.style.backgroundColor=colorI;



    }
}