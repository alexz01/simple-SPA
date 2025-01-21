'use strict';

export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
<h1>
    Welcome to my website!!!
</h1>

<p>
    I wrote this simple site to test out how webcomponents will allow me to create a simple SPA with javascript routed page components.
</p>
        `;
    }
}
