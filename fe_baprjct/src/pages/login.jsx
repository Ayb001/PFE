import React from 'react';
import { Helmet } from 'react-helmet';

function Login() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/login.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Helmet>

      <div className="login-container">
        <input type="checkbox" id="flip" />
        <div className="login-cover">
          <div className="login-front">
            <img src="images/frontImg.jpg" alt="" />
            <div className="login-text">
              <span className="login-text-1">Every new friend is a <br /> new adventure</span>
              <span className="login-text-2">Let's get connected</span>
            </div>
          </div>
          <div className="login-back">
            <img className="login-backImg" src="images/backImg.jpg" alt="" />
            <div className="login-text">
              <span className="login-text-1">Complete miles of journey <br /> with one step</span>
              <span className="login-text-2">Let's get started</span>
            </div>
          </div>
        </div>

        <div className="login-forms">
          <div className="login-form-content">
            <div className="login-form">
              <div className="login-title">Login</div>
              <form>
                <div className="login-input-boxes">
                  <div className="login-input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="login-input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <div className="login-text"><a href="#">Forgot password?</a></div>
                  <div className="login-button login-input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="login-text login-sign-up-text">
                    Don't have an account? <label htmlFor="flip">Signup now</label>
                  </div>
                </div>
              </form>
            </div>

            <div className="login-signup-form">
              <div className="login-title">Signup</div>
              <form>
                <div className="login-input-boxes">
                  <div className="login-input-box">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="login-input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="login-input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <div className="login-button login-input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="login-text login-sign-up-text">
                    Already have an account? <label htmlFor="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
