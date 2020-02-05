var mes=10;
var mensaje,nombre="Sergio Leonel Silvestre Ortega 20008499";

if (mes == 12 || mes == 2 || mes ==1 ) 
  mensaje = "Invierno";


if(mes >= 3 && mes <= 5)
  mensaje = "Primavera";

if(mes >= 6 && mes <= 8)
  mensaje = "Verano";

if(mes >= 9 && mes <= 11)
  mensaje = "Otoño";


document.write(mensaje+"<br>");
console.log(mensaje);

document.write(nombre);
console.log(nombre);