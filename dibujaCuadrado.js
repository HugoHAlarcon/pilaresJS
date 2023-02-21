/* 
   Título:       Cuadrado
   Descripción:  Realización de un cuadrado usando "for anidados"
   Objetivo:     Usar "for anidados" y manejo de contadores
   Elaborado:    Hugo Hernández Alarcón (H2a)
   Fecha:        15.febrero.2023
*/

var caracter = "*";

for (var i = 0 ; i < 3; i++){    // genera 3 renglones
    
    var cadena = "";    // limpia cadena 
    for (var j = 0 ; j < 3; j++){   // iteración para concatenar 3 caracteres en cadena 
        cadena = cadena + caracter;   // concatena caracter
    }
    
    console.log(cadena);    // imprime cadena
    
}
