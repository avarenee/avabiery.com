import { css } from 'lit';

export const styles = css`
  .header-container {
    font-family: "Larken W05 ExtraBold";
    color: black;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
  }
  .header-container a {
    text-decoration: none;
    color: black;
  }
  h1 {
    font-size: 32px;
  }
  nav {
    position: absolute;
    left: 0;
    top: 0;
  }
  .menu-symbol {
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 72px;
    width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-symbol img {
    height: 36px;
    width: 36px;
  }
  nav ul {
    transform: translateX(-301px);
    transition: transform 0.75s cubic-bezier(.2,-0.01,.37,.79);
    list-style-type: none;
    position: fixed;
    left: 0;
    padding: 0;
    margin: 0;
    text-decoration: none;
    border-top: 2px solid black;
    border-right: 1px solid black;
    background-color: #fbc91a;
    height: calc(100vh - 74px);
    width: 300px;
    z-index: 1;
  }
  nav li {
    padding: 12px 18px;
    border-bottom: 1px solid black;
    font-size: 28px;
  }
  .separator {
    position: relative;
    margin: auto;
    width: calc(100vw - 36px);
    height: 2px;
    background-color: black;
  }

  /* expanded navigation menu */
  nav.expanded ul {
    transform: translateX(0);
    transition: transform 0.5s cubic-bezier(.2,-0.01,.37,.79);
  }
  nav.expanded li {
    /* */
  }

  @media screen and (min-width: 768px) {
    .header-container {
      justify-content: space-between;
      align-items: baseline;
      width: calc(100vw - 72px);
      margin: auto;
    }
    .separator {
      position: relative;
      margin: auto;
      height: 2px;
      background-color: black;
    }
    .menu-symbol {
      display: none;
    }
    nav {
      position: relative;
    }
    nav ul, nav.expanded ul {
      transform: translateX(0);
      display: flex;
      position: relative;
      flex-direction: row;
      list-style-type: none;
      position: relative
      text-decoration: none;
      background-color: transparent;
      border: none;
      height: inherit;
      width: inherit;
    }
    nav li, nav.expanded li {
      font-size: 28px;
      border: none;
    }
  }

  @media screen and (min-width: 1200px) {
    .header-container {
      width: calc(80vw - 72px);
      height: calc(72px + 2vw);
    }
    .separator {
      width: calc(80vw - 36px);
    }
  }
`
