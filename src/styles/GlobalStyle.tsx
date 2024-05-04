import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-bg: #fff8de;
    --sub-bg: #ffe7ec;
    --section: #fff;
    --main-color: #573c42;
    --sub-color: #fff;
    --button: #905e5d;
    --box: #8e55559a;
    --border: #86525256;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table, input {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  * {
    color: var(--main-color);
  }

  section {
    background-color: var(--section);
    padding: 30px;
    color: var(--main-color);
  }

  ul,
  li {
    list-style: none;
  }

  img {
    vertical-align: top;
    width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: 0;
    background: none;
  }
  
  button:not(:disabled) {
    cursor: pointer;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  /* PC */
  @media (min-width: 748px) {
  body {
    background: var(--main-bg);
  }

  main {
    width: 748px;
    margin: 0px auto 60px;
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  h1 {
    margin: 40px 0px 60px 0px;
  }
  }

  /* Mobile */
  @media (max-width: 747px) {
  h1 {
    margin: 20px 0px 18px 0px;
  }
}

.title, p {
  font-size: 14px;
  font-weight: bold;
}

.title::after {
  content: " :";
  }

.get-btn {
  background: var(--button);
  color: var(--sub-color);
}

`;

export default GlobalStyle;
