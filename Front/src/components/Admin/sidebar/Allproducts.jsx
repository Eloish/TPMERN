import Entet from '../sidebar/breadcumb';
const AllProducts = () => {
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
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th data-breakpoints="sm xs">Detail</th>
                                        <th data-breakpoints="xs">Amount</th>
                                        <th data-breakpoints="xs md">Stock</th>
                                        <th data-breakpoints="sm xs md">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src="assets/images/ecommerce/1.png" width="48" alt="Product img"/></td>
                                        <td><h5>Simple Black Clock</h5></td>
                                        <td><span className="text-muted">randomised words even slightly believable</span></td>
                                        <td>$16.00</td>
                                        <td><span className="col-green">In Stock</span></td>
                                        <td>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/images/ecommerce/10.png" width="48" alt="Product img"/></td>
                                        <td><h5>Brone Candle</h5></td>
                                        <td><span className="text-muted">It is a long established  will be distracted</span></td>
                                        <td>$15.00</td>
                                        <td><span className="col-amber">Low Stock</span></td>
                                        <td>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/images/ecommerce/11.png" width="48" alt="Product img"/></td>
                                        <td><h5>Wood Simple Clock</h5></td>
                                        <td><span className="text-muted">There passages of Lorem Ipsum available</span></td>
                                        <td>$16.00</td>
                                        <td><span className="col-amber">Low Stock</span></td>
                                        <td>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/images/ecommerce/5.png" width="48" alt="Product img"/></td>
                                        <td><h5>Unero Small Bag</h5></td>
                                        <td><span className="text-muted">It is a long established fact that a distracted</span></td>
                                        <td>$23.00</td>
                                        <td><span className="col-red">Out Of Stock</span></td>
                                        <td>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/images/ecommerce/6.png" width="48" alt="Product img"/></td>
                                        <td><h5>Simple Black Clock</h5></td>
                                        <td><span className="text-muted">Contrary to popular belief, simply random text</span></td>
                                        <td>$16.00</td>
                                        <td><span className="col-green">In Stock</span></td>
                                        <td>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/images/ecommerce/2.png" width="48" alt="Product img"/></td>
                                        <td><h5>Brone Lamp Glasses</h5></td>
                                        <td><span className="text-muted">All the Lorem Ipsum generators on predefined chunks</span></td>
                                        <td>$12.00</td>
                                        <td><span className="col-green">In Stock</span></td>
                                        <td>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/images/ecommerce/3.png" width="48" alt="Product img"/></td>
                                        <td><h5>Simple Black Clock</h5></td>
                                        <td><span className="text-muted">established fact that a be distracted</span></td>
                                        <td>$22.00</td>
                                        <td><span className="col-red">Out Of Stock</span></td>
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