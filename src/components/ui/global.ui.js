import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }
  
$legacy_browser_support: false !default;

html {
  font-family: sans-serif; 
  -ms-text-size-adjust: 100%; 
  -webkit-text-size-adjust: 100%; 
  @if $legacy_browser_support {
    *font-size: 100%; 
  }
}

body {
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block; 
  vertical-align: baseline; 
  @if $legacy_browser_support {
    *display: inline;
    *zoom: 1;
  }
}

audio:not([controls]) {
  display: none;
  height: 0;
}


[hidden],
template {
  display: none;
}


a {
  background-color: transparent;
}

a {
  &:active,
  &:hover {
    outline: 0;
  }
}

abbr[title] {
  border-bottom: 1px dotted;
}


b,
strong {
  font-weight: bold;
}

@if $legacy_browser_support {
  blockquote {
    margin: 1em 40px;
  }
}


dfn {
  font-style: italic;
}


h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

@if $legacy_browser_support {
  h2 {
    font-size: 1.5em;
    margin: 0.83em 0;
  }

  h3 {
    font-size: 1.17em;
    margin: 1em 0;
  }

  h4 {
    font-size: 1em;
    margin: 1.33em 0;
  }

  h5 {
    font-size: 0.83em;
    margin: 1.67em 0;
  }

  h6 {
    font-size: 0.67em;
    margin: 2.33em 0;
  }
}


mark {
  background: #ff0;
  color: #000;
}

@if $legacy_browser_support {

  p,
  pre {
    *margin: 1em 0;
  }


  q {
    *quotes: none;
  }


  q:before,
  q:after {
    content: "";
    content: none;
  }
}

small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

@if $legacy_browser_support {

  dl,
  menu,
  ol,
  ul {
    *margin: 1em 0;
  }

  dd {
    *margin: 0 0 0 40px;
  }


  menu,
  ol,
  ul {
    *padding: 0 0 0 40px;
  }


  nav ul,
  nav ol {
    *list-style: none;
    *list-style-image: none;
  }
}



img {
  border: 0;
  @if $legacy_browser_support {
    *-ms-interpolation-mode: bicubic; 
  }
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  @if $legacy_browser_support {
    _font-family: "courier new", monospace;
  }
  font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit; 
  font: inherit; 
  margin: 0; 
  @if $legacy_browser_support {
    vertical-align: baseline; 
    *vertical-align: middle; 
  }
}


button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}



button,
 html input[type="button"], 
 input[type="reset"],
 input[type="submit"] {
  -webkit-appearance: button; 
  cursor: pointer; 
  @if $legacy_browser_support {
    *overflow: visible;
  }
}

button[disabled],
html input[disabled] {
  cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}


input {
  line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
  @if $legacy_browser_support {
    *height: 13px; 
    *width: 13px; 
  }
}


input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: textfield; 
  box-sizing: content-box; 
}


input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}


legend {
  border: 0; 
  padding: 0; 
  @if $legacy_browser_support {
    white-space: normal; 
    *margin-left: -7px; 
  }
}

textarea {
  overflow: auto;
}


optgroup {
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

html {
  font: 112.5%/1.45em 'Leckerli One', cursive;
  box-sizing: border-box;
  overflow-y: scroll;
}

@media (min-height:  568px) and (max-height: 700px){
  html {
    font: 70%/1.45em;
  }
}

@media (max-width: 767px) {
  html {
    font: 85%/1em !important;
  }
  p {
    line-height: 1.4;
  }
}
@media (min-width: 768px) and (max-width:1440px) {
  html {
    font: 100%/1.2em !important;
  }
}
p {
  font-family: 'Noto Serif', serif;
  color: #707070;
  strong {
    color: #000000;
  }
}
h4, h3, select, input {
  font-family: 'Ubuntu', sans-serif;
}
[data-reach-dialog-overlay] {
  z-index: 99;
  background: hsla(341, 41%, 10%, 0.67);
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
[data-reach-dialog-content] {
  @media (max-width: 767px) {
    width: 90%;
    padding: 0;
    position: relative;
    background-color: transparent;
    margin: auto;
    button {
      position: absolute;
      top: -14px;
      right: -14px;
      width: 39px;
      height: 38px;
      svg {
        width: 36px;
        height: 36px;
        position: relative;
        fill: #2d2d2d;
      }
      &:before {
        content: '';
        background-color: white;
        height: 30px;
        width: 30px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        border-radius: 30px;
        display: block;
        position: absolute;
      }
    }
  }
}

.gatsby-image-wrapper {
  border-radius: .5em;
  overflow: hidden;
}
`;

export default GlobalStyles;