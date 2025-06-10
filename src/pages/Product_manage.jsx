import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Product_manage() {
  return (
    <>
        <h3>Manage your products here:</h3>
        <NavLink to = "/add-product">Add new product</NavLink>
        <NavLink to = "/update-product">Update existing product</NavLink>
        <NavLink to = "/delete-product">Delete product</NavLink>
        <NavLink to = "/search-product">Search product</NavLink>
    </>
  )
}