import * as React from "react"
import { connect, Dispatch, ProviderProps } from "react-redux"
import { compose } from "redux"
import { Button } from "../../components"
import TextField from "../../components/TextField/TextField"
import { Actions } from "../../redux/actions"
import { State } from "../../redux/reducers"
import styled from "../../styled-components"

interface Props extends ProviderProps {
  getRepoList: () => any
}

class LoginPage extends React.Component<Props> {
  public render() {
    return (
      <StyledLoginPage>
        <HeroText>Manage your jekyll site on GitHub with ease. </HeroText>
        <StyledTextField label="Personal access token" />
        <ButtonContainer>
          <Button onClick={this.handleLogin}>Grant Access</Button>
        </ButtonContainer>
      </StyledLoginPage>
    )
  }
  private handleLogin = () => {
    this.props.getRepoList()
  }
}

const StyledLoginPage = styled.div`
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

const mapStateToProps = (state: State) => ({})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getRepoList: () => dispatch(Actions.getRepoList(""))
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LoginPage)
