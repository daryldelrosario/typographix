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

// FUNCTION for darkmode
function darkMode() {
  themeSwitcher.children[0].textContent = "Dark Mode";
  themeSwitcher.children[1].classList.replace("fa-sun", "fa-moon");
}

// FUNCTION for lightmode
function lightMode() {
  themeSwitcher.children[0].textContent = "Light Mode";
  themeSwitcher.children[1].classList.replace("fa-moon", "fa-sun");
}

// FUNCTION to switch the themese 
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if(!currentTheme || currentTheme === 'light') {
    DocumentTimeline.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
}

// ADDEVENT LISTENERS
themeSwitcher.addEvenetListener("click", switchTheme);