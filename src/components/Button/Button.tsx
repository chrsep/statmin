import styled from "../../styled-components"

export default styled.button`
  color: ${({ theme }) => theme.white};
  border-color: ${({ theme }) => theme.accentColor};
  font-weight: bold;
  background: transparent;
  border-style: solid;
  border-width: 3px;
  border-radius: 10rem;
  padding: 0.8rem;
  transition: all 0.2s;
  :hover {
    background-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.black};
  }
`
