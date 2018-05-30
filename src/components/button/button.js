// @flow
import styled from "styled-components"

export default styled.button`
  background: transparent;
  color: white;
  border-style: solid;
  border-radius: 10rem;
  border-color: ${props => props.theme.main};
  padding: 0.8rem;
`
