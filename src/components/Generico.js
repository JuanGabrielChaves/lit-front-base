/** @format */

import { LitElement, html, css } from "lit";
import { store } from "../store/store.js";
import { connect } from "@brunomon/helpers/connect";

class Generico extends connect(store)(LitElement) {
    constructor() {
        super();
    }

    static styles = css`
        :host {
            height: 5rem;
        }
    `;

    render() {
        return html``;
    }

    firstUpdated() {}

    stateChanged(state, name) {}

    static properties = {};
}

customElements.define("generico-base", Generico);
