/* Título:       Primer programa POO
   Descripción:  Crea una clase Usuario para el sistema Bancos
   Objetivo:     Usar la POO para capturar datos de un usuario
   Elaborado:    Hugo Hernández Alarcón (H2a)
   Creación:     22.febrero.2023 */


   class Usuario {

      constructor(cuenta, usuario, nombre, password){
    
        this.cuenta   = cuenta;
        this.usuario  = usuario;
        this.nombre   = nombre;
        this.password = password; 
    
      }
      
    }
    
    var consecutivo = 1;
    var bandera = true;
    var nivel = "";
    var alcaldias = ["IZTAPALAPA","COYOACAN","TLALPAN","CUAHTEMOC","V.CARRANZA"];
    var homoclave = ["IZT","COY","TLP","CUA","VCZ"];
    
    
    while (bandera){
    
      var nombre   = prompt("Capture nombre: ");
      for (var i = 0 ; i < 5 ; i ++){
        console.log(i + ". " + alcaldias[i]);
      }
      
      var alcaldia = prompt("Capture alcaldía: ");
      var genero   = prompt("Capture genero [h - m]: ");
      var salario  = prompt("Capture salario: ");
      var usuario  = prompt("Capture usuario: ");
      var password = prompt("Capture contraseña: ");
    
      if (salario > 0 && salario <= 18999){
        nivel = "A";
      } else if (salario > 19000 && salario <= 30000) {
        nivel = "B";
      } else {
        nivel = "C"; 
      }
    
      var cuenta = homoclave[alcaldia] + genero + nivel + consecutivo;
    
      var usuario1 = new Usuario(cuenta,usuario,nombre,password);
    
      console.log("\n");
      if (prompt("¿Desea continuar...? ") == "n") {
        bandera = false;
      }
    
      consecutivo = consecutivo + 1;
      
    }
    
    console.log(usuario1);
    