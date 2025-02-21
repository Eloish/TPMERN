import { NavLink } from "react-router-dom"
const  Products = () => {
  return(
    <section className="bg-light container-fluid row my-5 mx-5">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 my-5">
            <div className="card">
                <div className="body product_item">
                    <span className="label onsale">Sale!</span>
                    <img src="assets/images/ecommerce/1.png" alt="Product" className="img-fluid cp_img" />
                    <div className="product_details">
                        <a href="ec-product-detail.html">Simple Black Clock</a>
                        <ul className="product_price list-unstyled">
                            <li className="old_price">$52.00</li>
                            <li className="new_price">$45.00</li>
                        </ul>                                
                    </div>
                    <div className="action">
                        <NavLink className="btn btn-info waves-effect" to="/produits/detail"><i className="zmdi zmdi-eye"></i></NavLink>
                        <NavLink className="btn btn-primary waves-effect" to="/panier">ADD TO CART</NavLink>
                    </div>
                </div>
            </div>                
        </div>
    </section>
  )
}

export default Products