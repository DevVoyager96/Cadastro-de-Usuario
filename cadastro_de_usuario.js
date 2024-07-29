const prompt = require("prompt-sync")();

const usuarios = [];
let ultimoId = 1;
const nomeInvalido = (nome) => {nome == "" && isNaN()};
const emailValido = (email) => {
  let valido = true
  usuarios.forEach(usuario => {
    if(email == usuario.email) {
      valido = false
    }
    return
  })
  email == "" && isNaN()};
const telefoneInvalido = (telefone) => { telefone == "" || NaN };
const indiceInvalido = (indice) => {indice < 0 || indice >= usuarios.length || isNaN(indice)};

const listar = () => {
  usuarios.forEach((usuario, i) => {
    console.log(`ID: ${usuario.id}.NOME: ${usuario.nome}.EMAIL: ${usuario.email}. TELEFONE : ${usuario.telefone} `) 

});
}

const modelo = () => {
  let usuario = {}
   while (true) {
    usuario.id = ultimoId
    ultimoId++
    usuario.nome = prompt("Qual o nome do usúario? ")
     if (nomeInvalido(usuario.nome)) {
      console.log("O nome não pode ser vazio")
     } else {
      break;
     }
   }
   while (true) {
    usuario.email = prompt("Qual o email do usúario? ")
     if (emailInvalido(usuario.email)) {
      console.log("O email não pode ser vazio")
     } else {
      break;
     }
    }
    while (true) {
  
      usuario.telefone = prompt("Digite o telefone do usúario, ou digite 'sair' para encerrar")
      
       if (telefoneInvalido(usuario.telefone)) {
        console.log("O telefone não pode ser vazio")
       } else if(telefone == "sair") {
        break

       }
       else {
        break;
       }
      }
    if(
      nome != "" &&
      telefones.length > 0 &&
      emailInvalido(email)
    )
  return {
    nome, 
    email, 
    telefones, id: ++ultimoId,
  };
};

const criar = () => {
  let usuario = modelo();

  usuarios.push(usuario);

  console.log("Cadastro de usuário criado com sucesso");
};



const atualizar = () => {
  listar();

  let indice = prompt("Qual indice deseja atualizar? ");

  let usuario = modelo();

  usuarios[--indice] = usuario;

  console.log("Atualizado");
};

const remover = () => {
  listar();

  let indice = prompt("Qual indice sera removido? ");

  usuarios.splice(--indice, 1);

  console.log("Removido");
};

module.exports = {
  criar,
  atualizar,
  remover,
  listar,
};