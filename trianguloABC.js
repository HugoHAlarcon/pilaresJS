/* 
   Título:       Triangulo inverso de letras
   Descripción:  Realización de un triangulo usando "for anidados"
   Objetivo:     Usar "for anidados" y manejo de contadores
   Elaborado:    Hugo Hernández Alarcón (H2a)
   Fecha:        18.febrero.2023
*/

var abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var noRenglones = abc.length;       // define el número renglones 
var posicion = abc.length - 1;      // valor para manipular el arreglo y concatenar ordenadamente

for (var i = 0; i < noRenglones; i++){        // ciclo para generar el número de renglones necesarios 

   cadena = "";   // inicializa la cadena que contendra el contenido de cada renglón
   for (var j = posicion ; j >= 0 ; j--){     // ciclo para concatenar el ABCdario de manera inversa,
      cadena = cadena + abc[j];               // eliminando una posción a la vez de la posición 26 hasta la 1
   }

   console.log(cadena);          // imprime el renglon concatenado
   posicion = posicion - 1;      // disminuye una posición para el siguiente ciclo 
 
}
