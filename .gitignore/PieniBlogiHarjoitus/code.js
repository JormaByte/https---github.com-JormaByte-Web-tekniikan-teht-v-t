
function check(){

  const date = new Date();
  

  let nimi = document.getElementById("name").value ;
  let teksti = document.getElementById("note").value ;

 
 

   let tiedot = date + " " + nimi + " -> " + teksti ;


const newDiv = document.createElement("div") ;


newDiv.textContent = tiedot;

document.getElementById("p").appendChild(newDiv) ;
}