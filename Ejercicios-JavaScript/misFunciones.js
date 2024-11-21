/**
 * conversion de unidades(metros,pie,pulgadas,yardas)
 * @method cambiarUnidades
 * @param (string) id - El id de metros,pies,pulgadas,yardas.
 * @param (number) valor - El valor de los metros,pies,pulgadas,yardas.
 * @return Valor que retorna
 */

function cambiarUnidades(valor,id){
    var metro,pulgada,pie,yarda;

    if (valor.includes(",")){
        valor = valor.replace(",",".");
    }

 if (isNaN(valor)) {
     alert("se ingreso un valor invalido" + id);
     metro = "";
     pulgada = "";
     pie = "";
     yarda = "";
 }else if (id=="metro"){
     metro = valor;
     pulgada = 39.370 * valor;
     pie = 3.28084 * valor;
     yarda = 1.09 * valor;
 }else if(id=="pulgada"){
     pulgada = valor;
     metro = 0.0254 * valor;
     pie = 0.083 * valor;
     yarda = 0.027 * valor;
 }else if (id=="yarda"){
     yarda = valor;
     metro = 0.914 * valor;
     pulgada = 36 * valor;
     pie = 3 * valor;
 }else if(id=="pie"){
     pie = valor;
     metro = 0.3048 * valor;
     pulgada = 12 * valor;
     yarda = 0.33 * valor;
 }

 document.unidades.unid_metro.value = Math.round(metro*100)/100;
 document.unidades.unid_pulgada.value = Math.round(pulgada*100)/100;
 document.unidades.unid_pie.value =  Math.round(pie*100)/100;
 document.unidades.unid_yarda.value =  Math.round(yarda*100)/100;
}

function convertirGR(id){
    var grad,rad;
    if(id == "grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO){
    if (valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if (valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none'
    }
}

function suma(){
    var num1,num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);

    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}

function resta(){
    var num1,num2;

    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);

    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}

function multiplicacion(){
    var num1,num2;

    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);

    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
}

function division(){
    var num1,num2;

    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);

    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
}

function cargarWeb(){
    var cantidad,unidad,url;

    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    url = "segundaWeb.html#" + cantidad + "#" + unidad;
    window.open(url);
}

function cargarResultado(){
    var url, cantidad,unidad;

    url = window.location.href.split("/")[5];
    cantidad = url.split("#")[1];
    unidad = url.split("#")[2];
document.getElementById("dist").value = cantidad + " " + unidad;
}


function guardarLocalStorage(){
    var distancia,unidad;

    distancia = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_web.html');
}

function cargarLocalStorage(){
    let cantidad,unidad;

    cantidad = localStorage.getItem("distanciaLS");
    unidad = localStorage.getItem("unidadesLS");

    document.getElementsByName("dist").value = cantidad + " " + unidad;
}


function dibujarCirCuad(){
    // Obtener el canvas y el contexto
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Dimensiones del canvas
    var xMax = canvas.width;
    var yMax = canvas.height;

    // Margen
    var margen = 5;

    // Dibujar el cuadrado
    ctx.fillStyle = "#09090e"; // Color de relleno del cuadrado
    ctx.fillRect(margen, yMax - 40 - margen, 40, 40);

    // Dibujar el círculo
    ctx.beginPath(); // Inicia un nuevo trazo
    ctx.arc(xMax / 2, yMax / 2, 20, 0, 2 * Math.PI); // Define el círculo
    ctx.fillStyle = "#82c51d"; // Color de relleno del círculo
    ctx.fill(); // Rellena el círculo
    ctx.strokeStyle = "#000"; // Color del contorno
    ctx.stroke(); // Dibuja el contorno del círculo

}


function dibujar(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    var posx = event.clientX;
    var posy = event.clientY;
    console.log(posx,posy);

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};

    if (bandera){
        ctx.fillRect(posx,posy,5,5);
        ctx.fill;
    }
}

function limpiar(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var alturaMax = canvas.height;
    var anchoMax = canvas.width;

    ctx.beginPath();
    for (var i=0;i<alturaMax;){
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle = "#98fd00";
        ctx.stroke();
        i = i +20;
    }
    for (var i=0;i<anchoMax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,alturaMax);
        ctx.strokeStyle = "#98fd00";
        ctx.stroke();
        i = i +20;
    }
    ctx.closePath();

//eje x
    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle = "#e70035";
    ctx.stroke();
    ctx.closePath();

    //eje y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle = "#e70035";
    ctx.stroke();
    ctx.closePath();
}


function dibujarImagen(posx,posy){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posx,posy);
    var img = new image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function () {
        ctx.drawImage(posx,posy);
    }
}

