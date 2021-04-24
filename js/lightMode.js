'use strict';

const lightModeButton = document.getElementById('lightMode');

let nowDark = false;

lightModeButton.addEventListener('click', evt => {

    // Define color palette
    let background = (nowDark) ? 'white' : '#222',
        color = (nowDark) ? '#222' : 'white';

    // Change styles
    document.body.style.background = background;
    document.body.style.color = color;
    evt.target.style.color = color;

    // Reverse dark mode toggle
    nowDark = !nowDark;

});