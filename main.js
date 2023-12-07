function updateLocalStorage(messages) {
    localStorage.setItem('chat-messages', messages.innerHTML);
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    let messages = document.getElementById('chat-messages');

    let message = document.createElement('div');
    let text = document.createElement('p');
    text.textContent = input.value;
    message.appendChild(text);

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = function(e) {
        e.target.parentNode.remove();
        updateLocalStorage(messages);
    };
    
    message.appendChild(deleteButton);

    messages.appendChild(message);

    updateLocalStorage(messages);

    input.value = '';
}

function resetMessages() {
    let messages = document.getElementById('chat-messages');
    messages.innerHTML = '';
    updateLocalStorage(messages);
}
function Connect(users) {
    
}

