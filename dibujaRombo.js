/* Título:       Pinta rombo
   Descripción:  Uso de "for"
   Objetivo:     Bibujar un rombo utilizando "for"
   Elaborado:    Hugo Hernández Alarcón (H2a)
   Creación:     20.febrero.2023  
   Modificación: 21.febrero.2023 */

var caracter = "*";
var limiteIzq = 4;   // límite izquierdo de impresión
var limiteDer = 4;   // límite derecho de impresión

for (var i = 0; i < 9; i++){   // genera nueve renglones

   var cadena = "";   // limpia la cadena en cada iteración 
   for (var j = 0; j < 9; j++){   // genera nueve columnas

      if (j >= limiteIzq && j <= limiteDer){    // evalúa rango de impresión 
         cadena = cadena + caracter;  // si está dentro del rango concatena un caracter en la cadena
      }
      else {
         cadena = cadena + " ";       // si está fuera del rango concatena un espacio en la cadena
      }

   }

   console.log(cadena);   // imprime cadena por cada renglón
 
   if (i <= 3){  // evalúa si está en la primera o segunda mitad del rombo 
      limiteIzq = limiteIzq - 1;   // reduce una posicion el límite izquierdo
      limiteDer = limiteDer + 1;   // aumenta una posición el límite derecho
   }
   else{
      limiteIzq = limiteIzq + 1;   // aumenta una posicion el límite izquierdo
      limiteDer = limiteDer - 1;   // reduce una posicion el límite derecho
   }

}
