const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('toggle-sect') as HTMLElement

toggleButton.addEventListener('click', () => {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
})