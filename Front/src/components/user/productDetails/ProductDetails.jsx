import { NavLink } from "react-router-dom"

const ProductDetails = () => {
  return ( 
    <section className="content mt-5 mr-5">
        <div className="body_scroll container-fluid">
            <div className="row clearfix">
                <div className="col-12">
                    <div className="card row">
                        <div className="col-xl-3 col-lg-4 col-md-12">
                            <div className="preview preview-pic tab-content">
                                <div className="tab-pane active" id="product_1"><img src="../../../assets/images/ecommerce/1.png" className="img-fluid" alt="" /></div>
                            </div>              
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="product details">
                                <h3 className="product-title mb-0">Simple Black Clock</h3>
                                <h5 className="price mt-0">Current Price: <span className="col-amber">$180</span></h5>
                                <p className="product-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="vote"><strong>78%</strong> of buyers enjoyed this product! <strong>(23 votes)</strong></p>
                                <h5 className="sizes">Sizes:
                                    <span className="size" title="small">s</span>
                                </h5>
                                <h5 className="colors">colors:
                                    <span className="color bg-amber not-available"  title="Not In store"></span>
                                    <span className="color bg-green"></span>
                                </h5>
                                <div className="action">
                                    <NavLink className="btn btn-primary waves-effect" type="button" to="/panier">ADD TO CART</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails