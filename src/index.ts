import { html, render, TemplateResult, LitElement } from 'lit';
import "../static/components/header";
import { mainContent } from "../static/components/main";
import "../static/css/index.scss";

render(html`<my-header></my-header>`, document.querySelector("#header") as HTMLElement);
render(mainContent(), document.querySelector(".main-content") as HTMLElement);
