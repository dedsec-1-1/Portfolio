const SYMBOLS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}\\|;:,<.>/?"

document.getElementById("header-title").onmouseleave = event => {
    let iterations = 0;
    const textLength = event.target.dataset.value.length;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((symbol, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }

                return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
            })
            .join("");

        if (iterations >= textLength) clearInterval(interval);

        iterations += 1;
    }, 50);
};
