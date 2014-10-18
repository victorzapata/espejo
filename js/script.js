window.onload = function() {
    inicio()
};

function inicio() {
nom_div("textoingresado").addEventListener("keyup", function(a) {
	
	if (this.value.length != 0) {
		
    nom_div("resultado").innerHTML = iniciar(this.value)
	
    } else {
		
    nom_div("resultado").innerHTML = "Ingrese un texto para cifrar"
	
    }
	
    });
	
    var iniciar = function(a) {
        a = a.toLowerCase();//tolowercase devuelve las letras en minusculas
        var letra = "";
       	var asciinicio=97; //letra a
        var asciifinal= 122;//letra z
        var cadena = "";
		for (var i = 0; i < a.length; i++) {
        
	    letra = a.charAt(i); //toma el caracter 1
          if (letra != " ") {
             var restposf = a.charCodeAt(i) - asciinicio; // toma el numero ascci de la letra guardada en a
             var nuevoascii = asciifinal - restposf;
			 
             cadena += String.fromCharCode(nuevoascii)//devuelve a string en valor del codigo ascii de nuevoascii
         } else {
			 
           cadena += " "
         }
       }
		//touppercase devuelve la cadena en mayuscula
        return cadena.toUpperCase()
    };

    function nom_div(a) {
		
        return document.getElementById(a)
		
    }
}