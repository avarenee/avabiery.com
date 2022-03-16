import { html, TemplateResult, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import img from "../images/menu.svg";
import { styles } from "./header-styles";

export class headerEl extends LitElement {
  static get styles() {
    return [styles]
  }

  @state()
  private _expanded: boolean = false;

  render () {
    const header = (expanded: boolean): TemplateResult => {
      return html`
        <div class="header-container">
           <a href="index.html"><h1>Ava Biery</h1></a>
           <nav class="${expanded ? "expanded" : ""}">
             <button class="menu-symbol" @click=${this.toggleExpanded}><img src="${img}"/></button>
             <ul>
               <li><a href="../../src/about.html">About</a></li>
               <li><a href="../../src/projects.html">Projects</a></li>
               <li><a href="../../src/contact.html">Contact</a></li>
             </ul>
           <nav>
         </div>
         <div class="separator" role="separator"></div>
      `;
    }

    return html`
      ${header(this._expanded)}
    `
  }

  toggleExpanded(ev: Event) {
    this._expanded = !this._expanded;
  }
}

customElements.define('my-header', headerEl);
