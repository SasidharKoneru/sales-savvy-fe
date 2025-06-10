import React from 'react'
import { Link } from 'react-router-dom'


export default function Welcome() {
  return (
    <>
        <h4>Welcome page</h4>
        {/* sign in and sign up option */}
        <nav>
          <Link to="/sign-in">Sign In</Link>
        </nav>
        <nav>
          <Link to="/sign-up">Sign Up</Link>
        </nav>
        {/* <p>Welcome to Sales Savvy!</p> */}
    </>
  )
}