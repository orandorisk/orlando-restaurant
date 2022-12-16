const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
})

Scenario('showing empty liked restaurant',  ({ I }) => {
    I.seeElement('.content__list');
    I.see('Tidak ada restaurant untuk ditampilkan', '.content__item');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.content__item');

    I.amOnPage('/');

    I.wait(2);
    I.seeElement('.card__title a');
    const firstRestaurant = (locate('.card__title a').first());
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.wait(2);
    I.seeElement('.content__list');
    I.seeElement('.content__item');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.card__title');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
   
}
);

Scenario('unliking one restaurant', async({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.content__item');

    I.amOnPage('/');

    I.wait(2);
    I.seeElement('.card__title a');
    const firstRestaurant = (locate('.card__title a').first());
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.wait(2);
    I.seeElement('.content__list');
    I.seeElement('.content__item');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.card__title a');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    I.click(likedRestaurantTitle);
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.see('Tidak ada restaurant untuk ditampilkan', '.content__item');
})
