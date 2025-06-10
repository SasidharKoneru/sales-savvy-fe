import { Route, Routes } from "react-router-dom"
import Sign_in from "./pages/Sign_in"
import Sign_up from "./pages/Sign_up"
import Welcome from "./pages/Welcome"
import Admin_home from "./pages/Admin_home"
import Customer_home from "./pages/Customer_home"
import User_manage from "./pages/User_manage"
import Product_manage from "./pages/Product_manage"
import Add_product from "./pages/product/Add_product";
import Update_product from "./pages/product/Update_product";
import Delete_product from "./pages/product/Delete_product";
import Search_product from "./pages/product/Search_product";


// import { useState } from 'react'

function App() {

 
  return(
    <>
      {/* <Welcome /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign-in" element={<Sign_in />} />
        <Route path="/sign-up" element={<Sign_up />} />
        <Route path="/admin-home" element={<Admin_home />} />
        <Route path="/customer-home" element={<Customer_home />} />

        <Route path="/user-manage" element={<User_manage />} />
        <Route path="/product-manage" element={<Product_manage />} />

        <Route path="/add-product" element={<Add_product />} />
        <Route path="/update-product" element={<Update_product />} />
        <Route path="/delete-product" element={<Delete_product />} />
        <Route path="/search-product" element={<Search_product />} />
      </Routes>
    </>


  )
}

export default App