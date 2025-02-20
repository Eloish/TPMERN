import React, { useState, useEffect } from "react";
import Entet from '../sidebar/breadcumb';
import AdminApi from '../../../services/AdminApi'

const AllProducts = () => {
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        AdminApi.getProducts().then((data)=>{
            setproducts(data)
        })

    })

    return (
        <div>
            <Entet title="Produits"/>
            <div className="container-fluid">
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="table-responsive">
                            <table className="table table-hover product_item_list c_table theme-color mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        {/* <th>Image</th> */}
                                        <th>Product Name</th>
                                        <th data-breakpoints="sm xs">Price</th>
                                        <th data-breakpoints="xs">Amount</th>
                                        {/* <th data-breakpoints="xs md">Stock</th> */}
                                        <th data-breakpoints="sm xs md">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product) => (
                                            <tr key={product.id}>
                                              <td>{product.id}</td>
                                              <td><h5>{product.name}</h5></td>
                                              <td>{product.price} €</td>
                                              <td>{product.stock}</td>

                                            </tr>
                                          ))
                                    }
                                    <tr>
                                        
                                        <td>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                        </td>
                                    </tr>
                                           
                                </tbody>
                            </table>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>

            
        </div>
    )
}
export default AllProducts;