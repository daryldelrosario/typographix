// ADDING TITLE ATTRIBUTES AFTER INTRO ANIMATION
setTimeout(() => {
  const icons = document.querySelectorAll('.social-media-icons i');

  icons[0].setAttribute('title', 'Facebook');
  icons[1].setAttribute('title', 'Instagram');
  icons[2].setAttribute('title', 'Twitter [X]');
  icons[3].setAttribute('title', 'Youtube');
  icons[4].setAttribute('title', 'Github');
}, 3000);

// DARK MODE EXERCISE
const themeSwitcher = document.getElementById("theme-switcher");

// FUNCTION for UPDATE THEME ICON & TEXT
function updateThemeIcon(isDarkMode) {
  themeSwitcher.children[0].textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
  themeSwitcher.children[1].classList.replace(isDarkMode ? 'fa-sun': 'fa-moon', isDarkMode ? 'fa-moon': 'fa-sun');
}

// FUNCTION to Determine if dark mode is preferred
function prefersDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// FUNCTION to Set theme based on the preference 
function setThemeBasedOnPreference() {
  const isDarkMode = prefersDarkMode();
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
}

// FUNCTION to switch the themes
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if(!currentTheme || currentTheme === 'light') {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// ADDEVENT LISTENERS
themeSwitcher.addEventListener("click", switchTheme);

// LOCAL STORAGE EXERCISE 
const localStorageTheme = localStorage.getItem("theme");
if(localStorageTheme) {
  document.documentElement.setAttribute("data-theme", localStorageTheme);
  if(localStorageTheme === "dark") {
    darkMode();
  } else {
    lightMode();
  }
}

// NAVIGATION MENU
const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

function hideMenu() {
  nav.classList.remove("active");
  menuIcon.classList.remove("active");
}