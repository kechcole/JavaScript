

// ANONYMOUS FUNCTION. 

// Select button 4
const button5 = document.querySelectorAll('button')[4];


// Place an anonymous function inside the event listener.
// The functio changes the text content.
button5.addEventListener('click', () =>  {
    var paragraph17 = document.querySelectorAll('p')[17];

    paragraph17.textContent = 'I am changed anonymously by event listener.';

    paragraph17.style.backgroundColor = '#33ff9f'; 
});