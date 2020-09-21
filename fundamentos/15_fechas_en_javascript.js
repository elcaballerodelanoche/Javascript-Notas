//En Js existe un objeto llamado date
//los Date son datos de tipo objeto

const dia_hoy = new Date();

console.log(dia_hoy);

//Fecha en especifico Mes, Dia, Año

let navidad_2017 = new Date('12/25/2017');
console.log(navidad_2017);

//Algunos métodos de Date

//obtener mes, enumerado desde 0
console.log(dia_hoy.getMonth());

//obtener dia
console.log(dia_hoy.getDate());

//Dia de la semana
console.log(dia_hoy.getDay());

//obtener año
console.log(dia_hoy.getFullYear());

//obtener minutos
console.log(dia_hoy.getMinutes());

//obtener hora
console.log(dia_hoy.getHours());

//Milisegundos registrados desde 1 de enero de 1970 hasta esta fecha
console.log(dia_hoy.getTime());

//Modificar alguno de los anteriores parámetros
dia_hoy.setFullYear(2016);
console.log(dia_hoy.getFullYear());

//Conversion de fechas al formato local
//fecha.toLocaleDateString('es-CO');

//parecido a get time
console.log(Date.now());