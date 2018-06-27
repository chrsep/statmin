import * as React from "react"
import FormLogin from "../../container/FormLogin/FormLogin"
import styled from "../../styled-components"

export default () => (
  <StyledLoginPage>
    <TextHero>Manage your jekyll site on GitHub with ease. </TextHero>
    <FormLayout>
      <FormLogin />
    </FormLayout>
  </StyledLoginPage>
)

const StyledLoginPage = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 0;
  margin: 0 1.8rem;
`
const TextHero = styled.div`
  font-weight: bold;
  font-size: 2.8rem;
  margin: 5.4rem 0;
  color: ${({ theme }) => theme.white};
`
const FormLayout = styled.div`
  display: grid;
  justify-items: right;
  grid-gap: 0.8rem;
`
