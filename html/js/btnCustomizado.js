
class btnCustomizado extends HTMLElement {
    constructor() {
      super();

      this.heading = '';
    }

    connectedCallback() {
      this.heading = this.getAttribute('heading');

      this.render();
    }

    render() {
      this.innerHTML = `
      <a href="#">
        <div class="button" >
          <h2>${this.heading}</h2>
        </div>
        </a>
      `;
    }
  }

  customElements.define('btn-custom', btnCustomizado);

