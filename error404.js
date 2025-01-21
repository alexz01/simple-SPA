'use strict';

export class Error404 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
<h1>
    404 Page not found
</h1>

<p>
    The page you are looking for is not in list of known pages.
</p>
        `;
    }
}
