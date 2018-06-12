import styled from "../../styled-components"

export default styled.button`
  color: ${({ theme }) => theme.white};
  border-color: ${({ theme }) => theme.accentColor};
  font-weight: bold;
  font-size: 1.6rem;
  background: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 10rem;
  padding: 0.8rem;
  transition: all 0.1s;
  outline: none;
  user-select: none;
  :active {
    transform: scale(1.1);
  }
`
