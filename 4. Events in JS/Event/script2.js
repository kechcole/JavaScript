
// Function to modify the text content of the paragraph
const changeText2 = () => {
    const paragraph8 = document.querySelectorAll('p')[8];

    // Change colour 
    paragraph8.style.backgroundColor = '#90EE90';

    // Change text content
    paragraph8.textContent = 'I Am Changed and Coloured.';
}

// Add event handler as a property of the button element.

// Select the first button
// const button = document.querySelector('button');

// Select the second button 
const button2 = document.querySelectorAll('button')[1];

button2.onclick = changeText2 ;

// Note that when we are passing a function reference to the ]
// onclick property, we do not include parentheses because we are 
// not invoking the function in that moment, but rather only passing
// a reference to it. 
