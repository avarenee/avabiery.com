import { html, TemplateResult, LitElement } from 'lit';
import "./diamond-button";
import github from "../images/github-logo.svg";
import linkedin from "../images/linkedin-logo.svg";
import angellist from "../images/angellist-logo.svg";
import "./main.scss";

export const mainContent = (): TemplateResult => {
  return html`
  <div class="main-content__inner">
      <p>Ava Biery is a web developer and artist living in Queens, New York. She is currently employed as an IT Architecture Specialist at Prudential Financial. In 2019, she
        graduated from Wesleyan University with a B.A. in Mathematics and Computer Science. She is proficient in JavaScript, HTML, CSS, and Python.
        She also has substantial experience with the frameworks React and Django, as well as database management with MySQL.
      </p>
      <div class="widget-container">
        <div class="widget">
          <diamond-button logo="${github}" link="${"https://github.com/avarenee/"}" buttonText="${"Github"}"></diamond-button>
        </div>
        <div class="widget">
          <diamond-button logo="${linkedin}" link="${"https://www.linkedin.com/in/ava-biery/"}" buttonText="${"LinkedIn"}"></diamond-button>
        </div>
        <div class="widget">
          <diamond-button logo="${angellist}" link="${"https://angel.co/ava-biery"}" buttonText="${"AngelList"}"></diamond-button>
        </div>
      </div>
    </div>
  `;
}
