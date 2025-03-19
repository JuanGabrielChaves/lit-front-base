/** @format */

import { LitElement, html, css } from "lit";
import { store } from "../store/store.js";
import { connect } from "@brunomon/helpers/connect";
import { increment, decrement, fetchValue } from "../store/slices/mySlice.js";
import { fetchUsers } from "../store/slices/usersSlice.js";

const VALOR = "mySlice.value";
const ESTADO = "mySlice.status";
const USERS = "users.users";
const USERS_STATUS = "users.status";
const USERS_ERROR = "users.error";

class MyComponent extends connect(store, VALOR, ESTADO, USERS, USERS_STATUS, USERS_ERROR)(LitElement) {
    constructor() {
        super();
        this.value = store.getState().mySlice.value;
        this.status = store.getState().mySlice.status;
        this.users = store.getState().users.users;
        this.usersStatus = store.getState().users.status;
        this.usersError = store.getState().users.error;
    }

    static styles = css`
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin: 0.5em 0;
        }
    `;

    render() {
        let content;

        if (this.usersStatus === "loading") {
            content = html`<p>Cargando...</p>`;
        } else if (this.usersStatus === "succeeded") {
            content = html`
                <ul>
                    ${this.users.map((user) => html`<li>${user.name.first} ${user.name.last}</li>`)}
                </ul>
            `;
        } else if (this.status === "failed") {
            content = html`<p>${this.error}</p>`;
        }
        return html`
            <div>
                <h1>Aplicación de prueba usando LitElement y la nueva sintaxis de Redux</h1>
                <p>Valor: ${this.value}</p>
                <p>Status: ${this.status}</p>

                <div>
                    <h2>Lista de Usuarios</h2>
                    ${content}
                </div>

                <button @click="${this.increment}">Incrementar</button>
                <button @click="${this.decrement}">Decrementar</button>
                <button @click="${this.fetchValue}">Fetch Value</button>
                <button @click="${this.fetchUsers}">Fetch Users</button>
            </div>
        `;
    }

    firstUpdated() {
        if (this.usersStatus === "idle") {
            store.dispatch(fetchUsers());
        }
    }

    stateChanged(state, name) {
        if (name === VALOR) {
            this.value = state.mySlice.value;
        }
        if (name === ESTADO) {
            this.status = state.mySlice.status;
        }
        if (name === USERS) {
            this.users = state.users.users;
        }
        if (name === USERS_STATUS) {
            this.usersStatus = state.users.status;
        }
        if (name === USERS_ERROR) {
            this.usersError = state.users.error;
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
    fetchUsers() {
        store.dispatch(fetchUsers());
    }

    static properties = {
        value: { type: Number },
        status: { type: String },
        users: { type: Array },
    };
}

customElements.define("my-component", MyComponent);
