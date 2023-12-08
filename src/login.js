import React, { useState } from "react";
import { styles } from "./style";

export const Login = () => {
  return (
    <div style={{backgroundColor: 'pink', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form>
        <div style={{ justifyContent: 'center', marginTop: '10rem', marginBottom: '10rem' }}>
          <div style={styles.form}>
            <label htmlFor="email"> Email: </label>
            <input type="email" placeholder="phone number or email" id="email" name="email" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginBottom: '1rem', marginTop: '2rem' }}>
            <label htmlFor="password"> Password: </label>
            <input type="password" placeholder="******" id="password" name="password" />
          </div>

          <div style={styles.logInButton}>
            <button>Log In</button>
          </div>
          <div style={styles.signUpButton}>
            <button style={styles.buttonStyle}> Already have an account? <a href="#" style={styles.signUpStyle}>Sign up here. </a></button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
