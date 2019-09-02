// Canvas y contexto
var lienzo = document.getElementById("dibujo");
var ctx = lienzo.getContext('2d');
var rango = document.getElementById('rango');

var color = "#96C73D";
var colorCirculo ="#1C3643";

rango.addEventListener('change', ojoPlatzi);

function ojoPlatzi() {
  var txtColorB = "#FFF";
    var txtColorV = "#96C73D";
    var linea = parseInt(rango.value);
    var width = lienzo.width;
    var entreLineas = width / linea;
    var color = "#96C73D";
    var circulos = linea + 20;
    var c;
    var radio = 270;

for(c = 0; c < circulos; c++) {
dibujarCirculos(150, 150, radio);
radio = radio - 3;
}

// Cambiar Color Texto
if(circulos >= 65) {
var cambiaColor = circulos % 2;
    var colorTexto;

    if(cambiaColor == 1) {
        colorTexto = txtColorB;
    }

    if(cambiaColor == 0) {
        colorTexto = txtColorV;
    }

// Dibujar Texto
    ctx.beginPath();
    ctx.shadowOffsetX = 3;
    ctx.font = "40px arial";
    ctx.fillStyle = colorTexto;
    ctx.fillText("Platzi", 180, 270);
    ctx.closePath();

    ctx.beginPath();
    ctx.shadowOffsetX = 2;
    ctx.font = "24px arial";
    ctx.fillStyle = colorTexto;
    ctx.fillText("¡Gracias!", 180, 230);
    ctx.font = "30px Source sans pro";
    ctx.closePath();
}

// Líneas del límite Canvas
dibujarLineas(width - 1, width, width, 1, ctx, color); // Right
dibujarLineas(1, 1, 1, width - 1, ctx, color); // Left
dibujarLineas(width - 1, width - 1, 1, width - 1, ctx, color); // Bottom
dibujarLineas(1, 1, width - 1, 1, ctx, color); // Top

// Curva izquierda-inferior
for(l = 0; l < linea; l++) {
var iniY = l * entreLineas;
    var finX = entreLineas * (l + 1);
dibujarLineas(0, iniY, finX, width - 1, ctx, color); // Original
}

// Curva derecha-Superior
for(l = 0; l < linea;l++) {
var iniY = l * entreLineas;
var finX = entreLineas * (l + 1);
dibujarLineas(width - 1, finX, iniY, 1, ctx, color); // Original
}
}

function dibujarLineas(iniX, iniY, finX, finY, ctx, color) {
ctx.beginPath(); // Inicia el trazado
ctx.strokeStyle = color; // Estilos del trazado(color rojoPlatzi)
ctx.moveTo(iniX, iniY); // Ubicar el punto en el canvas
ctx.lineTo(finX, finY); // Fijar el punto final de la línea
ctx.shadowBlur = 1;
ctx.shadowOffsetY = 2;
ctx.shadowOffsetX = 2;
ctx.stroke(); // Trazar la línea
ctx.closePath(); // Cerrar dejar de dibujar
}

function dibujarCirculos(ubX, ubY, radio) {
ctx.beginPath();
ctx.fillStyle = colorCirculo;
ctx.arc(ubX, ubY, radio, 0, 2 * Math.PI, false);
ctx.shadowBlur = 2;
ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
ctx.shadowOffsetX = 3;
ctx.shadowOffsetY = 4;
ctx.fill();
ctx.closePath();
}
