import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <section class="sub__title">
        <h2>Your Favourite Restaurant</h2>
      </section>
      <div class="content__list">
        <div id="data" class="content__item">
        Tidak ada restaurant untuk ditampilkan
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#data');

    if (restaurants.length !== 0) {
      restaurantsContainer.innerHTML = '';
    }
    const totalListRestaurant = restaurants.length;
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
