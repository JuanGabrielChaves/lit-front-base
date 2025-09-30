/** @format */

import { LitElement, html, css } from "lit";
import "./components/NavBarGenerica.js";
import { store } from "./store/store.js";

class App extends LitElement {
    static styles = css`
        /* estilos globales */
    `;

    render() {
        return html` <navbar-generica></navbar-generica>`;
    }
}

customElements.define("app-root", App);
