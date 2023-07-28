
// First event function 
const changeText3 = () => {
    var paragraph11 = document.querySelectorAll('p')[11];

    paragraph11.textContent = 'I AM CHANGED.';
}


// Second event function 
const changeText3Colour = () => {
    const paragraph11 = document.querySelectorAll('p')[11];

    paragraph11.style.backgroundColor = '#90EE90';
}


// Event handler property 
// Select button 3 
const button3 = document.querySelectorAll('button')[2];

// Add event 
button3.onclick = changeText3Colour;

// Add event onClick to call function
button3.onclick = changeText3;


