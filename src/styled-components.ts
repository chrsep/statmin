import { ComponentClass } from "react" /* required because of issue with typescript#5711 */
import { ThemedStyledComponentsModule } from "styled-components"
import * as styledComponents from "styled-components"
import ThemeInterface from "./theme"

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  ComponentClass /* remove unused import */
}
export default styled
