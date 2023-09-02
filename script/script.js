// Function to display the entire text at once
function displayTextInstantly(element, text) {
    element.innerHTML = text;
}

// Function to make the text blink after a specified number of seconds
function makeTextBlink(element, interval) {
    setInterval(() => {
        element.style.visibility = (element.style.visibility === 'visible') ? 'hidden' : 'visible';
    }, interval);
}

// Get the element with id "typed-text"
const typedTextElement = document.getElementById('typed-text');

// The text you want to display
const textToDisplay = typedTextElement.innerText;

// Display the entire text at once
displayTextInstantly(typedTextElement, textToDisplay);

// Make the text blink after 3 seconds (adjust the interval as needed)
makeTextBlink(typedTextElement, 1000); // Blink every 1 second
