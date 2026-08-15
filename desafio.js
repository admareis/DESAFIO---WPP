import { usuarios, listarUser, receberIndice, listMsg } from "./contatos.js";
//listarUser()
//receberIndice()
//listMsg(2,3)

const elemento = {
    grid_container: document.querySelector(".grid-msg"),    
    form_send_message: document.querySelector("#form_send_message"),
    input_send_menssage: document.querySelector("#input_send_msg"),
    lista_contatos:document.querySelector(".chat"),
};

console.log(elemento.lista_contatos);

elemento.form_send_message.addEventListener("submit", (e) => {
  e.preventDefault();
  insertMessage(elemento.input_send_message.value);
});

function getHour() {
  const data = new Date().toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return data;
}

function insertMessage(message) {
  const article = document.createElement("article");
  const paragrafo = document.createElement("p");
  const span = document.createElement("span");

  article.classList.add("enviadas");

  paragrafo.innerText = message;
  span.classList.add("hour");
  span.innerText = `${getHour()}`;

  article.append(paragrafo, span);

  elemento.grid_container.append(article);
  elemento.grid_container.scrollTop = elemento.grid_container.scrollHeight;
  elemento.input_send_message.value = "";
}

function criarContatos(foto, nome, hora, ultima, naoLidas, idContato){
    // criação dos elementos do card dos contatos // 
    const cardContainer = document.createElement('article');
    const fotoContato = document.createElement('img');
    const nomeContato = document.createElement('h3');
    const horaMsg = document.createElement('p');
    const msgUltimaMensagem = document.createElement('p');
    const msgNaoLidas = document.createElement('p');

    cardContainer.className = "chat";
    fotoContato.className = "foto";
    nomeContato.className = "nome";
    horaMsg.className= "hora";
    msgUltimaMensagem.className = "texto";
    msgNaoLidas.className = "";

    cardContainer.id = idContato; // adiciona o id do contato no container para servir de parametro da função que carrega das mensagens no grid // 
    fotoContato.src = foto;
    nomeContato.innerText = nome;
    horaMsg.innerText = hora;
    msgUltimaMensagem.innerText = ultima;
    msgNaoLidas.innerText = naoLidas;

    cardContainer.append(fotoContato, nomeContato, horaMsg, msgUltimaMensagem, msgNaoLidas)
    elemento.lista_contatos.append(cardContainer)
}