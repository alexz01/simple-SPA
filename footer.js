'use strict';

export class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
<footer>
    <p>This is just a placeholder for footer text &copy; MyName ${new Date().getFullYear()}</p>
</footer>
        `
        const style = document.createElement('style');
        style.textContent = `
footer {
text-align: center;
}
        `;
        this.shadowRoot.appendChild(style)
    }
}
