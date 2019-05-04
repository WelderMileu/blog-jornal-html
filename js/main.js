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

let conteudo = document.getElementById("conteudo");

const content =[
	{
		title:"Destaque do Esporte",
		text:"Confira os melhores momentos do jogo entre Cruzeiro e Flamengo na integra.",
		subtext:`Lorem ipsum dolor sit amet, 
					consectetur adipisicing elit, 
					sed do eiusmod tempor incididunt ut 
					labore et dolore magna aliqua. Ut enim ad minim veniam, 
					quis nostrud exercitation ullamco laboris nisi ut aliquip 
					ex ea commodo consequat.`,
		img:"img/cruzeiro.jpg"
	},
	{
		title:"Destaque da Politica",
		text:"Presidente Bolsonaro libera K47 e Fuzil para a populaçao confira mais na integra.",
		subtext:`Lorem ipsum dolor sit amet, 
					consectetur adipisicing elit, 
					sed do eiusmod tempor incididunt ut 
					labore et dolore magna aliqua. Ut enim ad minim veniam, 
					quis nostrud exercitation ullamco laboris nisi ut aliquip 
					ex ea commodo consequat.`,
		img:"img/bolsonaro.jpg"
	},
	{
		title:"Destaque da Tecnologia",
		text:"Foi confirmado as melhores areas para se atuar na tecnologia confira mais na integra.",
		subtext:`Lorem ipsum dolor sit amet, 
					consectetur adipisicing elit, 
					sed do eiusmod tempor incididunt ut 
					labore et dolore magna aliqua. Ut enim ad minim veniam, 
					quis nostrud exercitation ullamco laboris nisi ut aliquip 
					ex ea commodo consequat.`,
		img:"img/tecnologia.jpg"
	},

];

const exibir = content.map(( form )=>{
	return conteudo.innerHTML += `<div class="mt-3 mb-3">
			<div class="card mt-3">
				<div class="card-body">
					<div class="float-left">
						<div>
							<img src="${form.img}" width="100" class="image-top">
						</div>
						<div class="card-content">
							<div class="card-title mb-3">
								<p class="text-center text-muted">${form.title}</p>
							</div>
							<div>
								<div class="card-text" style="text-align: center">
									<p>${form.text}</p>
								</div>
								<div class="card-description">
									<p>${form.subtext}</p>
								</div>
								<div class="card-footer">
									<button class="btn btn-integra">
										Confira na Integra
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
});

// Funcão dos artigos

$(document).ready(function(){
	$('#article').hide()
});
