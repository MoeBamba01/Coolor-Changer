
// // Add event listener to the DOMContentLoaded event, which fires when the initial HTML document has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', function() {
    // Get the color-box element by its ID
    const colorBox = document.getElementById('color-box');
    // Get the change-color-btn element by its ID
    const changeColorBtn = document.getElementById('change-color-btn');

    // Define a function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        // Generate a random color by selecting random letters from the 'letters' string
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add event listener to the click event of the change-color-btn element
    changeColorBtn.addEventListener('click', function() {
        // Change the background color of the color-box element to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});

