'use strict';

export class Contact extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
<h1>
    Contact Me!
</h1>

<p>
    I don't usually reply back on these contact details below.
    But if you feel like sending me a message feel free to drop me an email at <a href="mailto:test@email.com">test@email.com</a>.
</p>
        `;
    }
}
