/* 
   Título:       Ordenar tres números
   Descripción:  Uso de if - Pilares
   Objetivo:     Usar If
   Elaborado:    Hugo Hernández Alarcón (H2a)
   Fecha:        16.febrero.2023
*/

var num1 = 4;
var num2 = 6;
var num3 = 5;

if (num1 > num2 && num1 > num3) {
   console.log("El mayor es num1 = " + num1);
}
else if (num2 > num1 && num2 > num3) {
   console.log("El mayor es num2 = " + num2);
}
else {
   console.log("El mayor es num3 = " + num3);
}
