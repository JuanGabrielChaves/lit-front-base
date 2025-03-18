/** @format */

import "./App.js";
import { store } from "./store/store.js";
import { render, html } from "lit-html";

const app = document.getElementById("app");

// Mostrar el estado inicial en la consola
console.log("Estado inicial:", store.getState());

render(html`<app-root .store=${store}></app-root>`, app);
