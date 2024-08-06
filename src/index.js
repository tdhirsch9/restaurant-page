import './styles.css';
import Initializepage from './initial-page.js';
import Loadcontactspage from './contact-page.js';
import Loadmenupage from './menu-page.js';

const Webpage = (() => {

 

const homeBtn = document.querySelector(".home-btn")
const menuBtn = document.querySelector(".menu-btn")
const contactBtn = document.querySelector(".about-btn")

const clearContent = () => {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
};

const loadHomePage = () => {
    console.log("home")
    clearContent();
    Initializepage();
};

const loadContactsPage = () => {
    clearContent();
    Loadcontactspage();
};

const loadMenuPage = () => {
    clearContent();
    Loadmenupage();
};

loadHomePage()

homeBtn.addEventListener("click", loadHomePage)

contactBtn.addEventListener("click", loadContactsPage)

menuBtn.addEventListener("click", loadMenuPage)

})();



