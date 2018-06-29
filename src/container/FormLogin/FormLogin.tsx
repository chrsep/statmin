import * as React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { Button, TextField } from "../../presentational"
import { Actions } from "../../redux/actions"

interface Props {
  login: () => any
  setToken: (token: string) => any
}
export class FormLogin extends React.Component<Props> {
  public render() {
    return (
      <>
        <TextField onChange={this.handleChange} label="Personal access token" />
        <Button onClick={this.handleLogin}>Grant Access</Button>
      </>
    )
  }
  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.setToken(event.currentTarget.value)
  }
  private handleLogin = () => {
    this.props.login()
  }
}

const mapDispatchToProps = {
  login: () => Actions.login(),
  setToken: (token: string) => Actions.setAcessToken(token)
}

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(FormLogin)
