// @flow
/* eslint no-unused-expressions: ["off"] */
import { injectGlobal } from "styled-components"

/*
CSS Stylinh
The unit sizing used:
- use rem for all font
- em for every other sizing, so that all measurements can be 
*/

injectGlobal`
html {
  background-color: #1c1c1c;
  margin: 0;
  padding: 0px;
  font-family: system-ui, Helvetica, Arial, sans-serif;
}
`
