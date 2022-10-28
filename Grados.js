
document.getElementById("calcular").onclick= grados

function grados(){
let gradosC= document.getElementById("ValorGradosC");
let gradosK= document.getElementById("ValorGradosK");
if((gradosC.value=="") && (gradosK.value=="")){
    alert("debe ingresar un valor")
}else if(gradosC.value !==""){
    gradosK.value= (parseFloat (gradosC.value)+273.15).toFixed(2)
 }
 else if(gradosK.value !==""){
    gradosC.value= (parseFloat (gradosK.value)-273.15).toFixed(2)
 }
}
