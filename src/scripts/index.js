import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
// import Data from '../DATA.json';

// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');
// const dataItem = document.querySelector('#data-item');

// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// dataItem.innerHTML = Data.restaurants.map((restaurant) => `
//     <div class="card">
//         <div class="card__image-wrapper">
//           <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="card__image">
//           <span>${restaurant.city}</span>
//         </div>
//         <div class="card__content">
//           <h4 class="card__rating">Rating : ${restaurant.rating}</h4>
//           <h3 class="card__title"><a href="#">${restaurant.name}</a></h3>
//           <p class="card__description">${restaurant.description}</p>
//         </div>
//     </div>
//   `).join('');
