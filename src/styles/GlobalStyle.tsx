import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-bg: #fff8de;
    --sub-bg: #ffecf0;
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

  .section1 {
    padding: 30px;
  }

  .section2 {
    padding: 30px 20px;
  }

  /* PC */
  @media (min-width: 768px) {
  body {
    background: var(--main-bg);
    padding-bottom: 50px;
  }

  main {
    width: 768px;
    margin: 0px auto;
    display: flex;
    gap: 20px;
  }

  .section2 {
    flex: 1;
  }

  h1 {
    margin: 60px 0px 60px 0px;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
  h1 {
    margin: 40px 0px 18px 0px;
  }

  .section2 {
    margin-top: -30px;
    padding: 30px;
  }
}

.color-box {
  background: var(--sub-bg);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
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
