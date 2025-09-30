/** @format */

import { LitElement, html, css } from "lit";
import { store } from "../store/store.js";
import { connect } from "@brunomon/helpers/connect";

class NavBarGenerica extends connect(store)(LitElement) {
    static properties = {
        /**
         * @property {boolean} _menuAbierto - Estado para controlar si el menú móvil está abierto o cerrado
         */
        _menuAbierto: { type: Boolean, state: true },
    };

    constructor() {
        super();
        this._menuAbierto = false; // Inicialmente cerrado
        this.navItems = [
            { label: "Inicio", href: "#inicio" },
            { label: "Servicios", href: "#servicios" },
            { label: "Acerca de", href: "#acerca" },
            { label: "Contacto", href: "#contacto" },
        ];
    }

    _toggleMenu() {
        this._menuAbierto = !this._menuAbierto;
    }

    static styles = css`
        :host {
            font-family: "Roboto", sans-serif;
            display: block;
            box-sizing: border-box;
            /* Variables de Color M3 */
            --md-sys-color-primary: #6750a4;
            --md-sys-color-surface: #fffbff;
            --md-sys-color-on-surface: #1c1b1f;
            --md-sys-color-on-primary: #ffffff;
            --md-sys-color-surface-container-low: #f7f2fa;
        }

        .navbar-container {
            position: sticky;
            top: 0;
            z-index: 100;
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .navbar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 4.5rem;
            padding: 0 1rem;
            background-color: var(--md-sys-color-primary);
            color: var(--md-sys-color-on-primary);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            width: 100%;
        }

        .app-logo {
            font-size: 1.25rem;
            font-weight: 500;
            text-decoration: none;
            color: inherit;
        }

        .user-logo {
            width: 28px;
            height: 28px;
            background-color: var(--md-sys-color-on-primary);
            color: var(--md-sys-color-primary);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.8rem;
            font-weight: bold;
            cursor: pointer;
        }

        .menu-toggle {
            display: block;
            cursor: pointer;
            color: var(--md-sys-color-on-primary);
            order: -1;
            background: none;
            border: none;
            padding: 0;
        }

        .menu-icon path {
            fill: currentColor;
        }

        .nav-container {
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out, opacity 0.3s;
            opacity: 0;
            background-color: var(--md-sys-color-surface-container-low);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .nav-container.open {
            max-height: 500px;
            opacity: 1;
        }

        .nav-list {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .nav-item a {
            display: block;
            padding: 12px 16px;
            text-decoration: none;
            font-size: 1rem;
            color: var(--md-sys-color-on-surface);
            transition: background-color 0.2s;
        }

        .nav-item a:hover {
            background-color: rgba(var(--md-sys-color-primary), 0.1);
            color: var(--md-sys-color-primary);
        }

        @media (min-width: 768px) {
            .navbar-container {
                flex-direction: row;
                height: 4rem;
            }

            .navbar-header {
                height: 4rem;
                padding: 0 2rem;
                box-shadow: none;
                display: contents;
            }

            .menu-toggle {
                display: none;
            }

            .app-logo {
                background-color: var(--md-sys-color-primary);
                color: var(--md-sys-color-on-primary);
                height: 4rem;
                display: flex;
                align-items: center;
                padding: 0 2rem;
            }

            .user-logo {
                display: none;
            }

            .nav-container {
                flex-grow: 1;
                max-height: none;
                opacity: 1;
                width: auto;
                background-color: var(--md-sys-color-primary);
                box-shadow: none;
                padding: 0 1rem;
                display: flex;
                align-items: center;
            }

            .nav-list {
                display: flex;
                justify-content: flex-end;
                flex-grow: 1;
            }

            .nav-item a {
                padding: 8px 12px;
                margin-left: 8px;
                color: var(--md-sys-color-on-primary);
                border-radius: 20px;
            }

            .nav-item a:hover {
                background-color: rgba(var(--md-sys-color-on-primary), 0.2);
                color: var(--md-sys-color-on-primary);
            }
        }
    `;

    render() {
        const menuClass = this._menuAbierto ? "nav-container open" : "nav-container";

        return html`
            <div class="navbar-container">
                <header class="navbar-header">
                    <a href="#" class="app-logo"> Mi App </a>
                    <button class="menu-toggle" @click=${this._toggleMenu} aria-label="Toggle Menu">
                        ${this._menuAbierto ? html`<svg class="menu-icon" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" /></svg>` : html`<svg class="menu-icon" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>`}
                    </button>
                    <div class="user-logo" title="Perfil de Usuario">U</div>
                </header>

                <div class="${menuClass}">
                    <ul class="nav-list">
                        ${this.navItems.map(
                            (item) => html`
                                <li class="nav-item">
                                    <a href="${item.href}" @click=${this._toggleMenu}>${item.label}</a>
                                </li>
                            `
                        )}
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define("navbar-generica", NavBarGenerica);
