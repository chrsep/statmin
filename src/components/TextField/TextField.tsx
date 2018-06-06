import styled from "../../styled-components"

export default styled.input`
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  background: transparent;
  border: none;
  outline: 0;
  border-bottom: 2px solid ${({ theme }) => theme.accentColor};
  padding: 0.4rem 1px;
  transition: all 0.2s;
  opacity: 0.65;
  :focus {
    opacity: 1;
  }
`
