import * as React from "react"
import { Button } from "../../components"
import TextField from "../../components/TextField/TextField"
import styled from "../../styled-components"

export default () => (
  <LoginPage>
    <HeroText>Manage your jekyll site on GitHub with ease. </HeroText>
    <StyledTextField label="Personal access token" />
    <ButtonContainer>
      <Button>Grant Access</Button>
    </ButtonContainer>
  </LoginPage>
)

const LoginPage = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 0;
  margin: 0 1.8rem;
`
const HeroText = styled.div`
  font-weight: bold;
  font-size: 2.8rem;
  margin: 5.4rem 0;
  color: ${({ theme }) => theme.white};
`
const StyledTextField = styled(TextField)`
  margin: 1.8rem 0;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row-reverse;
`
