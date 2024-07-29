document.addEventListener('DOMContentLoaded', function(){
   //alert('Hola')
   let tabla = [];
   let multiplo = [];
   let  resultado;
   let  numerotabla;
   let  numeromultiplo;
   let  iteracionTabla;
   let  iteracionMultiplo;
   let printResultado="";


   for(iteracionTabla=0;iteracionTabla<1;iteracionTabla++){
    numerotabla = iteracionTabla + 2;
    multiplo=[];
    for(iteracionMultiplo=0;iteracionMultiplo<25;iteracionMultiplo++){
        numeromultiplo = iteracionMultiplo + 1;
        resultado = numerotabla * numeromultiplo;
        multiplo.push(resultado);
       }
       tabla.push(multiplo);    
   }
    printResultado+= '<div class="container">'
    printResultado+= '<div class="bingo">BINGO</div>'
    printResultado+= '<div class="col-5"></div>'
    printResultado+= '<div class="imagen">'
    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
    for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
        if (iteracionMultiplo % 5 == 0) {
            printResultado += '<div class="row">' // Salto de línea para una nueva fila
        }
        printResultado += '<div class="col-1 Triplex-' + iteracionTabla + '-' + iteracionMultiplo + '">'  + tabla[iteracionTabla][iteracionMultiplo] + '</div>';
    }
    printResultado+= '</div>'
    printResultado+= '<div class="col-4"></div>'
    }
    
    document.getElementById('BINGO').innerHTML = printResultado;
    document.getElementById('b').innerHTML = printResultado;
    document.getElementById('i').innerHTML = printResultado;
    document.getElementById('n').innerHTML = printResultado;
    document.getElementById('g').innerHTML = printResultado;
    document.getElementById('o').innerHTML = printResultado;
    document.getElementById('x').innerHTML = printResultado;
    document.getElementById('xxx').innerHTML = printResultado;
});
