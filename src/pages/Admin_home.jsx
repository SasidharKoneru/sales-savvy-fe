import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Admin_home() {
  return (
    <>
      <h3>Welcome to Admin Home</h3>

      <NavLink to = "/product-manage">Product management</NavLink>
      <NavLink to = "/user-manage">User management</NavLink>
    </>
  )
}