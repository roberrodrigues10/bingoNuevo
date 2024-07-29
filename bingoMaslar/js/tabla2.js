    let tabla = [];
    let multiplo = [];
    let resultado;
    let numerotabla;
    let numeromultiplo;
    let iteracionTabla;
    let iteracionMultiplo;
    let printResultado = "";
    let printResultadoB = "";
    let printResultadoI = "";
    let printResultadoN = "";
    let printResultadoO = "";
    let printResultadoG = "";
    let printResultadoX = "";
    let printResultadoXXX = "";





    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        numerotabla = iteracionTabla + 2;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeromultiplo = iteracionMultiplo + 1;
            resultado = numerotabla * numeromultiplo;
            multiplo.push(resultado);
        }
        tabla.push(multiplo);    
    }

    printResultado += '<div class="container">';
    printResultado += '<div class="bingo">BINGO</div>';
    printResultado += '<div class="col-5"></div>';
    printResultado += '<div class="imagen">';

    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            if (iteracionMultiplo % 5 == 0) {
                printResultado += '<div class="row">';
            }
            printResultado += '<div class="col-1 Triplex-' + iteracionTabla + '-' + iteracionMultiplo + '">'  + tabla[iteracionTabla][iteracionMultiplo] + '</div>';
        }
        printResultado += '</div>';
    }

    printResultado += '<div class="col-4"></div>';
    printResultado += '</div>';
    printResultado += '</div>';
    document.getElementById('BINGO').innerHTML = printResultado;

    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        numerotabla = iteracionTabla + 2;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeromultiplo = iteracionMultiplo + 1;
            resultado = numerotabla * numeromultiplo;
            multiplo.push(resultado);
        }
        tabla[iteracionTabla] = multiplo;
    
        printResultadoB += '<div class="container">';
        printResultadoB += '<div class="bingo">BINGO</div>';
        printResultadoB += '<div class="col-5"></div>';
        printResultadoB += '<div class="imagen">';
    
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            if (iteracionMultiplo % 5 == 0) {
                printResultadoB += '<div class="row">';
            }
            printResultadoB += '<div class="col-1 Triplex-' + iteracionTabla + '-' + iteracionMultiplo + '">'  + tabla[iteracionTabla][iteracionMultiplo] + '</div>';
        }
        printResultadoB += '</div>';
    }
    
    printResultadoB += '<div class="col-4"></div>';
    printResultadoB += '</div>';
    printResultadoB += '</div>';
    
    document.getElementById('b').innerHTML = printResultadoB;

    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        numerotabla = iteracionTabla + 2;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeromultiplo = iteracionMultiplo + 1;
            resultado = numerotabla * numeromultiplo;
            multiplo.push(resultado);
        }
        tabla[iteracionTabla] = multiplo;
    
        printResultadoN += '<div class="container">';
        printResultadoN += '<div class="bingo">BINGO</div>';
        printResultadoN += '<div class="col-5"></div>';
        printResultadoN += '<div class="imagen">';
    
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            if (iteracionMultiplo % 5 == 0) {
                printResultadoN += '<div class="row">';
            }
            printResultadoN += '<div class="col-1 Triplex-' + iteracionTabla + '-' + iteracionMultiplo + '">'  + tabla[iteracionTabla][iteracionMultiplo] + '</div>';
        }
        printResultadoN += '</div>';
    }
    
    printResultadoN += '<div class="col-4"></div>';
    printResultadoN += '</div>';
    printResultadoN += '</div>';
    
    document.getElementById('n').innerHTML = printResultadoN;
    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        numerotabla = iteracionTabla + 2;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeromultiplo = iteracionMultiplo + 1;
            resultado = numerotabla * numeromultiplo;
            multiplo.push(resultado);
        }
        tabla[iteracionTabla] = multiplo;
    
        printResultadoG += '<div class="container">';
        printResultadoG += '<div class="bingo">BINGO</div>';
        printResultadoG += '<div class="col-5"></div>';
        printResultadoG += '<div class="imagen">';
    
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            if (iteracionMultiplo % 5 == 0) {
                printResultadoG += '<div class="row">';
            }
            printResultadoG += '<div class="col-1 Triplex-' + iteracionTabla + '-' + iteracionMultiplo + '">'  + tabla[iteracionTabla][iteracionMultiplo] + '</div>';
        }
        printResultadoG += '</div>';
    }
    
    printResultadoG += '<div class="col-4"></div>';
    printResultadoG += '</div>';
    printResultadoG += '</div>';
    
    document.getElementById('g').innerHTML = printResultadoG;
    
    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        numerotabla = iteracionTabla + 2;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeromultiplo = iteracionMultiplo + 1;
            resultado = numerotabla * numeromultiplo;
            multiplo.push(resultado);
        }
        tabla[iteracionTabla] = multiplo;
    
        printResultadoO += '<div class="container">';
        printResultadoO += '<div class="bingo">BINGO</div>';
        printResultadoO += '<div class="col-5"></div>';
        printResultadoO += '<div class="imagen">';
    
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            if (iteracionMultiplo % 5 == 0) {
                printResultadoO += '<div class="row">';
            }
            printResultadoO += '<div class="col-1 Triplex-' + iteracionTabla + '-' + iteracionMultiplo + '">'  + tabla[iteracionTabla][iteracionMultiplo] + '</div>';
        }
        printResultadoO += '</div>';
    }
    
    printResultadoO += '<div class="col-4"></div>';
    printResultadoO += '</div>';
    printResultadoO += '</div>';
    
    document.getElementById('o').innerHTML = printResultadoO;
    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        numerotabla = iteracionTabla + 2;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeromultiplo = iteracionMultiplo + 1;
            resultado = numerotabla * numeromultiplo;
            multiplo.push(resultado);
        }
        tabla[iteracionTabla] = multiplo;
    
        printResultadoX += '<div class="container">';
        printResultadoX += '<div class="bingo">BINGO</div>';
        printResultadoX += '<div class="col-5"></div>';
        printResultadoX += '<div class="imagen">';
    
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            if (iteracionMultiplo % 5 == 0) {
                if (iteracionMultiplo !== 0) {
                    printResultadoX += '</div>';
                }
                printResultadoX += '<div class="row">';
            }
            printResultadoX += '<div class="col-1 Triplex-' + iteracionTabla + '-' + iteracionMultiplo + '">'  + tabla[iteracionTabla][iteracionMultiplo] + '</div>';
        }
        printResultadoX += '</div>';
    }
    
    printResultadoX += '<div class="col-4"></div>';
    printResultadoX += '</div>';
    printResultadoX += '</div>';
    
    document.getElementById('x').innerHTML = printResultadoX;

    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        numerotabla = iteracionTabla + 2;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeromultiplo = iteracionMultiplo + 1;
            resultado = numerotabla * numeromultiplo;
            multiplo.push(resultado);
        }
        tabla[iteracionTabla] = multiplo;
    
        printResultadoXXX += '<div class="container">';
        printResultadoXXX += '<div class="bingo">BINGO</div>';
        printResultadoXXX += '<div class="col-5"></div>';
        printResultadoXXX += '<div class="imagen">';
    
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            if (iteracionMultiplo % 5 == 0) {
                if (iteracionMultiplo !== 0) {
                    printResultadoXXX += '</div>';
                }
                printResultadoXXX += '<div class="row">';
            }
            printResultadoXXX += '<div class="col-1 Triplex-' + iteracionTabla + '-' + iteracionMultiplo + '">'  + tabla[iteracionTabla][iteracionMultiplo] + '</div>';
        }
        printResultadoXXX += '</div>';
    }
    
    printResultadoXXX += '<div class="col-4"></div>';
    printResultadoXXX += '</div>';
    printResultadoXXX += '</div>';
    
    document.getElementById('xxx').innerHTML = printResultadoXXX;

    
    


