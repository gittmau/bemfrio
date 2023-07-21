

//Menu mobile


let blocoMenu = document.querySelector('.menu')

let menuBotao = document.querySelector('#btnMenu')

let botaoFechar = document.querySelector('#btn-fechar')

let container = document.querySelector('main')


menuBotao.addEventListener('click',abrirMenu)
botaoFechar.addEventListener('click',fecharMenu)

function abrirMenu() {	

	blocoMenu.style.visibility = 'visible'	
	blocoMenu.style.opacity = '1'
	blocoMenu.style.transition = '0.3s'
	
	
}


function fecharMenu(){

	blocoMenu.style.visibility = 'hidden'
	blocoMenu.style.opacity = '0'
	blocoMenu.style.transition = '0.3s'
	

}


// Campo de busca


var campoBusca = document.getElementById('pesquisar')

var btnBusca = document.getElementById('btn-search')

btnBusca.addEventListener('click',cacaPalavra)

function cacaPalavra(){ 

 let validaPalavra = false


 let palavraChave =[ 

	{palavra: "ar condicionado"},
	{palavra: "ar"},
	{palavra: "climatização"},
	{palavra: "instalação de ar condicionado"},
	{palavra: "instalação"},
	{palavra: "higienização"},
	{palavra: "higienização de fan coils"},
	{palavra: "higienização de sistemas"},
	{palavra: "peças"},
	{palavra: "manutenção de ar condicionado"},
	{palavra: "manutenção de ar"},
]

 

	for(let i in palavraChave){

     if(campoBusca.value == palavraChave[i].palavra){
     	validaPalavra = true     	 
         break                   
        }  
    }

    if(validaPalavra == true){
        
       	window.location.href ='info.html'
    }  

    else{
    	alert('[ERROR]\nTente digitar em letra minúscula alguma destas palavras(ar, ar condicionado, manutenção de ar condicionado, peças)')
    }         
}



