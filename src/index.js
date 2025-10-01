/** @format */

import "./App.js";
import { store } from "./store/store.js";
import { render, html } from "lit-html";
import {} from "./styles/colors.css";
import {} from "./styles/media.css";
import {} from "./styles/main.css";
import {} from "./styles/fontSizes.css";
const app = document.getElementById("app");

// Mostrar el estado inicial en la consola
console.log("Estado inicial:", store.getState());

render(html`<app-root .store=${store}></app-root>`, app);
