import { Main } from './main.js';
import { Footer } from './footer.js';
import { Router } from './router.js';
import { camelToKabab } from './scripts.js';
import { Header } from './header.js';
import { Home } from './home.js';
import { Blogs } from './blogs.js';
import { Contact } from './contact.js';

const COMPONENT_PREFIX = 'App'

const components = [
    Main,
    Footer,
    Header,
    Home,
    Blogs,
    Contact,
    Router,
];

components.forEach(c => {
    let name = COMPONENT_PREFIX + c.name;
    name = camelToKabab(name);
    customElements.define(name, c);
});