import React from 'react'

const SignIn = () => {
  return (
    <>
    <div>
        <h2>Sign In</h2>
        <form>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </>
  )
}

export default SignIn
