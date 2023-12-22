const socket = io();
let username;
Swal.fire({
    title: "Identificarse",
    input: "text",
    text: "Ingrese su nombre de usuario:",
    inputValidator: (value)=>{
        return !value && "Es obligatorio un nombre de usuario."
    },
    allowOutsideClick: false,
}).then((result)=>{
    username = result.value;
    socket.emit("new-user", username)
    console.log(username)
})
const chatInput = document.getElementById("chat-input");
chatInput.addEventListener("keyup", (ev)=>{
    if(ev.key ==="Enter"){
        const inputMessage = chatInput.value;
        if(inputMessage.trim().length > 0){
            socket.emit("chat-message", {username, message: inputMessage})
            chatInput.value = " ";
        }
    }
})

const messagesPanel = document.getElementById("messages-panel")
socket.on("messages", (data)=>{
    let messages = "";
    data.forEach(messageRecived => {
        messages += `<b>${messageRecived.username}:</b>${messageRecived.message}</br>`
    });
    messagesPanel.innerHTML = messages;
})

socket.on("new-user", (username)=>{
    Swal.fire({
        title:`${username} se ha unido al chat.`,
        toast: true,
        position: "top-end"
    })
})