import React from 'react';
import ListesProducts from '../Pages/Admin/Products/Listesproducuts';
import AddProducts from '../Pages/Admin/Products/AddProducts';
import EditProduct from '../components/Admin/sidebar/Editproduct';
import { Routes, Route } from 'react-router-dom';
const Approutes=()=>{
    return (
        <Routes>
            
             <Route path="/Admin" element={<ListesProducts />} />
             <Route path="/Admin/addproduct" element={<AddProducts/>}/>
             <Route path="/Admin/product/edit/:id" element={<EditProduct/>}/>

             {/* <Route path="/Admin/products/" element={<Posts />} /> */}
             {/* <Route path="/posts/product:id" element={<SinglePost />} /> */}
        </Routes>
    )

}
export default Approutes;