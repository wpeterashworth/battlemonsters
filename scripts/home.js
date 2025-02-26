//dark mode
let darkButton = document.querySelector("#darkMode");
darkButton.addEventListener('click', () => {
    darkButton.classList.toggle("dark")
    if (darkButton.classList.contains("dark")) {
        document.documentElement.style.setProperty('--text-color-light', 'white');
        document.documentElement.style.setProperty('--text-color-dark', 'black')
        document.documentElement.style.setProperty('--background-color', '#A9B3CE');
        document.documentElement.style.setProperty('--accent-color', '#B24C63');
        document.documentElement.style.setProperty('--header-color', '#357DED');
    }
    else {
        document.documentElement.style.setProperty('--text-color-light', 'black');
        document.documentElement.style.setProperty('--text-color-dark', 'white');
        document.documentElement.style.setProperty('--background-color', '#474954');
        document.documentElement.style.setProperty('--accent-color', '#357DED');
        document.documentElement.style.setProperty('--header-color', '#B24C63');
    }
})