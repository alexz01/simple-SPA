'use strict';

import { Blogs } from "./blogs.js";
import { Contact } from "./contact.js";
import { Error404 } from "./error404.js";
import { Home } from "./home.js";

export class Router extends HTMLElement {
    /**@type {Array<{path: string, component: HTMLElement}>}*/
    routeMap = []
    constructor() {
        super();


        this.routeMap = [
            { path: '/', component: Home },
            { path: '/blogs', component: Blogs },
            { path: '/contact', component: Contact },
            { path: '/error404', component: Error404 },
        ]
        this.elementRef = document.querySelector('app-router');

    }

    connectedCallback() {
        if (document.location.href.indexOf('/#/') < 0) {
            document.location.href = '/#/';
        }
        else {
            this.hashChangeHandler(new HashChangeEvent('hashchange', {newURL: window.location.href}));
        }

        if (window.HashChangeEvent)
            window.addEventListener('hashchange', this.hashChangeHandler);
    }

    hashChangeHandler = (/**@type {HashChangeEvent} event*/event) => {
        const hashUrl = event.newURL.split('#')[1];
        const component = this.routeMap.find(m => m.path === hashUrl)?.component;
        if (!component) {
            window.location.href = '/#/error404';
            return;
        }
        this.elementRef.innerHTML = '';
        this.elementRef.appendChild(new component());
    }
}