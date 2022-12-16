import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const categories = restaurant.categories.map((category) => category.name).join(', ');
  const foods = restaurant.menus.foods.map((food) => food.name).join(', ');
  const drinks = restaurant.menus.drinks.map((drink) => drink.name).join(', ');
  const customerReviews = restaurant.customerReviews.map((customerReview) => `
        <div class="review__item">
        <p class="review__name">${customerReview.name}</p>
        <p class="review__date">${customerReview.date}</p>
        <p class="review__review">${customerReview.review}</p>
        </div>
    `).join('');

  return `
        <div class="card__detail-wrapper">
            <div class="detail__title">
              <h2>${restaurant.name}</h2>
            </div>
            <div class="detail__content">
            <div class="detail__image">
                <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="card__image lazyload">
            </div>
            <div class="detail__info">
                <h3 class="detail__info-title">Information</h3>
                <p class="detail__info-desc">${restaurant.description}</p>
                <h3 class="detail__info-title">Address</h3>
                <p class="detail__info-desc">${restaurant.address}</p>
                <h3 class="detail__info-city">Kota</h3>
                <p class="detail__info-desc">${restaurant.city}</p>
                <h3 class="detail__info-title">Categories</h3>
                <p class="detail__info-desc">${categories}</p>
                <h3 class="detail__info-title">Foods</h3>
                <p class="detail__info-desc">${foods}</p>
                <h3 class="detail__info-title">Drinks</h3>
                <p class="detail__info-desc">${drinks}</p>
                <h3 class="detail__info-title">Customer Reviews</h3>
                <div class="review__list">
                  ${customerReviews}
                </div>
            </div>
          </div>
        </div>
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
