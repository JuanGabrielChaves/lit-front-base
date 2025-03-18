/** @format */

import { LitElement, html, css } from "lit";
import "./components/MyComponent.js";
import { store } from "./store/store.js";

class App extends LitElement {
    static styles = css`
        /* estilos globales */
    `;

    render() {
        return html` <my-component></my-component> `;
    }
}

customElements.define("app-root", App);
