"use strict";
const toggleButton = document.getElementById('toggle-skills');
const skills = document.getElementById('toggle-sect');
toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
