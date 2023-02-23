
/* 
   Título:        Clase operaciones aritméticas 
   Descripción:   Programa que realiza operaciones aritméticas básicas de dos números con POO
   Elaborado por: Hugo Hernández Alarcón
   Creación:     23.febrero.2023 */

// clase operacion
class Operacion {

   // método suma
   suma (numero1 , numero2) {
      return numero1 + numero2;
   }

   // método resta
   resta (numero1 , numero2) {
      return numero1 - numero2;
   }

   // método multiplicación
   multiplicacion (numero1 , numero2) {
      return numero1 * numero2;
   }

   // método división
   division (numero1 , numero2) {

      // valida división entre o
      if (numero2 == 0){
         console.log("División en cero no permitida");
         return 0;
      }
      else {
         return numero1 / numero2;
      }

   }
}

// Main

// crea objeto oOeracion(instancia del objeto operación) 
var oOperacion = new Operacion();

do{

   console.log("1. Suma ");
   console.log("2. Resta ");
   console.log("3. Multiplicacion ");
   console.log("4. Division ");
   console.log("5. Salir ");

   var opcion = 5;
   opcion = prompt("Capture la opción deseada... ");

   if (opcion < 1 || opcion > 5){
     console.log("Opción fuera de rango");
     break;
   }
  
   var num1 = prompt("Capture primer número... ");
   var num2 = prompt("Capture segundo número... ");

   if(opcion == 1){
      // ejecuta método suma y regresa el valor de la operación
      var resultado = oOperacion.suma(num1,num2)
   } else if (opcion == 2) {
      // ejecuta método resta y regresa el valor de la operación
      var resultado = oOperacion.resta(num1,num2)
   } else if (opcion == 3) {
      // ejecuta método multiplicación y regresa el valor de la operación
      var resultado = oOperacion.multiplicacion(num1,num2)
   } else if (opcion == 4) {
      // ejecuta método división y regresa el valor de la operación
      var resultado = oOperacion.division(num1,num2)  
   }
   else {
      break;
   }

   console.log("\n");
   console.log("El resultado es = " + resultado);
   console.log("\n");9

}
while(opcion >= 1 && opcion <= 5);   // sale del ciclo sino se cumple la condición, por lo menos ejecuta una vez

// fin Main