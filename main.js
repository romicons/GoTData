//    ACTIVATE DARK/LIGHT MODE

let darkMode = localStorage.getItem('darkMode') === 'true';
const darkModeToggle = document.getElementById('btn-darkmode');

const toggleDarkMode = () => {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.classList.add('darkmode');
        document.getElementById('btn-darkmode-description').innerHTML = `Light Mode`;
    } else {
        document.body.classList.remove('darkmode');
        document.getElementById('btn-darkmode-description').innerHTML = `Dark Mode`;
    }
    localStorage.setItem('darkMode', darkMode);
}

darkModeToggle.addEventListener('click', toggleDarkMode);