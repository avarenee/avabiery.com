import { html, TemplateResult, LitElement } from 'lit';
import { state, property } from 'lit/decorators.js';
import { leftDiamond } from "../images/left-diamond";
import { rightDiamond } from "../images/right-diamond";
import { styles } from "./diamond-button-styles";

export class diamondButtonEl extends LitElement {
  static get styles() {
    return [styles]
  }

  @property()
  logo: any = null;

  @property()
  link: string = '';

  @property()
  buttonText: string = '';

  render() {
    const diamondButton = (logo: any, link: string, buttonText: string): TemplateResult => {
        return html`
          <div class="diamond-button">
            ${leftDiamond()}
            <a target="_blank" href="${link}"><button class="${buttonText}">
              <span>${buttonText}</span>
              <img class="logo" src="${logo}" alt="${buttonText} + " logo"" />
            </button></a>
            ${rightDiamond()}
          </div>
        `
    }

    return html`
      ${diamondButton(this.logo, this.link, this.buttonText)}
    `
  }
}

customElements.define('diamond-button', diamondButtonEl);
