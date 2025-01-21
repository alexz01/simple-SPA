'use strict';

export class Main extends HTMLElement {

    static observedAttributes = ["color", "size"];

    constructor() {
        // Always call super first in constructor
        super();
        this.innerHTML = `
        <app-header></app-header>
        <app-router></app-router>
        <app-footer></app-footer>
        `
    }

    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}