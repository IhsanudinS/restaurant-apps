class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title" tabindex="0">DAPATKAN PENAWARAN DENGAN RIBUAN
            RESTORAN DI SELURUH DUNIA</h1>
          <h2 class="hero__tagline">Temukan Restoran Favoritmu</h2>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-bar', HeroBar);
