import * as React from "react"
import styled from "../../styled-components"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
  onChange?: (event: object) => any
}

export default ({ className, label, ...props }: Props) => (
  <div className={className}>
    <TextFieldLabel>
      {label}
      <TextFieldInput {...props} />
    </TextFieldLabel>
  </div>
)
const TextFieldLabel = styled.label`
  color: ${({ theme }) => theme.white};
  font-size: 1.4rem;
  display: flex;
  flex-flow: column;
`
const TextFieldInput = styled.input`
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid ${({ theme }) => theme.white};
  padding: 0.4rem 1px;
  transition: all 0.2s;
  font-size: 1.8rem;
  opacity: 0.6;
  :focus {
    opacity: 1;
    border-bottom: 2px solid ${({ theme }) => theme.accentColor};
  }
`
