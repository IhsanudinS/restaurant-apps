class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Copyright © 2022 - Daharin Apps</p>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
