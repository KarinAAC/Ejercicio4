var records= document.getElementById('records');
var empleados = [
  {nombre:"Arabela"   , apellido:"Rojas"     , rol:"TA"        , cumpleaños:"23 de enero"},
  {nombre:"Michelle"  , apellido:"Seguil"    , rol:"TA"        , cumpleaños:"25 de noviembre"},
  {nombre:"Papu"      , apellido:"Rivariola" , rol:"Psicóloga" , cumpleaños:"10 de octubre"},
  {nombre:"Meche"     , apellido:"Zubieta"   , rol:"TA"        , cumpleaños:"02 de marzo"},
  {nombre:"Gian"      , apellido:"Corzo"     , rol:"Profesor"  , cumpleaños:"23 de enero"},
];


  var imp = "";
  empleados.forEach(function (e) {
    imp += "<ul><li>"  + "Nombre: "      + e.nombre     + "</li>"+
                "<li>" + "Apellido: "    + e.apellido   + "</li>"+
                "<li>" + "Rol: "         + e.rol        + "</li>"+
                "<li>" + "Cumpleaños: "  + e.cumpleaños + "</li></ul>"
                records.innerHTML = imp;
  });
