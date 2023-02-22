
var asignaturas = ["Español","Matemáticas","Ciencias"];
var calificaciones = [];
var elementoStr = "";
var iAsign = 0;
var calif = 0; 

var banderaEst = true;
while(banderaEst){

  var nombre = prompt("Capture nombre del alumno ");

  var contador = 0;
  var suma = 0;
  var banderaCalif = true;
  while(banderaCalif){

    console.log("\n");
    for (var i = 0 ; i < 3 ; i++){
      console.log(i + " " + asignaturas[i]);
    }

    iAsign = prompt("Seleccione no de asignatura ");

    var banderaRango = true;
    while(banderaRango){

        calif  = prompt("Capture calificación de " + asignaturas[iAsign] + ": ");
      
      if(calif >= 6.0 && calif <= 10.0){
        banderaRango = false;
      }
      else {
        banderaRango = true;
        console.log("\n");
        console.log("Calificación está FUERA DE RANGO [6.0 - 10.0]");
      }
      
    }
    
    contador = contador + 1;

    suma = suma + calif;
    elementoStr = "Alumno: " + nombre + " ; " +
                  "Asignatura: "  + asignaturas[iAsign] + " ; " + 
                  "Calificación: " + calif;
    
    calificaciones.push(elementoStr);

    if (contador < 3){
      if (prompt("Desea capturar otra calificación?") == "n") {
        banderaCalif = false;
      }
      else {
        banderaCalif = true;
      }
    }
    else {
      banderaCalif = false;
    }
  
  }   // fin de while de captura de calificaciones

  console.log("\n");
  if (prompt("Desea capturar nuevo alumno?") == "s")
    banderaEst = true;
  else banderaEst = false;

}  // fin de while de captura de alumno

console.log("\n"); 
for (var i = 0 ; i < 2 ; i++){
  console.log(calificaciones[i]);  
}
