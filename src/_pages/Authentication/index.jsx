import React from 'react'
import './index.css'

class Authentication extends React.Component {
  constructor() {
    super()
    this.state = {
      uname: '',
      password: '',
      email: "",
      userName: '',
      pass: '',
      cpass: '',
      error: ""
    }

  }
  onLogin = (e) => {
    const { uname, password } = this.state
    e.preventDefault()
    if (uname && password) {
      window.location.href = '/home'
    } else {
      this.setState({
        error: 'Please enter all the details'
      })
    }
  }
  onRegister = (e) => {
    const { email, cpass, userName, pass } = this.state
    e.preventDefault()
    if (email&& cpass&& userName&& pass) {
      window.location.href = '/home'
    } else {
      this.setState({
        error: 'Please enter all the details'
      })
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  signin = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  }
  signup = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  }
  render() {
    const { uname, password, email, cpass, userName, pass, error } = this.state
    return (
      <div className="container" >
        <div className="forms-container">
          <div className="signin-signup">
            {/* Signin */}
            <form className="sign-in-form" >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" name="uname" value={uname} onChange={(e) => this.handleChange(e)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => this.handleChange(e)} />
              </div>
              <a href="/forget" className='forget'>Forget Password ?</a>
              <input type="submit" value="Login" className="btn solid" onClick={(e) => this.onLogin(e)} />
              {error && <p className='error-text'>{error}</p>}
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            {/* signup  */}
            <form className="sign-up-form" >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" name='userName' value={userName} onChange={(e) => this.handleChange(e)} />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" name='email' value={email} onChange={(e) => this.handleChange(e)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" name='pass' value={pass} onChange={(e) => this.handleChange(e)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password" name='cpass' value={cpass} onChange={(e) => this.handleChange(e)} />
              </div>
              <input type="submit" className="btn" value="Sign up" onClick={(e) => this.onRegister(e)} />
              {error && <p className='error-text'>{error}</p>}
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Sign up with your mobile number to get started
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={() => this.signup()}>
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Get access to your Orders, Wishlist and Recommendations
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={() => this.signin()}>
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    )
  }
}
export default Authentication