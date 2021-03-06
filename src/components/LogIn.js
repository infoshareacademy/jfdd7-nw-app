import React from 'react'
import {
  Col,
  Form,
  Checkbox,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Grid
} from 'react-bootstrap'

import './firstpage.css'
import firebase from 'firebase'

class LogIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
  }


  render() {
    return (
      <Grid fluid>
        <div className="main">
          <h1>Szukasz najlepszych ofert w sieci ? </h1>
          <p>Świetnie trafiłeś - wystarczy tylko się zalogować!</p>
        </div>

        <Form horizontal className="datalog"
              onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail" className="text-form">
            <Col componentClass={ControlLabel} sm={3}>
              <span className="form-desription"> E-mail</span>
            </Col>
            <Col sm={6}>
              <FormControl
                           type="text"
                           value={this.state.email}
                           onChange={this.handleEmailChange}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              <span className="form-desription">Hasło</span>
            </Col>
            <Col sm={6}>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </Col>
          </FormGroup>

          <FormGroup >
            <Col className="datalog" smOffset={3} sm={6}>
              <Checkbox ><span className="form-desription">Zapamiętaj dane do logowania</span></Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={4}>
              <Button className="btns-firstpage" bsStyle="primary" type="submit" block center-block>
                Zaloguj
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    )
  }
}
export default LogIn