'use strict';

export class Blogs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
<h1>
    My first blow!
</h1>

<p>
    This is where I'll publish my blogs when I get to writing them.
    Right now I'm busy writing this simple SPA that will help me learn how component rendering and javascript routing works.
</p>
        `;
    }
}
