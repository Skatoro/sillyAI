"use strict"

let chatLog = [];
run();

function run(){
    let participant = "user";
    let message = "";
    greeting();

    const btnAdd = document.querySelector(".btn");
    btnAdd.addEventListener("click", function() {sendMessage(participant, message)});
}

function greeting() {
    let participant = "bot";
    let message = "Привіт, мене звати Люсі. А тебе як?";
    sendMessage(participant, message);
}

function pleasureToMeet() {
    let participant = "bot";
    let message = `Дуже приємно, ${chatLog.at(-1)}. 
    Як в тебе справи?`;
    sendMessage(participant, message);
}

function moodAnswer() {
    let participant = "bot";
    console.log(chatLog.at(-1))
    let answer = chatLog.at(-1);
    let message;
    if (answer === "Погано") {
        message = "Шкода це чути. Хочеш про це поговорити?"
    } else if (answer === "Гарно") {
        message = "Рада це чути! Що тебе порадувало?"
    }
    sendMessage(participant, message);
}

function conversationYes() {
    let participant = "bot";
    let message = "Тоді слухаю"
    sendMessage(participant, message);
}

function conversationYesBye() {
    let participant = "bot";
    let message = "Так, неприємна ситуація. Шкода що так трапилось і сподіваюся, що тобі стане краще. На жаль мені потрібно вже бігти, але коли я закінчу свої справи, можемо поговорити про це ще. Гарного дня!"
    sendMessage(participant, message);
    message = `Кількість повідомлень: ${chatLog.length}`
    sendMessage(participant, message);
}

function conversationNo() {
    let participant = "bot";
    let message = "Добре, але якщо захочеш поговорити, я завжди поряд. Гарного дня!"
    sendMessage(participant, message);
    message = `Кількість повідомлень: ${chatLog.length}`
    sendMessage(participant, message);
}

function goodBye() {
    let participant = "bot";
    let message = "Як цікаво! Сподіваюся в тебе ще довго буде такий настрій. Рада була поговорити, до зустрічі!"
    sendMessage(participant, message);
    message = `Кількість повідомлень: ${chatLog.length}`
    sendMessage(participant, message);
}

function sendMessage(participant, message) {
    if (participant === "user") {
        participant = "user-msg";
        message = document.getElementById("textarea-msg").value;
        if (!message) return;
        document.getElementById("textarea-msg").value = "";
    } else if (participant === "bot") {
        participant = "bot-msg";
    } else return;

    const newDiv = document.createElement("div");
    newDiv.classList.add(participant);
    document.getElementById("msg-container").appendChild(newDiv);
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    newContainer.innerHTML = message;
    newDiv.appendChild(newContainer);
    chatLog.push(message);

    chatLog.length === 2 ? pleasureToMeet() :
        chatLog.length === 4 ? moodAnswer() :
            (chatLog.length === 6 && chatLog[5] === "Ні") ? conversationNo() :
                (chatLog.length === 6 && chatLog[5] === "Так") ? conversationYes() :
                    (chatLog.length === 8 && chatLog[5] === "Так") ? conversationYesBye() :
                        (chatLog.length === 6) ? goodBye() : false;

    document.getElementById("msg-container").scrollTo(0, document.getElementById("msg-container").scrollHeight);
}
