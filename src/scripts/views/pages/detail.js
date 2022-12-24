import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/therestaurant-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="sub__title">
        <h2>Detail Restaurant</h2>
      </section>
      <div class="content__list">
        <div class="content__item-detail" id="data">

        </div>
      </div>
      <div class="comment__review-section">
        <h2>Add Review this Restaurant</h2>
        <form class="form-wrapper" id="formReview">
          <input type="text" placeholder="Typing Your name here..." class="form" id="input-name" required/>
          <input type="text" placeholder="Typing Your review here..." class="form section" id="input-review" required/>
          <button type="submit" id="add" class="form submit">Submit</button>
        </form>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantSource.detail(url.id);
    const restaurantsContainer = document.querySelector('#data');
    restaurantsContainer.innerHTML += createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        address: restaurant.address,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    // Add Review
    const nameinput = document.querySelector('#input-name');
    const reviewinput = document.querySelector('#input-review');
    const reviewsubmit = document.querySelector('#add');

    reviewsubmit.addEventListener('click', async (event) => {
      const review = {
        id: restaurant.id,
        name: nameinput.value,
        review: reviewinput.value,
      };
      event.preventDefault();
      await TheRestaurantSource.addReview(review);
      window.location.reload();
      reviewinput.value = '';
    });
  },
};

export default Detail;
