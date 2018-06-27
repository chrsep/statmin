import * as React from "react"
import { connect, ProviderProps } from "react-redux"
import { compose } from "redux"
import { Button, TextField } from "../../presentational"
import { Actions } from "../../redux/actions"

interface Props extends ProviderProps {
  getRepoList: (token: string) => any
}
interface State {
  token: string
}
class FormLogin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { token: "" }
  }
  public render() {
    return (
      <>
        <TextField onChange={this.handleChange} label="Personal access token" />
        <Button onClick={this.handleLogin}>Grant Access</Button>
      </>
    )
  }
  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ token: event.currentTarget.value })
  }
  private handleLogin = () => {
    this.props.getRepoList(this.state.token)
  }
}

const mapDispatchToProps = {
  getRepoList: (token: string) => Actions.getRepoList(token)
}

export default compose(
  connect(
    undefined,
    mapDispatchToProps
  )
)(FormLogin)
