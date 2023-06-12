// import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', condition: true}

  onChangeUsername = event => {
    this.setState({username: event.target.value, condition: true})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, condition: true})
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  SubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.status === 200) {
      this.onSuccess()
    } else {
      this.setState({condition: false})
    }
  }

  render() {
    const {condition, username, password} = this.state
    const s = "'"
    return (
      <div className="login-form-main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="image"
        />
        <form className="form-container" onSubmit={this.SubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            className="form-logo"
            alt="website logo"
          />
          <div>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="input-element"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="input-element"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {condition ? (
            ''
          ) : (
            <p className="error-msg">
              *Username and Password didn<sup>{s}</sup>t match
            </p>
          )}
        </form>
      </div>
    )
  }
}
export default LoginForm
