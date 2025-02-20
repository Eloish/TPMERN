
const ProductDetails = () => {
  return ( 
    <>
        <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h2>Product Detail</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home"></i> Aero</a></li>
                                <li className="breadcrumb-item">eCommerce</li>
                                <li className="breadcrumb-item active">Product Detail</li>
                            </ul>
                            <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">                
                            <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="body">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-12">
                                            <div className="preview preview-pic tab-content">
                                                <div className="tab-pane active" id="product_1"><img src="assets/images/ecommerce/1.png" className="img-fluid" alt="" /></div>
                                                <div className="tab-pane" id="product_2"><img src="assets/images/ecommerce/2.png" className="img-fluid" alt=""/></div>
                                                <div className="tab-pane" id="product_3"><img src="assets/images/ecommerce/3.png" className="img-fluid" alt=""/></div>
                                                <div className="tab-pane" id="product_4"><img src="assets/images/ecommerce/4.png" className="img-fluid" alt=""/></div>
                                            </div>
                                            <ul className="preview thumbnail nav nav-tabs">
                                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#product_1"><img src="assets/images/ecommerce/1.png" alt=""/></a></li>
                                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#product_2"><img src="assets/images/ecommerce/2.png" alt=""/></a></li>
                                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#product_3"><img src="assets/images/ecommerce/3.png" alt=""/></a></li>
                                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#product_4"><img src="assets/images/ecommerce/4.png" alt=""/></a></li>                                    
                                            </ul>                
                                        </div>
                                        <div className="col-xl-9 col-lg-8 col-md-12">
                                            <div className="product details">
                                                <h3 className="product-title mb-0">Simple Black Clock</h3>
                                                <h5 className="price mt-0">Current Price: <span className="col-amber">$180</span></h5>
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span className="zmdi zmdi-star col-amber"></span>
                                                        <span className="zmdi zmdi-star col-amber"></span>
                                                        <span className="zmdi zmdi-star col-amber"></span>
                                                        <span className="zmdi zmdi-star col-amber"></span>
                                                        <span className="zmdi zmdi-star-outline"></span>
                                                    </div>
                                                    <span className="m-l-10">41 reviews</span>
                                                </div>
                                                
                                                <p className="product-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                <p className="vote"><strong>78%</strong> of buyers enjoyed this product! <strong>(23 votes)</strong></p>
                                                <h5 className="sizes">Sizes:
                                                    <span className="size" title="small">s</span>
                                                    <span className="size" title="medium">m</span>
                                                    <span className="size" title="large">l</span>
                                                    <span className="size" title="xtra large">xl</span>
                                                </h5>
                                                <h5 className="colors">colors:
                                                    <span className="color bg-amber not-available"  title="Not In store"></span>
                                                    <span className="color bg-green"></span>
                                                    <span className="color bg-blue"></span>
                                                </h5>
                                                <div className="action">
                                                    <button className="btn btn-primary waves-effect" type="button">ADD TO CART</button>
                                                    <button className="btn btn-info waves-effect" type="button"><i className="zmdi zmdi-favorite"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="body">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#description">Description</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#review">Review</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#about">About</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="body">                            
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="description">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                        </div>
                                        <div className="tab-pane" id="review">
                                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied</p>
                                            <ul className="row list-unstyled c_review mt-4">
                                                <li className="col-12">
                                                    <div className="avatar">
                                                        <a href="javascript:void(0);"><img className="rounded" src="assets/images/xs/avatar2.jpg" alt="user" width="60" /></a>
                                                    </div>                                
                                                    <div className="comment-action">
                                                        <h5 className="c_name">Hossein Shams</h5>
                                                        <p className="c_msg mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. </p>
                                                        <div className="badge badge-primary">iPhone 8</div>
                                                        <span className="m-l-10">
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber"></i></a>
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber"></i></a>
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber"></i></a>
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber"></i></a>
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star-outline text-muted"></i></a>
                                                        </span>
                                                        <small className="comment-date float-sm-right">Dec 21, 2019</small>
                                                    </div>                                
                                                </li>
                                                <li className="col-12">
                                                    <div className="avatar">
                                                        <a href="javascript:void(0);"><img className="rounded" src="assets/images/xs/avatar3.jpg" alt="user" width="60" /></a>
                                                    </div>                                
                                                    <div className="comment-action">
                                                        <h5 className="c_name">Tim Hank</h5>
                                                        <p className="c_msg mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                                        <div className="badge badge-primary">Nokia 8</div>
                                                        <span className="m-l-10">
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber"></i></a>
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber"></i></a>
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber"></i></a>
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber"></i></a>
                                                            <a href="javascript:void(0);"><i className="zmdi zmdi-star-outline text-muted"></i></a>
                                                        </span>
                                                        <small className="comment-date float-sm-right">Dec 18, 2019</small>
                                                    </div>                                
                                                </li>                                   
                                            </ul>
                                        </div>
                                        <div className="tab-pane" id="about">
                                            <h6>Where does it come from?</h6>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductDetails