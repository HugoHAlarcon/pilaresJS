/* 
   Título:       Captura de calificaciones 
   Descripción:  Captura de calificaciones x alumno y cálculo del promedio
   Objetivo:     Capturar calificaciones de alumnos utilizando estructuras de control
   Elaborado:    Hugo Hernández Alarcón (H2a)
   Creación:     21.febrero.2023 
   Modificación: 22.febrero.2023  */

   var asignaturas = ["Español","Matemáticas","Ciencias Naturales"];
   var calificaciones = [];
   var iAsign = 0;
   var calif = 0; 
   
   var banderaEst = true;
   while(banderaEst){
   
      var nombre = prompt("Capture nombre del alumno ");
   
      var contador = 0;
      var suma = 0.0;
      var banderaCalif = true;
      while(banderaCalif){
   
         console.log("\n");
         for (var i = 0 ; i < 3 ; i++){
            console.log(i + 1 + ". " + asignaturas[i]);
         }
   
         var banderaRangoCalif = true;
         while(banderaRangoCalif){
   
            iAsign = prompt("Seleccione número de asignatura ");
   
            if (iAsign >= 1 && iAsign <= 3){
               banderaRangoCalif = false;
            }
   
         } // fin while bandera rango asignatura
   
         var banderaRango = true;
         while(banderaRango){
   
            calif  = parseFloat(prompt("Capture calificación [6.0 - 10.0] de " + asignaturas[iAsign - 1] + ": "));
         
            if(calif >= 6.0 && calif <= 10.0){
               banderaRango = false;
            }
            else {
               banderaRango = true;
               console.log("\n");
               console.log("Calificación FUERA DE RANGO [6.0 - 10.0]");
            }
         
         } // fin de while banderaRango
       
         contador = contador + 1;
         suma = suma + calif;
           
         calificaciones.push(nombre + " ; " + asignaturas[iAsign - 1] + " ; " + calif + " ; Promedio = " + (suma / contador));
   
         if (contador < 3){
            if (prompt("¿Desea capturar otra calificación [s - n]?") == "n") {
               banderaCalif = false;
            }
         }
         else {
            banderaCalif = false;
         }
     
      }   // fin de while de captura de calificaciones
   
      console.log("\n");
      if (prompt("¿Desea capturar nuevo alumno [s - n]?") == "s")
         banderaEst = true;
      else banderaEst = false;
   
   }  // fin de while de captura de alumno
   
   console.log("\n"); 
   for (var i = 0 ; i < calificaciones.length ; i++){
     console.log(calificaciones[i]);  
   }
   