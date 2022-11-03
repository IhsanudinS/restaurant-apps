import RestaurantSource from '../../data/RestaurantSource';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <div id="detail" class="detail-resto">
            <div id="likeButtonContainer"></div>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#detail');

    restoContainer.innerHTML += createRestaurantDetailTemplate(resto);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        rating: resto.rating,
        city: resto.city,
        description: resto.description,
      },

    });

    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');
    const buttonSave = document.querySelector('#buttonSave');
    buttonSave.addEventListener('click', async (event) => {
      const review = {
        id: resto.id,
        name: inputName.value,
        review: inputReview.value,
      };
      if (inputName.value === '' || inputReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('kolom tidak boleh kosong');
      } else {
        event.preventDefault();
        await RestaurantSource.addReview(review).then(() => {
          location.reload();
        });
      }
    });
  },
};

export default Detail;
