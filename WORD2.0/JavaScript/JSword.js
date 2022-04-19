
document.onmousedown = function(){return false}
var f1 = document.querySelectorAll(".f1");
var f2 = document.querySelectorAll(".f2");
var f3 = document.querySelectorAll(".f3");
var f4 = document.querySelectorAll(".f4");
var f5 = document.querySelectorAll(".f5");
var f6 = document.querySelectorAll(".f6");
var abc = document.querySelectorAll(".ABC");
var fila = 0;
var matriz = [f1, f2, f3, f4, f5, f6];
var arreglo = ["ABAJO","FREIR","ABANO","MARIO","LAURA","SOFIA","MARIA","DEJAR","ETICA","ESTAR","FREDY","HERIR","TIGRE","NIETA","PELAR","PRESA","SUERO","SUPER","VIEJA","GOZAR","CHOZA","TRAZO","SUIZO","ROZAR","MIXTA","OVALO","CURVO","CURVA","OLIVA","YERNA","GUIÑO","JAIRO","PANAL","DOBLE","OBRAS","CUERO","ORCAS","DIEGO","GOMAS","ROJOS","DONAS","CESAR","DEBER","DUEÑA","IDEAS","AEREO","DIANA","RAYOS","LADOS","ROSAS","LOTES","LOROS","HIJOS","HIJAS","BODAS","PORTE","NIÑEZ","RUTAS","LIGAS","DATOS","ANDEN","AJENA","BESAR","BIOMA","BINGO","ABEJA","ALERT","VAGOS","DEDOS","INTEL","TOKYO","PIÑAS","PEDRO","PAULO","PABLO","PAULA","MESSI","EDWIN","VIDAS","MESAS","LINDA","LINDE","CASAS","PLAYA","SALAS","HAWAI","RATAS","CAMAS","ABONO","CINCO","ABRIL","ABRIR","ABUSO","ACABE","ACABO","ACASO","ACATO","ACERA","ACERO","ACILO","TAZOS","ALTOS","ACOSO","SOPAS","SOLOS","PELOS","GAFAS","UNION","SOLAR","HORAS","GATOS","LINUX","COSMO","ACTOR","ACUSE","ADIOS","UTERO","ADOBE","ADOBO","ADORO","LEONA","AFINO","AGUDO","AGUJA","AHOGO","AHORA","ALDEA","ALEJA","ALETA","ALGUN","ALIAS","ALOJA","ALTAR","ALZAR","AMADO","AMATE","AMAÑO","AMBOS","AMIGA","AMIGO","ANCHO","ANCLA","ANDAR","ANEXO","ANIME","ANTES","ANTRO","ANUAL","APEGO","APODO","APOYO","APURO","AQUEL","ARAÑA","ARDOR","AREPA","ARENA","ARETE","ARMAR","ARNES","AROMA","ARPEO","ARPON","ARROZ","ARTOS","ASADO","ASEAR","ASILO","ASTRO","ATADO","ATAJO","ATAUD","ATROZ","ATRAS","AUDIO","AUTOR","AVENA","AVISO","AVION","AXILA","AYUDA","AYUNO","AZOTE","AÑEJO","ACIDO","ALBUM","AMBAR","ANGEL","ANIMO","ANULO","APODO","ARABE","ARBOL","ATICO","ATOMO","BAHIA","BAILE","BAJAR","BALDE","BALSA","BALON","BAMBU","BANDO","BARBA","BARBO","BARCA","BARCO","BARDA","BARDO","BARIA","BARIL","BARIO","BARRA","BARRO","BARON","BATIR","BAÑAR","BEBER","BECAR","BELLO","BICHE","BICHO","BLUSA","BOMBA","BORDE","BOXEO","BOZAL","BRAVA","BRAVO","BRAZO","BREVE","BROMA","BRUJA","BRUJO","BRUTA","BRUTO","BOLSA","BUCES","BUENA","BUENO","BURRO","BUZON","BOXER","GUIAS","CABLE","CABRA","CACAO","CACHO","CACHE","CALDO","CALLE","CALMA","CALVO","CAMPO","CANTO","CAPAZ","CARGA","CARGO","CARNE","CARNE","CARPA","CEBRA","CAZAR","CENAR","COCAS","CERCA","CERDO","CESTA","CHAVO","CHICA","CHICO","CHILE","CHINA","CHIVA","CHUCA","CICLO","CIEGO","CIELO","CINTA","CIRCO","CITAR","CIVIL","CLARO","CLASE","CLAVE","CLAVO","CLIMA","CLORO","COBRE","COBRO","COMER","COCHE","COFRE","COMUN","CORTE","COSTA","COSTO","CRACK","CREER","CREMA","CRIAR","CRUCE","CRUDO","CRUEL","CUEVA","CUIDO","CULPA","CULTO","COMIC","DANZA","DARDO","DAÑAR","DEDIL","DESDE","DESEO","DEUDA","DIETA","DIGNO","DIJES","DIOSA","DOLAR","DOLOR","DOMAR","DONAR","DONDE","DOPAR","DORSO","DOSIS","DOTAR","DRAMA","NARIZ","LETAL","LATAS","BOCAS","DROGA","DUCHA","DUDAR","DUELO","MIMOS","DUETO","DUEÑO","DULCE","DOCIL","DOLAR","EBRIO","ECHAR","ELITE","ENANO","ENCIA","ROBAR","ENERO","ENOJO","ENTRE","ENVIO","EQUIS","ERIZO","MIMAR","ERROR","ETAPA","ETNIA","EXTRA","EPICO","EPOCA","ETICO","EXITO","FALDA","FALLA","FALSO","FALTA","FAROL","FATAL","FAUNA","FAVOR","FECHA","FELIZ","FERIA","FEROZ","FIADO","NADAR","FIBRA","FICHA","FIDEO","FIERA","FIJAR","FINAL","FINCA","FIRMA","FIRME","FLACO","FLAMA","FLASH","FLOTE","FLUIR","FLUJO","FOBIA","FONDO","RANAS","FORMA","FORRO","FRASE","FRENO","FRESA","FRITO","FRUIR","FRUTA","FRUTO","FUEGO","FUERA","FUGAR","FUGAZ","FUMAR","FUNDA","FURIA","FUSIL","FUSIL","GALLO","GALAN","GANAR","GANGA","NUDOS","LUCIR","GANSO","GASTO","GATAS","MANOS","GENIO","GENTE","GESTO","GLOBO","GOLES","GOLPE","GORDO","GORRA","GORRO","GRADA","GRADO","GRAMO","GRANO","GRAPA","GRASA","GREÑA","GRIFO","GRIPA","GRITO","GRUPO","GUAPO","GUISO","GUION","HABLA","HACER","HACHA","HALDA","HASTA","HECHO","HELIO","AXION","HIELO","HOBBY","HOGAR","HONDA","HONDO","HONGO","HONOR","HORDA","HORNO","HOTEL","HUECO","HUESO","HUEVO","HUMOR","HEROE","ICONO","IDEAL","IGUAL","ILESO","ILUSO","INDIA","INDIO","INDEX","JABON","JALAR","JAMAS","JAMON","JAPON","JAQUE","JARRA","JAULA","JODER","JOVEN","JUDAS","JUDIA","JUDIO","ROLLO","JUEGO","JUEZA","JUGAR","JULIO","JUNIO","JUNTA","JUNTO","JURAR","JUSTO","KOALA","OSCAR","KEVIN","LABIO","LABOR","LAMER","LANZA","LARGO","LATIN","LECHE","LEGAL","LEJOS","LENTO","LEIDO","LIBRE","LIBRO","LICOR","LIMAR","LIMBO","LIMON","LINDO","LISTA","LITRO","LLAMA","LLANO","LLAVE","LLENO","LOCAL","LOGOS","LOGRO","LUCHA","LUDIR","LUEGO","LUGAR","LUNAR","LUNES","LUVIA","LAPIZ","LASER","LATEX","LIDER","LINEA","MACHO","MADRE","MAFIA","MAGIA","MALLA","MALTA","MANCO","MANDO","MANGA","MANGO","MANTA","MAPEO","MARCA","MARCO","MAREA","MAREO","MARTE","MARZO","MAYOR","MECHA","MEDIA","MEDIO","MEDIR","MELON","MENOR","MENOS","MENSO","MENTA","MENTE","MESON","METAL","MIEDO","MILLA","MIOPE","MIRAR","MISIL","MISMO","MIXTO","MITAD","MOJAR","MOLDE","MOLER","MOMIA","MONJA","MONTE","MONTO","MORAL","MORRO","MORSA","MOSCA","MOTEL","MOTOR","MOVER","MUCHO","MUDAR","MUECA","MUGRE","MUJER","MUNDO","MUSEO","MUSGO","MUSLO","MUTUO","MISIL","MOVIL","ARAÑA","ARIES","LIBRA","MARTE","PARIS","RUSIA","SATAN","TAURO","TROYA","VENUS","VERBO","NIDOS","VIRGO","NACER","NACHO","NADIE","NARCO","NATAL","NECIO","NEGAR","NEGRO","NIETO","NIEVE","NOBLE","NOCHE","NORMA","NORTE","NOVIO","NUERA","LETRA","NUEVA","NUEVE","NUEVO","NUNCA","OBESO","OBVIO","ODIAR","OESTE","DADOS","OJALA","OJEAR","OJERA","OPACO","OPTAR","ORDEN","OREJA","ORINA","ORUGA","OSTIA","OVEJA","OVULO","OXIDO","PADRE","PAILA","PANDA","PARDO","PARED","PARIR","PARTE","PASEO","PASTA","PASTO","PATAS","PATIO","PAUSA","PAÑAL","PEAJE","PECAR","PECHO","PECIO","PEDAL","PEDIR","PEGAR","PEINE","PELEA","PENAL","PERLA","PERRO","PESAR","PESCA","PEZON","PIANO","PISTA","PICOR","PIEZA","PILAR","PINZA","PIOJO","PIOLA","PISCA","PIXEL","PIZCA","PIZZA","PLACA","SACOS","PLAGA","PLANO","PLATA","PLATO","PLAZA","PLUMA","POBRE","PODER","PEÑAS","POEMA","POETA","POLLO","POLVO","VASOS","TARRO","PRESO","PRIMA","PRIMO","PRISA","PULGA","PULIR","PULPA","PULPO","PULSO","PUNTA","PUNTO","CASCO","TAZAS","CARTA","PATOS","PUZLE","QUEJA","QUESO","RABIA","RADAR","RADIO","RAMPA","RASGO","RATON","RAYAR","RECTA","REGLA","REINA","REINO","RELOJ","RESTA","RETEN","REZAR","RIFLE","RIÑON","ROBLE","ROBOT","RODAR","RODEO","ROGAR","ROMBO","RONCO","RONDA","ROSCA","ROTAR","RUBIA","RUBIO","RUEDA","RUIDO","RUMOR","RUSIA","SABER","SALIR","SABIO","SABOR","SACAR","SALSA","SALTO","SALUD","SALON","SIMIO","SECAR","CARRO","SECTA","SELLO","SELVA","SERIE","SERIO","SEUDO","SEXTO","SEÑAL","SEÑOR","SIETE","SIGLO","SIGNO","SILLA","SIMIO","SOBAR","SOBRA","SOBRE","SOCIO","SODIO","SORDO","SUAVE","SUBIR","SUCIO","NIÑOS","MOUSE","SUDOR","SUECO","SUELA","SUELO","SUEÑO","SUIZA","SUMAR","SUSTO","SUTIL","TABLA","TACON","TALLA","TALLO","TALON","TAMAL","TANTO","TAPAR","TAPIZ","TARDE","TAREA","TARTA","TECHO","TECLA","TEMOR","TENER","TERCO","TERMO","TESIS","TESLA","TACOS","TEXTO","TIBIO","TIESO","TILDE","TIMON","TINTA","TINTE","TINTO","TOCAR","TOLDO","TOMAR","TORRE","TORSO","TORTA","TOSER","TOTAL","TRAER","TRAGO","TRAJE","TRAMO","TRAPO","TRATO","TRIGO","TROPA","TRONO","TROVA","TROYA","ASTAS","TRUCO","TUMOR","TUNEL","TURCO","TOROS","PUMAS","CEJAS","TURNO","TUTOR","ULTRA","USADO","USTED","USUAL","UÑERO","UNICO","VAGON","VALLA","VALLE","VALOR","VAPER","VAPOR","VEJEZ","VELLO","VELOZ","LAZOS","VENIR","VENDA","VENTA","VENUS","VERBO","VERDE","VERSO","VICIO","VIEJO","VILLA","VIRGO","VIRUS","VISCO","VISOR","YENES","PRINT","EUROS","PESOS","PARAR","VISTO","VISON","VITAL","VIUDA","VIUDO","VIVIR","VOCAL","VODKA","VOLAR","VOTAR","VUELO","VIDEO","YEGUA","YERNO","YUMBO","ZOMBI","ZORRO","ZURDA","ZURDO"];
var siguiente = false;
var completado = false;
var ganador = false;
var num = Math.floor(Math.random()*arreglo.length);
var letra_juego = [];
var palabra = arreglo[num];
console.log(palabra);
var separado = palabra.split("");
function escribir_cuadro(t){
    if(ganador == false){
        if(completado == false){
            detener: while(fila<6){
                for(let j = 0; j<5;j++){
                    if(matriz[fila][j].value == ""){
                        matriz[fila][j].value = t;
                        letra_juego.push(t);
                        if(letra_juego.length >= 5){
                            completado = true; siguiente = true;
                        }
                        break detener;
                    }
                }
            }
        }
    }
}
function borrar(){
    if(letra_juego.length!= 0){
        matriz[fila][letra_juego.length-1].value = "";
        letra_juego.pop();
        completado = false;
    }
}
function color(a,b){
    for(let q = 0; q < abc.length; q++){
        if(a.value == abc[q].value){
            switch(b){
                    case 1:
                        abc[q].style.backgroundColor = "rgb(106, 170, 100)";
                        break;
                    case 2:
                        if(abc[q].style.backgroundColor != "rgb(106, 170, 100)"){
                            abc[q].style.backgroundColor = "rgb(201, 180, 88)";
                        }
                        break;
                    case 3:
                        if(abc[q].style.backgroundColor != "rgb(201, 180, 88)" || abc[q].style.backgroundColor != "rgb(106, 170, 100)"){
                            abc[q].style.backgroundColor = "rgb(58, 58, 60)";
                        }
                        break;
            }
        }
    }
}
function enviar(){
    if(ganador == false){
        var palabracompuesta = "";
        for(let unir = 0 ; unir< letra_juego.length;unir++){
            palabracompuesta += letra_juego[unir];
        }
        if(arreglo.includes(palabracompuesta) == true){
            for(let q = 0; q< letra_juego.length ; q++){
                matriz[fila][q].style.animationName = "prueba";
                if(separado[q] == letra_juego[q]){
                    matriz[fila][q].style.backgroundColor = "#6aaa64";
                    var caso = 1; color(matriz[fila][q],caso);
                }else if(palabra.includes(letra_juego[q])== true){
                    matriz[fila][q].style.backgroundColor = "#c9b458";
                    var caso = 2;color(matriz[fila][q],caso);
                }else{
                    matriz[fila][q].style.backgroundColor = "#3a3a3c";
                    var caso = 3;color(matriz[fila][q],caso);
                }
                matriz[fila][q].style.border = "0px";
            }
            if(siguiente == true){
                letra_juego = []; completado = false; siguiente = false; fila++;
            }
            if(palabracompuesta == palabra){
                document.getElementById("ventana").style.display = "block";
                document.getElementById("mensaje").textContent = "¡GANASTE! la palabra era "+palabra;
                ganador = true;
            }else if(fila >= 6){
                document.getElementById("ventana").style.display = "block";
                document.getElementById("mensaje").textContent = "PERDISTE... la palabra era "+palabra;
                ganador = true;
            }switch(palabracompuesta){
                case "KEVIN":
                    document.getElementById("ventana").style.display = "block";
                    document.getElementById("mensaje").textContent = "La palabra era "+palabra+" pero GANASTE porque te llamas KEVIN";
                    ganador = true;
                    break;
            }
        }else if (document.getElementById("ventana2").style.display != "block"){
            document.getElementById("ventana2").style.display = "block";
            document.getElementById("mensaje2").textContent = "La palabra NO existe";
            setTimeout("nopalabra()",750);
        }
    }
}
function nopalabra(){
    document.getElementById("ventana2").style.display = "none";
}
function tecla(e){
    var letra = event.key;
    letra = String(letra).toUpperCase();
    if(letra>="A" && letra<="Z" && letra.length == 1 || letra == "Ñ"){
        escribir_cuadro(letra);
    }else if(letra == "BACKSPACE"){
        borrar();
    }else if(letra == "ENTER"){
        enviar();
    }
}
function letra(v){
    escribir_cuadro(v);
}
function cerrar(){
    document.getElementById("ventana").style.display = "none";
    location.reload(); ganador = false;
}
 function dia_noche(){
    if(document.getElementById("dn").value == "DIA"){
        document.body.style.backgroundColor = "#fff";
        document.getElementById("titulo").style.backgroundColor = "#fff";
        document.getElementById("dn").value = "NOCHE";
        document.getElementById("titulo_wordle").style.color = "#000000";


        for(let j = 0; j< abc.length ; j++){
            abc[j].style.backgroundColor = "#d3d6da";
            abc[j].style.color = "#000000";
        }
    }
} 