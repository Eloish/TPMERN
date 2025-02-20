import React from 'react';
import ListesProducts from '../Pages/Admin/Products/Listesproducuts';
import { Routes, Route } from 'react-router-dom';
const Approutes=()=>{
    return (
        <Routes>
             <Route path="/Admin" element={<ListesProducts />} />
             {/* <Route path="/Admin/products/" element={<Posts />} /> */}
             {/* <Route path="/posts/product:id" element={<SinglePost />} /> */}
        </Routes>
    )

}
export default Approutes;