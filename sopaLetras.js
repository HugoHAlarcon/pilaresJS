/* 
   Título:       Sopa de letras.
   Descripción:  Primer programa de curso JavaScript - Pilares.
   Objetivo:     Usar conceptos básicos, estructuras de control y ciclos.
   Elaborado:    Hugo Hernández Alarcón (H2a).
   Fecha:        15.febrero.2023
*/

var palabraOculta = "caja";  // palabra que el usuario debe buscar
var posicionY = 0;           // almacena el valor de ´y´ en la coordenada de la matriz
var palabraOK = "";          // almacena letra a letra la palabra correcta
var renglon = 0;             // identifica el renglon 
var bandera = true;          // controla el momento en que el ciclo se rompe
var sopaLetras = [
                  ["c", "l","a","k","t"], 
                  ["p", "a","u","t","a"], 
                  ["l", "b","j","n","z"], 
                  ["u", "i","u","a","a"], 
                  ["n", "v","z","c","s"]
                  ] 

for(var i = 0;i < sopaLetras.length;i++) 
   console.log(sopaLetras[i]);             // imprime el contenido de la matriz

// imprime instrucciones y tips
console.log("\n1. Encuentre la palabra oculta"); 
console.log("2. Complete las coordenadas (x,y) correspondientes de la matriz de cada letra secuencialmente"); 
console.log("\nTip 1. Es una palabra de cuatro letras"); 
console.log("Tip 2. Se puede crear de cartón, madera o plástico"); 

while (bandera) {   // el ciclo se ejecutará mientras la bandera sea verdadera

   // solicita el valor de "y" de la coordena en donde se encuetra la letra correspondiente a cada renglon
   posicionY = prompt("\nComplete la coordenada (" + renglon + ", y ), y = ");

   // verifica que la letra en la coordena capturada sea igual a la correspondiente en la palabra oculta
   if ( sopaLetras[renglon][posicionY] == palabraOculta[renglon] ) { 
        
         // si es correcta concatena las letras para ir armando en cada iteración la palabra oculta
         palabraOK = palabraOK + palabraOculta[renglon]; 
         // imprime la palabra encontrada secuencialmente
         console.log("\n" + "Palabra oculta = " + palabraOK + "\n"); 
    
         // evalúa que haya armado la palabra correcta
         if (palabraOK == palabraOculta ){ 
            console.log("¡Felicidades!, ha encontrado la palabra correcta."); 
            break; 
         } 
    
         renglon = renglon + 1;    // incrementa el renglon
        
    } 
   else {
      console.log("Coordenada incorrecta");  
   } 
    
   // evalúa el valor de la bandera para continuar buscando o no
   if (prompt("¿Desea continuar (s - n)...? ") == "s") bandera = true; 
   else bandera = false; 
    
}  // fin del ciclo while

