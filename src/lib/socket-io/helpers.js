document.querySelector('.chat[data-chat=person0]').classList.add('active-chat');
document.querySelector('.person[data-chat=person0]').classList.add('active');

var friends = {
  list: null,
  all: null,
  name: '' },

chat = {
  container: null,
  current: null,
  person: null,
  name: null,

}

function setAciveChat(f) {
    console.log('ici')

}







// Fermeture du modal


// Mise à jour des utilisateurs présents
export const updateUsers=(users) =>{

  console.log(users)

}

// Messages
let globalChat 

// Message d'un nouvel utilisateur
export const messageNewUser =(newUsername) =>{
    console.log(newUsername)
}

// // Affichage du message de l'utilisateur courant
// function showMyMessage(text) {
//     let message = '<div class="bubble name me">' + text + '</div>'
//     globalChat.insertAdjacentHTML('beforeend', message)
//   }
  
//   // Affichage d'un message extérieur
//   function showNewMessage(text, usernameSender) {
//     let message = '<div class="bubble name you"><span class="username">' + usernameSender + '</span>' + text + '</div>'
//     globalChat.insertAdjacentHTML('beforeend', message)
//   }
  
// Informations écriture

var someoneWriting 
// Affichage d'un message d'information sur l'écriture
export const showSomeoneWriting =(usernameWriting)=> {
    console.log('ici')

}

export const removeSomeoneWriting =()=> {
  someoneWriting.classList.add('none')
}