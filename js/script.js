"use strict"


let currentStack = 0;
let chatLog = [];
let messageArray = [
    {
        botMessage: "Привіт, мене звати Люсі. А тебе як?",
        userAnswer: null,
        showMessage() {
            sendMessage("bot", this.botMessage);
        },
        nextStack() {
            currentStack++;
            messageArray[currentStack].showMessage(this.userAnswer);
        }

    },

    {
        botMessage: null,
        userAnswer: null,
        showMessage(userName) {
            this.botMessage = `Дуже приємно, ${userName}. Як в тебе справи?`
            sendMessage("bot", this.botMessage);
        },
        nextStack() {
            currentStack++;
            messageArray[currentStack].showMessage(this.userAnswer);
        }
    },

    {
        botMessage: null,
        tempStack: null,
        showMessage(userMood) {
            userMood = userMood.toLowerCase();
            if (userMood === "гарно" || userMood === "добре" || userMood === "чудово") {
                let last = messageArray.length - 1;
                this.botMessage = "Рада це чути! Що тебе порадувало?";
                this.tempStack = last;
                messageArray[last].botMessage = "Як цікаво! Що ж, мені потрібно вже бігти, але ми можемо поговорити потім, гарного дня!";
            } else if (userMood === "погано" || userMood === "не дуже" || userMood === "кепсько") {
                this.botMessage = "Шкода це чути. Хочеш про це поговорити?";
                this.tempStack = 3;
            } else {
                let preLast = messageArray.length - 2;
                messageArray[preLast].showMessage();
                currentStack--;
                return;
            }

            sendMessage("bot", this.botMessage);
        },
        nextStack() {
            currentStack = this.tempStack;
            messageArray[currentStack].showMessage(this.userAnswer);
        }
    },

    {
        botMessage: null,
        tempStack: null,
        showMessage(badMoodAnswer) {
            badMoodAnswer = badMoodAnswer.toLowerCase();
            if (badMoodAnswer === "так" || badMoodAnswer === "давай" || badMoodAnswer === "звісно" || badMoodAnswer === "добре") {
                this.botMessage = "Тоді слухаю";
                let last = messageArray.length - 1;
                this.tempStack = last;
                messageArray[last].botMessage = "Так, неприємна ситуація. Сподіваюся тобі стане краще. Що ж, мені потрібно вже бігти, але ми можемо поговорити потім, гарного дня!";

                sendMessage("bot", this.botMessage);
            } else if (badMoodAnswer === "ні" || badMoodAnswer === "не зовсім" || badMoodAnswer === "не дуже") {
                let last = messageArray.length - 1;
                messageArray[last].botMessage = "Що ж, я завжди поруч, якщо ти вирішиш поговорити. Гарного дня!";
                messageArray[last].showMessage();
            } else {
                let preLast = messageArray.length - 2;
                messageArray[preLast].showMessage();
                currentStack--;
            }
        },
        nextStack() {
            currentStack = this.tempStack;
            messageArray[currentStack].showMessage();
        }
    },

    {
        botMessage : "Я не зовсім зрозуміла, що це має значити. Можеш перефразувати?",
        showMessage() {
            sendMessage("bot", this.botMessage);
        },
        nextStack() {
            messageArray[currentStack].nextStack.call(messageArray[currentStack]);
        }
    },

    {
        botMessage: null,
        showMessage() {
            sendMessage("bot", this.botMessage);
            sendMessage("bot", `Кількість повідомлень: ${chatLog.length}`);
        }
    },
];

run();

function run(){
    const btnAdd = document.querySelector(".btn");
    btnAdd.addEventListener("click", function() {
        sendMessage("user", "")
    });

    const textArea = document.getElementById("textarea-msg");
    textArea.addEventListener("keydown", event => event.key === "Enter" ? sendMessage("user", "") : false)
    messageArray[currentStack].showMessage.call(messageArray[currentStack]);
}

function sendMessage(participant, message) {
    if (participant === "user") {
        participant = "user-msg";
        message = document.getElementById("textarea-msg").value;
        if (!message) return;
        document.getElementById("textarea-msg").value = "";  // Не убрал повторяющиеся, потому что оно удаляет значение в поле после отправки
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

    document.getElementById("msg-container").scrollTo(0, document.getElementById("msg-container").scrollHeight);

    if (participant === "user-msg") {
        messageArray[currentStack].userAnswer = message;
        messageArray[currentStack].nextStack();
    }
}

