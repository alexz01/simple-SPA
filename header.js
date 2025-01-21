'use strict';

export class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement('style');
        style.textContent = `
nav {
    display: flex;
    flex-flow: row;
    vertical-align: middle;
    align-items: center;

    text-decoration: none;

    background-color: #F1F1F1FA;
    border-bottom: 2px solid #E0E0E0FA
}
nav ul, nav li {
    list-style: none;
    display: inline;
}

nav ul {
    padding-left: 0
}

nav a {
    text-decoration: none;
    margin: 0px 5px 0px 5px;
    color: #000000
}
nav a:hover{
    color: #616161
}
        `;
        shadow.innerHTML = `
<nav>
    <a href="/#/" class="brand">
        <svg width="32" height="32" fill="none">
        <rect x="0" y="0" width="32" height="32" rx="10" fill="none" stroke="gray" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="gray">Test</text>
        </svg>
    </a>
    <ul>
        <li><a href="/#/">Home</a></li>
        <li><a href="/#/blogs">Blogs</a></li>
        <li><a href="/#/contact">Contact</a></li>
    </ul>
</nav>
        `;
        shadow.appendChild(style);
    }
}