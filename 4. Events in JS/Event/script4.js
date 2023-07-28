// First event function 
const changeText4 = () => {
    var paragraph11 = document.querySelectorAll('p')[14];

    paragraph11.textContent = 'I am changed by the event listener.';
}


// Second event function 
const changeText4Colour = () => {
    const paragraph11 = document.querySelectorAll('p')[14];

    paragraph11.style.backgroundColor = '#FF1493';
}



// Events
// Select button 4
const button4 = document.querySelectorAll('button')[3];


// The first event will have a listener 
// Add eventlistener fo changing text content
button4.addEventListener('click', changeText4);

// Event handler property for the last event , colour change
button4.addEventListener('click', changeText4Colour);



// In this example, both events will fire, providing the user with both an
// alert and modified text once clicking out of the alert.
