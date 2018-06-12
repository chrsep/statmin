import * as React from "react"
import { Button } from "../../components"
import TextField from "../../components/TextField/TextField"
import styled from "../../styled-components"

export default () => (
  <LoginPage>
    <HeroText>Manage your jekyll site on GitHub with ease. </HeroText>
    <StyledTextField label="Personal access token" />
    <Button>Grant Access</Button>
  </LoginPage>
)

const LoginPage = styled.div`
  margin: 1.8rem;
`
const StyledTextField = styled(TextField)`
  margin: 1.8rem;
  width: 100%;
`
const HeroText = styled.div`
  font-weight: bold;
  font-size: 2.4rem;
  margin: 8rem 0;
  color: ${({ theme }) => theme.white};
`
