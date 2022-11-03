import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const favorites = {
  async render() {
    return `
        <section class="content">
            <article class="headline">
                <h2 tabindex="0">Favorite Restaurant</h2>
                <div id="list-item" class="posts"></div>
            </article>
        </section>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#list-item');

    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default favorites;
