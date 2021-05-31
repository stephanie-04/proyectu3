function limpiarFormulario (){
	document.getElementById("miForm").reset();
}
   var calcula = function(n1){
   	var num1 = parseFloat(document.getElementById("num1").value);
   	var resultado = num1-7*num1;

   	return resultado;
   }

function limpiarFormulario(){
	document.getElementById("miForm").reset();
}
 var velocidad = function(n1, n2){
   	var distancia = parseFloat(document.getElementById("distancia").value);
   var tiempo = parseFloat(document.getElementById("tiempo").value);
   var resultado = distancia/tiempo;

   	return resultado;
   }