import { css } from 'lit';

export const styles = css`
.diamond-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
#left,
#right {
  height: 64px;
  width: 32px;
}

svg #left-diamond-stroke, svg #right-diamond-stroke {
  fill: black;
}

svg #left-diamond-fill, svg #right-diamond-fill {
  fill: white;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-left: none;
  border-right: none;
  height: 64px;
  width: calc(100vw - 100px);
  max-width: 320px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

span {
  font-size: 32px;
  transform: translateY(2px);
}

.logo {
  height: 44px;
}

button > * {
  margin: 0 4px;
}

@media screen and (min-width: 480px) {
  button {
    width: 320px;
  }
}
@media screen and (min-width: 768px) {
  #left,
  #right {
    height: 96px;
    width: 48px;
  }
  svg #left-diamond-stroke, svg #right-diamond-stroke {
    fill: #ff000000;
  }

  svg #left-diamond-fill, svg #right-diamond-fill {
    fill: black;
  }
  span {
    display: none;
  }
  a {
    width: 0;
    padding: 0;
  }
  button {
    width: 0;
    border: none;
    padding: 0;
  }
  .logo {
    z-index: 1;
    height: 32px;
    filter: invert(100%);
    transform: translateX(-20px);
  }
  .diamond-button {
    height: 96px;
  }
  .diamond-button:hover span {
    display: inherit;
    font-size: 32px;
    transform: translateY(2px);
  }
  .diamond-button:hover a {
    width: inherit;
    overflow: hidden;
  }
  .diamond-button:hover button {
    width: 220px;
    cursor: pointer;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-left: none;
    border-right: none;
    height: 64px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: width 0.75s cubic-bezier(.2,-0.01,.37,.79);
  }
  .diamond-button:hover .logo {
    filter: inherit;
    height: 44px;
    transform: translateX(0px);
  }
  .diamond-button:hover #left,
  .diamond-button:hover #right {
    height: 64px;
    width: 32px;
  }
  .diamond-button:hover svg #left-diamond-stroke,
  .diamond-button:hover svg #right-diamond-stroke {
    fill: black;
  }
  .diamond-button:hover svg #left-diamond-fill,
  .diamond-button:hover svg #right-diamond-fill {
    fill: white;
  }
}

`
