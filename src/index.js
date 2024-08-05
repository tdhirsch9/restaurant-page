import './styles.css';
import Initializepage from './initial-page.js';
import Loadcontactspage from './contact-page.js';

const Webpage = (() => {

 

const homeBtn = document.querySelector(".home-btn")
const menuBtn = document.querySelector(".menu-btn")
const contactBtn = document.querySelector(".about-btn")

Initializepage()

homeBtn.addEventListener("click", Initializepage)

contactBtn.addEventListener("click", Loadcontactspage)

})();



