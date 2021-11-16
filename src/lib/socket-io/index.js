import { io } from "socket.io-client";
export const socket = io("https://taalnetworkserver.herokuapp.com/", {transports: ['websocket', 'polling', 'flashsocket']})

// Variables globales
let username,
    allUsers,
    inputUsername

// Envoie de l'username souhaité
export const handleUsername =(_usernameWanted)=>{
    let usernameWanted  = _usernameWanted
    socket.emit('setUsername', usernameWanted)
  
}

// Envoie d'un message & Traitement écriture
let isWriting = false,
    stopWriting

export const sendMessage = (_text) => {
    let text = _text.trim()
    if (text != '') {
        // Envoie du message
        socket.emit('sendMessage', text)
        // Traitement pour l'écriture
        clearTimeout(stopWriting)
        isWriting = false
        console.log('Stop writing')
        socket.emit('stopWriting')
    }
}

// Réponses concernant l'assignation de l'username
socket.on('acceptUsername', (_username, _allUsers) => {
    username = _username
    allUsers = _allUsers

    console.log(_username,_allUsers, 'accept')
//    updateUsers(allUsers)

})
socket.on('rejectUsername', (_username) => {
  
    inputUsername = _username
    console.log(inputUsername,'reject')
    return inputUsername
})

// Mise à jour des utilisateurs 
socket.on('newUser', (newUsername, newSocketId,_allUsers) => {
    allUsers = _allUsers
    // updateUsers(allUsers)
    // messageNewUser(newUsername)
    console.log(newSocketId,'jil', newUsername)
})
socket.on('leftUser', (_allUsers) => {
    allUsers = _allUsers
    // updateUsers(allUsers)
})



socket.on('newMessage', (text, usernameSender) => {
    // showNewMessage(text, usernameSender)
    console.log(text,usernameSender,'newMessage')
})
  
