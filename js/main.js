// Horario

// Hora
let data = new Date();
let hora = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();

// Dia

let dia = data.getDate();
let mes = data.getMonth()+1;
let ano = data.getFullYear();

if (dia < 10) { dia = "0"+dia; }
if (mes < 10) { mes = "0"+mes; }

if (hora < 10) { hora = "0"+hora; }
if (min < 10) { min = "0"+min; }
if (seg < 10) { seg = "0"+seg; }

const horario =`${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
const calendario = document.getElementById("ano");

calendario.innerHTML = `${horario}`;

setTimeout(() => {
	alert("Seja Bem vindo site em Obras")
},5000)
