// A function to modify the element of a text and colour
// Arrow function , does not take any input
const changeText = () => {
    var paragraph5 = document.querySelectorAll('p')[5];

    // Change colour
    paragraph5.style.backgroundColor = '#FFCCCB';

    // Change content
    paragraph5.textContent = 'I Am Changed now.';
}

// Paragraph finder
var paragraph5 = document.querySelectorAll('p')[11];
console.log('Paragraphs');
console.log(paragraph5);

