// ПЕРЕМИКАННЯ ТЕМИ

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Світла тема";
    } else {
        themeButton.textContent = "🌙 Змінити тему";
    }

});


// ВИВЕРЖЕННЯ ВУЛКАНА

const eruptionButton = document.getElementById("eruptionButton");

const eruptionLayer = document.getElementById("eruptionLayer");

let eruptionTimer;


// Функція запуску виверження

eruptionButton.addEventListener("click", function() {

    // Очищаємо попередню анімацію

    clearTimeout(eruptionTimer);

    eruptionLayer.innerHTML = "";

    document.body.classList.remove("erupting");

    // Запускаємо тряску

    document.body.classList.add("erupting");


    // Створюємо спалах

    const flash = document.createElement("div");

    flash.className = "eruption-flash";

    eruptionLayer.appendChild(flash);


    // Створюємо вулкан

    const volcano = document.createElement("div");

    volcano.className = "volcano";

    volcano.textContent = "🌋";

    eruptionLayer.appendChild(volcano);


    // Головний напис

    const title = document.createElement("div");

    title.className = "eruption-title";

    title.textContent = "🌋 SHKIBID ERUPTION!!!";

    eruptionLayer.appendChild(title);


    // Створюємо 50 написів SHKIBID

    for (let i = 0; i < 50; i++) {

        const word = document.createElement("div");

        word.className = "skibidi-word";

        word.textContent = "SHKIBID";

        word.style.left = Math.random() * 85 + "%";

        word.style.top = Math.random() * 85 + "%";

        word.style.fontSize = (20 + Math.random() * 35) + "px";

        word.style.setProperty(
            "--angle",
            (Math.random() * 60 - 30) + "deg"
        );

        word.style.animationDelay = Math.random() * 0.8 + "s";

        eruptionLayer.appendChild(word);

    }


    // Створюємо частинки лави

    for (let i = 0; i < 45; i++) {

        const lava = document.createElement("div");

        lava.className = "lava";

        lava.style.left = "50%";

        lava.style.top = "75%";

        lava.style.setProperty(
            "--dx",
            (Math.random() * 1000 - 500) + "px"
        );

        lava.style.setProperty(
            "--dy",
            (-Math.random() * 750 - 100) + "px"
        );

        lava.style.setProperty(
            "--duration",
            (1 + Math.random() * 2) + "s"
        );

        eruptionLayer.appendChild(lava);

    }


    // Змінюємо текст кнопки

    eruptionButton.textContent = "🔥 SHKIBID ЗАПУЩЕНО!";


    // Через 6 секунд прибираємо ефекти

    eruptionTimer = setTimeout(function() {

        eruptionLayer.innerHTML = "";

        document.body.classList.remove("erupting");

        eruptionButton.textContent = "🌋 ВЛАШТУВАТИ ВИВЕРЖЕННЯ";

    }, 6000);

});