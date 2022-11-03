import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (resto) => `
    <div class="info-container">
        <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
        <div class="resto__info">
            <h2 class="resto__title" tabindex="0">${resto.name}</h2>
            <br>
            <h3 tabindex="0">Information :</h3>
            <h4 tabindex="0">Alamat</h4>
            <p tabindex="0">${resto.address}</p>
            <h4 tabindex="0">Kota</h4>
            <p tabindex="0">${resto.city}</p>
            <h4 tabindex="0">Rating</h4>
            <p tabindex="0">⭐${resto.rating}</p>
        </div>
        <div class="resto-desc">
            <h4 tabindex="0">Deskripsi</h4>
            <p tabindex="0">${resto.description}</p>
            <h4 tabindex="0">Makanan</h4>
            <p tabindex="0">${resto.menus.foods.map((food) => food.name)}</p>
            <h4 tabindex="0">Minuman</h4>
            <p tabindex="0">${resto.menus.drinks.map((drink) => drink.name)}</p>
        </div>
    </div>
    <div class="resto__overview">
        <h3 class="header-reviews" tabindex="0">Review</h3>
        <div class="resto-review">
            ${resto.customerReviews.map((review) => `
            <div class="review-container">
                <div class="review-list">
                    <p tabindex="0" class="review-name">${review.name}</p>
                    <p tabindex="0" class="review-date">${review.date}</p>
                    <p tabindex="0" class="review-text">${review.review}</p>
                </div>
            </div>
            `).join('')}
        </div>
        <div class="add-review">
          <label for="inputName">Nama</label>
          <input id="inputName" type="text" class="form-control" placeholder="Nama">
        </div>
        <div class="add-review">
          <textarea id="inputReview" type="text" class="form-control" placeholder="Review" rows="6" cols="200"></textarea>
        </div>
        <div class="add-review">
            <button id="buttonSave" class="btn btn-success">Add</button>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (resto) => `
    <article class="post-item">
        <img class="post-item__thumbnail" alt="resto-image" 
            src=${CONFIG.BASE_IMAGE_URL + resto.pictureId} tabindex="0">
        <div class="post-item__content">
            <h1 class="post-item__title" tabindex="0">${resto.name}</h1>
            <div class="icon" aria-label="location and rating" tabindex="0">
                <i class="fa fa-map-marker" aria-hidden="true"  tabindex="0"> ${resto.city} </i>
                <i class="fa fa-star checked" tabindex="0">   ${resto.rating} </i>
            </div>
            <p class="post-item__description id="description" tabindex="0">${resto.description}</p>
            <br>
            <div class="btn-action">
                <a id="button" href="${`/#/detail/${resto.id}`}">Check!!</a>
            </div>
        </div>
    <article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
