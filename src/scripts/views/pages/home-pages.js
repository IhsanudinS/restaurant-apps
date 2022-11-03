import RestaurantSource from '../../data/RestaurantSource';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const home = {
  async render() {
    return `
        <section class="content">
            <article class="headline">
                <h2 tabindex="0">Find Restaurant</h2>
                <div id="list-item" class="posts"></div>
            </article>
        </section>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.RestaurantList();
    const listContainer = document.querySelector('#list-item');
    restaurant.forEach((resto) => {
      listContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default home;
