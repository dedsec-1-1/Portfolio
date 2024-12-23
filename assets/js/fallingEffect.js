const fallingDIV = document.getElementById("header-section");
const digitsContainerWidth = 20;
const windowWidth = window.innerWidth;

// Calculate the number of lines based on the screen width minus 2 lines
const LINES = Math.floor(windowWidth / digitsContainerWidth) - 2;
let occupiedLines = new Set(); // Keep track of occupied lines

// Function that returns random int
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function falling() {
    // Creating the digits container
    let digitsContainer = document.createElement('div');
    digitsContainer.setAttribute('class', 'falling-numbers');

    // Generate random digits and add them to the container
    for (let index = 0; index < getRandomInteger(6, 9); index++) {
        let randomDigit = getRandomInteger(0, 9);
        let digit = document.createElement('span');

        digit.setAttribute('class', 'digit');
        digit.setAttribute('data-value', randomDigit);
        digit.textContent = randomDigit;

        digitsContainer.appendChild(digit);
    }

    // Find a free line
    let randomLine;
    do {
        randomLine = getRandomInteger(0, LINES);
    } while (occupiedLines.has(randomLine));

    // Mark the line as occupied
    occupiedLines.add(randomLine);

    // Position the digits container
    digitsContainer.style.left = randomLine * digitsContainerWidth + 'px';

    // Append the container to the fallingDIV
    fallingDIV.appendChild(digitsContainer);
    
    // Await a delay before removing the container
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Remove the container and free the line
    fallingDIV.removeChild(digitsContainer);
    occupiedLines.delete(randomLine);
}

// Call `falling` every half second
setInterval(() => {
    falling();
}, 250);
