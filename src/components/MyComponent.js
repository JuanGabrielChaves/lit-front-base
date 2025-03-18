/** @format */

import { LitElement, html, css } from "lit";
import { store } from "../store/store.js";
import { connect } from "@brunomon/helpers/connect";
import { increment, decrement, fetchValue } from "../store/slices/mySlice.js";

const VALOR = "mySlice.value";
const ESTADO = "mySlice.status";

class MyComponent extends connect(store, VALOR, ESTADO)(LitElement) {
    constructor() {
        super();
        this.value = store.getState().mySlice.value;
        this.status = store.getState().mySlice.status;
    }

    static styles = css`
        /* estilos del componente */
    `;

    static properties = {
        value: { type: Number },
        status: { type: String },
    };

    stateChanged(state, name) {
        if (name === VALOR) {
            this.value = state.mySlice.value;
        }
        if (name === ESTADO) {
            this.status = state.mySlice.status;
        }
    }

    increment() {
        store.dispatch(increment());
    }

    decrement() {
        store.dispatch(decrement());
    }

    fetchValue() {
        store.dispatch(fetchValue());
    }

    render() {
        return html`
            <div>
                <h1>Aplicación de prueba usando LitElement y la nueva sintaxis de Redux</h1>
                <p>Valor: ${this.value}</p>
                <p>Status: ${this.status}</p>
                <button @click="${this.increment}">Incrementar</button>
                <button @click="${this.decrement}">Decrementar</button>
                <button @click="${this.fetchValue}">Fetch Value</button>
            </div>
        `;
    }
}

customElements.define("my-component", MyComponent);
