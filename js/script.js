"use strict"


let currentStack = 0;
let chatLog = [];
let messagePair = 1;
let horoscopeArray = [
    ["Рік обіцяє бути не менш феєричним, ніж попередній. " +
    "Рухатися вперед доведеться в дуже активному темпі, " +
    "навіть якщо кінцева мета остаточно не визначена. " +
    "Конструктивний погляд на збільшення капіталу вже " +
    "навесні принесе свої плоди у вигляді дивідендів",

    "До кінця весни наймилішим девізом для представників " +
    "знака Козорога буде \"мій дім — моя фортеця\". " +
    "Облаштувати острівець комфорту, затишку, гармонії, " +
    "емоційної захищеності допоможуть ремонт, оздоблення " +
    "житла, купівля меблів або предметів інтер’єру"],


    ["2023-й надасть всі умови для монетизації талантів. " +
    "Особливо сприятливий час для цього — зима і початок весни. " +
    "Зірки рекомендують спробувати себе в новій якості — і вже у " +
    "квітні й травні здивуватися фінансовим результатам",

    "Сьогодні день химерних мрій. Це буде весело. Старі ідеї " +
    "та упередження з минулого активно виходитимуть на поверхню з " +
    "підсвідомості цього вечора"],

    ["У першому півріччі варто дотримувати правила: краще зробити " +
    "неідеально, ніж не зробити взагалі. Це сприятливий час для " +
    "привернення уваги аудиторії, зміцнення авторитету в професійному " +
    "середовищі та підвищення впізнаваності особистого бренду",

    "Ви повинні виявити розсудливість у особистих рішеннях " +
    "з фінансових питань. Винахідливість у зароблянні грошей – " +
    "це добре, але потрібна обережність у діяльності, " +
    "в якій Ви берете участь"],

    ["2023 рік почнеться активно й потребуватиме чималих зусиль для " +
    "завершення справ і доведення поточних проєктів до ідеалу. Ближче " +
    "до весни випаде нагода змінити місце роботи або просунутися в кар’єрі",

    "Однієї думки зараз недостатньо. Воно має бути підкріплене вищими людьми " +
    "чи доказами - насамперед, потрібна практична цінність"],

    ["2023-й загалом проходитиме спокійніше, ніж попередній рік, " +
    "але раптові пориви кардинально змінити своє життя таки будуть. " +
    "Це може стосуватися і професійної діяльності, і особистих " +
    "взаємин — уже в січні ви це відчуєте",

    "У першій половині року представникам знака Тельця можна " +
    "й варто уникати соціальної активності — щоб відпочити та " +
    "поновити свої ресурси. Прагнення робити абищо створить лише " +
    "ілюзію діяльності й призведе до помилок"],

    ["Новий рік відкриває можливості для професійного розвитку. " +
    "Це важливий етап переходу на наступний рівень, з іншим " +
    "ступенем відповідальності. Вже в лютому можна братися за " +
    "грандіозні проєкти і втілювати в життя найкреативніші ідеї",

    "Сьогодні Ваше мислення працює ясно, плідно та дуже швидко. " +
    "Ви насолоджуватиметеся спілкуванням, швидким обміном репліками, " +
    "написанням листів, розумовими іграми та вирішенням головоломок - " +
    "все це дасть їжу Вашому активному розуму"],

    ["Весь перший квартал представники знака — на гребні хвилі. " +
    "Можливі далекі закордонні подорожі або навіть еміграція. " +
    "У будь-якому разі в цей час всі контакти з іноземними " +
    "партнерами виправдають сподівання й відкриють привабливі перспективи",

    "Ваші інтуїція та чутливість взяли коротку відпустку, що дозволяє " +
    "вам технічніше підійти до роботи. Якщо щось турбує, мудріша і " +
    "досвідченіша людина може дати Вам пораду"],

    ["Цей рік сприяє вибудовуванню вектора кар’єри на тривалу перспективу, " +
    "спираючись на досягнення попередніх п’яти років. Пройдено чималий шлях, " +
    "але головна вершина ще попереду, і, щоб її дістатися, " +
    "треба зробити вирішальний ривок",

    "Ви будете насолоджуватися величезним успіхом та увагою у професійній сфері. " +
    "Сьогодні хороший день для того, щоб як слід подумати про свою роботу чи конкретний проект"],

    ["2023 рік стане переломним у сфері взаємин: хтось зустріне кохання, " +
    "а хтось зважиться на шлюб або розлучення. Тема партнерства буде " +
    "актуальною упродовж усього року. Зірки радять дбайливо ставитися " +
    "до будь-яких зв'язків: вони можуть виявитися корисними дуже швидко",

    "Від січня й до середини травня в центрі уваги представників знака Діви буде фінансова сфера"],

    ["Січень підсвітить перспективи й проблеми нового року: підкаже, " +
    "де підстелити соломки, до чого докласти зусиль, а з чим — " +
    "попрощатися раз і назавжди. Головна порада зірок — не намагатися " +
    "втримати те, що більше не тішить",

    "Якщо Ви віддастеся справі на всі сто відсотків, бізнес йтиме неймовірно успішно. " +
    "Розумова стимуляція із зовнішніх джерел зараз є дуже важливою для Вас, і варто " +
    "докласти максимум зусиль до співпраці та компромісів з іншими людьми."],

    ["2023 рік принесе багато приводів для гордощів і втіхи. " +
    "Із січня по квітень — сприятливий час для запуску проєктів. " +
    "Нові знання стануть джерелом доходу. Тим, хто веде публічний " +
    "спосіб життя, початок року додасть фоловерів",

    "Не дозволяйте обставинам перешкодити Вам у досягненні мети. " +
    "Туманні ситуації незабаром проясняться. Ви почнете краще розуміти, " +
    "як упоратися з нинішніми проблемами"],

    ["Початок року обіцяє бути спокійним і розміреним. " +
    "Січень і лютий чудові, щоб сповільнитися, відпочити " +
    "й налаштуватися на нові плани та звершення. Водночас " +
    "буде актуальною тема фінансів: добре б переглянути стратегії минулого",

    "Захоплення! Нові відкриття, знайомства та ідеї зроблять цей день незабутнім! " +
    "Вам не доведеться довго чекати: вони самі знайдуть Вас. Можливо, стара проблема " +
    "нарешті вирішиться завдяки оригінальному способу мислення."],
]
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
        userAnswer: null,
        tempStack: null,
        showMessage(userMood) {
            userMood = userMood.toLowerCase();
            if (userMood === "гарно" || userMood === "добре" || userMood === "чудово" || userMood === "нормально") {
                this.botMessage = "Рада це чути! Що тебе порадувало?";
                this.tempStack = 3;
            } else if (userMood === "погано" || userMood === "не дуже" || userMood === "кепсько") {
                this.botMessage = "Шкода це чути. Хочеш про це поговорити?";
                this.tempStack = 4;
            } else {
                let preLast = messageArray.length - 2;
                messageArray[preLast].showMessage();
                currentStack = 1;                   // возвращаем очередь на место, откуда призвали эту функцию
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
        userAnswer: null,
        tempStack: null,
        fromStack: null,
        showMessage(goodMoodAnswer) {
            let gMA = goodMoodAnswer.toLowerCase();
            if (gMA.includes("погода") && (gMA.includes("гарна") || gMA.includes("чудова") || gMA.includes("прекрасна"))) {
                this.botMessage = "Чудово! В мене також сьогодні гарна погода";
                this.botMessage += ". До речі хочеш я тобі напишу інформацію по твоєму гороскопу?";
                this.tempStack = 7;
            } else if (gMA.includes("настрій") && (gMA.includes("гарний") || gMA.includes("чудовий") || gMA.includes("хороший"))) {
                this.botMessage = "Я рада, що в тебе гарний настрій";
                this.botMessage += ". До речі хочеш я тобі напишу інформацію по твоєму гороскопу?";
                this.tempStack = 7;
            } else {
                this.botMessage = "Як цікаво!";
                this.botMessage += " До речі хочеш я тобі напишу інформацію по твоєму гороскопу?";
                this.tempStack = 7;
            }
            sendMessage("bot", this.botMessage);
        },
        nextStack() {
            messageArray[this.tempStack].fromStack = currentStack;
            currentStack = this.tempStack;
            messageArray[currentStack].showMessage(this.userAnswer);
        }
    },

    {
        botMessage: 1,
        userAnswer: null,
        tempStack: null,
        showMessage(badMoodAnswer) {
            badMoodAnswer = badMoodAnswer.toLowerCase();
            if (badMoodAnswer === "так" || badMoodAnswer === "давай" || badMoodAnswer === "звісно" || badMoodAnswer === "добре") {
                this.botMessage = "Тоді слухаю";
                this.tempStack = 5;
            } else if (badMoodAnswer === "ні" || badMoodAnswer === "не зовсім" || badMoodAnswer === "не дуже") {
                let last = messageArray.length - 1;
                messageArray[last].botMessage = "Що ж, я завжди поруч, якщо ти вирішиш поговорити. Гарного дня!";
                messageArray[last].showMessage();
                return;
            } else {
                let preLast = messageArray.length - 2;
                messageArray[preLast].showMessage();
                currentStack = 2;                   // возвращаем очередь на место, откуда призвали эту функцию
                return;
            }
            sendMessage("bot", this.botMessage);
        },
        nextStack() {
            currentStack = this.tempStack;          // меняем номер очереди только когда получим ответ от пользователя
            messageArray[currentStack].showMessage(this.userAnswer);
        }
    },

    {
        botMessage: null,
        userAnswer: null,
        tempStack: null,
        showMessage(badMoodAccepted) {
            let bMA = badMoodAccepted.toLowerCase();
            if (bMA.includes("погана") && bMA.includes("погода") || bMA.includes("негода") || bMA.includes("дощ")) {
                this.botMessage = "Прикро це чути, сподіваюся що погода стане краще";
                this.botMessage += ". До речі хочеш я тобі напишу інформацію по твоєму гороскопу?";
                this.tempStack = 7;
            } else if (bMA.includes("настрій") && (bMA.includes("поганий") || bMA.includes("кепський") || bMA.includes("зіпсований"))) {
                this.botMessage = "Що трапилося?";
                this.tempStack = 6;
            } else {
                this.botMessage = "Прикро це чути, сподіваюся тобі стане краще";
                this.botMessage += ". До речі хочеш я тобі напишу інформацію по твоєму гороскопу?";
                this.tempStack = 7;
            }
            sendMessage("bot", this.botMessage);
        },
        nextStack() {
            messageArray[this.tempStack].fromStack = currentStack;
            currentStack = this.tempStack;      // меняем номер очереди только когда получим ответ от пользователя
            messageArray[currentStack].showMessage(this.userAnswer);
        }
    },

    {
        botMessage: null,
        userAnswer: null,
        tempStack: null,
        showMessage(badMoodExplained) {
            let bME = badMoodExplained.toLowerCase();
            if (bME.includes("голодн") || (bME.includes("хочеться") && bME.includes("їсти"))) {
                this.botMessage = "Що ж, буває, сподіваюся ти скоро зможеш поїсти) Можемо колись приготувати що-небудь разом";
                this.botMessage += ". До речі хочеш я тобі напишу інформацію по твоєму гороскопу?";
                this.tempStack = 7;
            } else if ( bME.includes("сонн") || (bME.includes("хочеться") && bME.includes("спати")) || (bME.includes("мало") && bME.includes("сну"))) {
                this.botMessage = "Згодна, неприємне відчуття";
                this.botMessage += ". До речі хочеш я тобі напишу інформацію по твоєму гороскопу?";
                this.tempStack = 7;
            } else {
                this.botMessage = "Прикро це чути, сподіваюся тобі стане краще";
                this.botMessage += ". До речі хочеш я тобі напишу інформацію по твоєму гороскопу?";
                this.tempStack = 7;
            }
            sendMessage("bot", this.botMessage);
        },
        nextStack() {
            messageArray[this.tempStack].fromStack = currentStack;
            currentStack = this.tempStack;      // меняем номер очереди только когда получим ответ от пользователя
            messageArray[currentStack].showMessage(this.userAnswer);
        }
    },

    {
        botMessage: null,
        userAnswer: null,
        tempStack: null,
        fromStack: null,
        showMessage(horoscopeAnswer) {
            horoscopeAnswer = horoscopeAnswer.toLowerCase();
            if (horoscopeAnswer === "так" || horoscopeAnswer === "звісно" || horoscopeAnswer === "звичайно"
                || horoscopeAnswer === "давай" || horoscopeAnswer === "добре") {
                this.botMessage = "Тоді напиши свій знак зодіаку";
                this.tempStack = 8;
            } else if (horoscopeAnswer === "ні" || horoscopeAnswer === "не хочу" || horoscopeAnswer === "не дуже") {
                let last = messageArray.length - 1;
                messageArray[last].botMessage = "Що ж, тоді до зустрічі, була рада тебе чути";
                messageArray[last].showMessage();
                return;
            } else {
                console.log(5)
                let preLast = messageArray.length - 2;
                messageArray[preLast].showMessage();
                currentStack = this.fromStack;                   // возвращаем очередь на место, откуда призвали эту функцию
                return;
            }
            sendMessage("bot", this.botMessage);
        },
        nextStack() {
            currentStack = this.tempStack;      // меняем номер очереди только когда получим ответ от пользователя
            messageArray[currentStack].showMessage(this.userAnswer);
        }
    },

    {
        botMessage: null,
        userAnswer: null,
        tempStack: null,
        horoscopeNumber: null,
        showMessage(horoscopeType) {
            horoscopeType = horoscopeType.toLowerCase();
            switch (horoscopeType) {
                case "козеріг":
                    this.horoscopeNumber = 0;
                    break;
                case "водолій":
                    this.horoscopeNumber = 1;
                    break;
                case "риби":
                    this.horoscopeNumber = 2;
                    break;
                case "овен":
                    this.horoscopeNumber = 3;
                    break;
                case "телець":
                    this.horoscopeNumber = 4;
                    break;
                case "близнята":
                    this.horoscopeNumber = 5;
                    break;
                case "рак":
                    this.horoscopeNumber = 6;
                    break;
                case "лев":
                    this.horoscopeNumber = 7;
                    break;
                case "діва":
                    this.horoscopeNumber = 8;
                    break;
                case "терези":
                    this.horoscopeNumber = 9;
                    break;
                case "скорпіон":
                    this.horoscopeNumber = 10;
                    break;
                case "стрілець":
                    this.horoscopeNumber = 11;
                    break;
                default:
                    let preLast = messageArray.length - 2;
                    messageArray[preLast].showMessage();
                    currentStack = 7;                   // возвращаем очередь на место, откуда призвали эту функцию
            }
            let predictionAmount = horoscopeArray[0].length;
            let randomPrediction = horoscopeArray[this.horoscopeNumber][Math.floor(Math.random() * predictionAmount)];
            randomPrediction = `Ось твій гороскоп по знаку зодіака ${horoscopeType}: ` + randomPrediction;
            sendMessage("bot", randomPrediction);

            let last = messageArray.length - 1;
            messageArray[last].botMessage = "Мені потрібно вже бігти, рада була тебе чути. До зустрічі!";
            messageArray[last].showMessage();
        },
        nextStack() {
            currentStack = this.tempStack;      // меняем номер очереди только когда получим ответ от пользователя
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
            sendMessage("bot", `Кількість пар повідомлень: ${messagePair}`);
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
    textArea.addEventListener("keyup", event => event.key === "Enter" ? document.getElementById("textarea-msg").value = "" : false)
    messageArray[0].showMessage.call(messageArray[0]);
}

function sendMessage(participant, message) {
    if (participant === "user") {
        messagePair++;
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

