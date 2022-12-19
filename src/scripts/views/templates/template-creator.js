import CONFIG from '../../globals/config';

const folder = './icons/';
const address = 'address.jpg';
const city = 'city.jpg';

const createRestaurantDetailTemplate = (restaurant) => {
  console.log(restaurant);
  const categories = restaurant.categories.map((category) => `
        <li>
            <p class="detail__info-desc restaurant_cat">${category.name}</p>
        </li>
  `).join('');
  const foods = restaurant.menus.foods.map((food) => `
        <li>
            <p class="detail__info-desc restaurant_food">${food.name}</p>
        </li>
  `).join('');
  const drinks = restaurant.menus.drinks.map((drink) => `
        <li>
            <p class="detail__info-desc restaurant_drink">${drink.name}</p>
        </li>
  `).join('');
  const customerReviews = restaurant.customerReviews.map((customerReview) => `
        <div class="review__item">
        <p class="review__name">${customerReview.name}</p>
        <p class="review__date">${customerReview.date}</p>
        <p class="review__review">${customerReview.review}</p>
        </div>
    `).join('');

  return `
    <div class="detail__header">
      <div class="detail__image">
          <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="card__image lazyload">
      </div>
      <div class="detail__description">
          <p class="detail__info-desc restaurant_name">${restaurant.name}</p>
          <p class="detail__info-desc restaurant_desc">${restaurant.description}</p>
          <ul class="wrapper__content-detail">
            <li>
              <img data-src="${folder + city}" alt="city" class="lazyload icons">
              <p class="detail__info-desc restaurant_city">${restaurant.city}</p>
            </li>
            <li>
              <img data-src="${folder + address}" alt="address" class="lazyload icons">
              <p class="detail__info-desc restaurant_add">${restaurant.address}</p>
            </li>
          </ul>
      </div>
    </div>
      <ul>
        <h4>Categories</h4>
        ${categories}
      </ul>
      <ul class="wrapper__content-detail">
        <h4>Food</h4>
        ${foods}
      </ul>
      <ul class="wrapper__content-detail">
        <h4>Drinks</h4>
        ${drinks}
      </ul>
    ${customerReviews}
    `;
};

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
        <div class="card__image-wrapper">
            <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="card__image lazyload">
          <span>${restaurant.city}</span>
        </div>
        <div class="card__content">
          <h4 class="card__rating">Rating : ⭐️ ${restaurant.rating}</h4>
          <h3 class="card__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
          <p class="card__description">${restaurant.description}</p>
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
