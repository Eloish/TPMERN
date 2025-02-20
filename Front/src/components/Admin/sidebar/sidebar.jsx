const Sidebar=()=>{

    return (
        <>
           {/* <div className="navbar-right">
    <ul className="navbar-nav">
        <li><a href="#search" className="main_search" title="Search..."><i className="zmdi zmdi-search"></i></a></li>
        <li className="dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle" title="App" data-toggle="dropdown" role="button"><i className="zmdi zmdi-apps"></i></a>
            <ul className="dropdown-menu slideUp2">
                <li className="header">App Sortcute</li>
                <li className="body">
                    <ul className="menu app_sortcut list-unstyled">
                        <li>
                            <a href="image-gallery.html">
                                <div className="icon-circle mb-2 bg-blue"><i className="zmdi zmdi-camera"></i></div>
                                <p className="mb-0">Photos</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle mb-2 bg-amber"><i className="zmdi zmdi-translate"></i></div>
                                <p className="mb-0">Translate</p>
                            </a>
                        </li>
                        <li>
                            <a href="events.html">
                                <div className="icon-circle mb-2 bg-green"><i className="zmdi zmdi-calendar"></i></div>
                                <p className="mb-0">Calendar</p>
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                                <div className="icon-circle mb-2 bg-purple"><i className="zmdi zmdi-account-calendar"></i></div>
                                <p className="mb-0">Contacts</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle mb-2 bg-red"><i className="zmdi zmdi-tag"></i></div>
                                <p className="mb-0">News</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle mb-2 bg-grey"><i className="zmdi zmdi-map"></i></div>
                                <p className="mb-0">Maps</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li className="dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications"></i>
                <div className="notify"><span className="heartbit"></span><span className="point"></span></div>
            </a>
            <ul className="dropdown-menu slideUp2">
                <li className="header">Notifications</li>
                <li className="body">
                    <ul className="menu list-unstyled">
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle bg-blue"><i className="zmdi zmdi-account"></i></div>
                                <div className="menu-info">
                                    <h4>8 New Members joined</h4>
                                    <p><i className="zmdi zmdi-time"></i> 14 mins ago </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle bg-amber"><i className="zmdi zmdi-shopping-cart"></i></div>
                                <div className="menu-info">
                                    <h4>4 Sales made</h4>
                                    <p><i className="zmdi zmdi-time"></i> 22 mins ago </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle bg-red"><i className="zmdi zmdi-delete"></i></div>
                                <div className="menu-info">
                                    <h4><b>Nancy Doe</b> Deleted account</h4>
                                    <p><i className="zmdi zmdi-time"></i> 3 hours ago </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle bg-green"><i className="zmdi zmdi-edit"></i></div>
                                <div className="menu-info">
                                    <h4><b>Nancy</b> Changed name</h4>
                                    <p><i className="zmdi zmdi-time"></i> 2 hours ago </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle bg-grey"><i className="zmdi zmdi-comment-text"></i></div>
                                <div className="menu-info">
                                    <h4><b>John</b> Commented your post</h4>
                                    <p><i className="zmdi zmdi-time"></i> 4 hours ago </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle bg-purple"><i className="zmdi zmdi-refresh"></i></div>
                                <div className="menu-info">
                                    <h4><b>John</b> Updated status</h4>
                                    <p><i className="zmdi zmdi-time"></i> 3 hours ago </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="icon-circle bg-light-blue"><i className="zmdi zmdi-settings"></i></div>
                                <div className="menu-info">
                                    <h4>Settings Updated</h4>
                                    <p><i className="zmdi zmdi-time"></i> Yesterday </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="footer"> <a href="javascript:void(0);">View All Notifications</a> </li>
            </ul>
        </li>
        <li className="dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-flag"></i>
            <div className="notify"><span className="heartbit"></span><span className="point"></span></div>
            </a>
            <ul className="dropdown-menu slideUp2">
                <li className="header">Tasks List <small className="float-right"><a href="javascript:void(0);">View All</a></small></li>
                <li className="body">
                    <ul className="menu tasks list-unstyled">
                        <li>
                            <div className="progress-container progress-primary">
                                <span className="progress-badge">eCommerce Website</span>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{"width": '86%'}}>
                                        <span className="progress-value">86%</span>
                                    </div>
                                </div>                        
                                <ul className="list-unstyled team-info">
                                    <li className="m-r-15"><small>Team</small></li>
                                    <li>
                                        
                                        <img src="assets/images/xs/avatar2.jpg" alt="Avatar"/> 
                                    </li>
                                    <li>
                                        <img src="assets/images/xs/avatar3.jpg" alt="Avatar"/>
                                    </li>
                                    <li>
                                        <img src="assets/images/xs/avatar4.jpg" alt="Avatar"/>
                                    </li>                            
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="progress-container">
                                <span className="progress-badge">iOS Game Dev</span>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{"width": '45%'}}>
                                        <span className="progress-value">45%</span>
                                    </div>
                                </div>
                                <ul className="list-unstyled team-info">
                                    <li className="m-r-15"><small>Team</small></li>
                                    <li>
                                        <img src="assets/images/xs/avatar10.jpg" alt="Avatar"/>
                                    </li>
                                    <li>
                                        <img src="assets/images/xs/avatar9.jpg" alt="Avatar"/>
                                    </li>
                                    <li>
                                        <img src="assets/images/xs/avatar8.jpg" alt="Avatar"/>
                                    </li>
                                    <li>
                                        <img src="assets/images/xs/avatar7.jpg" alt="Avatar"/>
                                    </li>
                                    <li>
                                        <img src="assets/images/xs/avatar6.jpg" alt="Avatar"/>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="progress-container progress-warning">
                                <span className="progress-badge">Home Development</span>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100" style={{"width": "29%"}}>
                                        <span className="progress-value">29%</span>
                                    </div>
                                </div>
                                <ul className="list-unstyled team-info">
                                    <li className="m-r-15"><small>Team</small></li>
                                    <li>
                                        <img src="assets/images/xs/avatar5.jpg" alt="Avatar"/>
                                    </li>
                                    <li>
                                        <img src="assets/images/xs/avatar2.jpg" alt="Avatar"/>
                                    </li>
                                    <li>
                                        <img src="assets/images/xs/avatar7.jpg" alt="Avatar"/>
                                    </li>                            
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="javascript:void(0);" className="app_calendar" title="Calendar"><i className="zmdi zmdi-calendar"></i></a></li>
        <li><a href="javascript:void(0);" className="app_google_drive" title="Google Drive"><i className="zmdi zmdi-google-drive"></i></a></li>
        <li><a href="javascript:void(0);" className="app_group_work" title="Group Work"><i className="zmdi zmdi-group-work"></i></a></li>
        <li><a href="javascript:void(0);" className="js-right-sidebar" title="Setting"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
        <li><a href="sign-in.html" className="mega-menu" title="Sign Out"><i className="zmdi zmdi-power"></i></a></li>
    </ul>
           </div> */}
           <aside id="leftsidebar" className="sidebar">
                <div className="navbar-brand">
                    <button className="btn-menu ls-toggle-btn" type="button"><i className="zmdi zmdi-menu"></i></button>
                    <a href="index.html"><img src="assets/images/logo.svg" width="25" alt="Aero"/><span className="m-l-10">Aero</span></a>
                </div>
                <div className="menu">
                    <ul className="list">
                        <li>
                            <div className="user-info">
                                <a className="image" href="profile.html"><img src="assets/images/profile_av.jpg" alt="User"/></a>
                                <div className="detail">
                                    <h4>Michael</h4>
                                    <small>Super Admin</small>                        
                                </div>
                            </div>
                        </li>
                        <li className="active open"><a href="index.html"><i className="zmdi zmdi-home"></i><span>Dashboard</span></a></li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-apps"></i><span>App</span></a>
                            <ul className="ml-menu">
                                <li><a href="mail-inbox.html">Email</a></li>
                                <li><a href="chat.html">Chat Apps</a></li>
                                <li><a href="events.html">Calendar</a></li>
                                <li><a href="contact.html">Contact</a></li>                    
                            </ul>
                        </li>
                        <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-assignment"></i><span>Projects</span></a>
                            <ul className="ml-menu">
                                <li><a href="project-list.html">Projects List</a></li>
                                <li><a href="taskboard.html">Taskboard</a></li>
                                <li><a href="ticket-list.html">Ticket List</a></li>
                                <li><a href="ticket-detail.html">Ticket Detail</a></li>
                            </ul>
                        </li>
                        <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-folder"></i><span>File Manager</span></a>
                            <ul className="ml-menu">
                                <li><a href="file-dashboard.html">All File</a></li>
                                <li><a href="file-documents.html">Documents</a></li>
                                <li><a href="file-images.html">Images</a></li>
                                <li><a href="file-media.html">Media</a></li>
                            </ul>
                        </li>
                        <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-blogger"></i><span>Blog</span></a>
                            <ul className="ml-menu">
                                <li><a href="blog-dashboard.html">Dashboard</a></li>
                                <li><a href="blog-post.html">Blog Post</a></li>
                                <li><a href="blog-list.html">List View</a></li>
                                <li><a href="blog-grid.html">Grid View</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-shopping-cart"></i><span>Ecommerce</span></a>
                            <ul className="ml-menu">
                                <li><a href="ec-dashboard.html">Dashboard</a></li>
                                <li><a href="ec-product.html">Product</a></li>
                                <li><a href="ec-product-List.html">Product List</a></li>
                                <li><a href="ec-product-detail.html">Product detail</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-swap-alt"></i><span>Components</span></a>
                            <ul className="ml-menu">
                                <li><a href="ui_kit.html">Aero UI KIT</a></li>                    
                                <li><a href="alerts.html">Alerts</a></li>                    
                                <li><a href="collapse.html">Collapse</a></li>
                                <li><a href="colors.html">Colors</a></li>
                                <li><a href="dialogs.html">Dialogs</a></li>                    
                                <li><a href="list-group.html">List Group</a></li>
                                <li><a href="media-object.html">Media Object</a></li>
                                <li><a href="modals.html">Modals</a></li>
                                <li><a href="notifications.html">Notifications</a></li>                    
                                <li><a href="progressbars.html">Progress Bars</a></li>
                                <li><a href="range-sliders.html">Range Sliders</a></li>
                                <li><a href="sortable-nestable.html">Sortable & Nestable</a></li>
                                <li><a href="tabs.html">Tabs</a></li>
                                <li><a href="waves.html">Waves</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-flower"></i><span>Font Icons</span></a>
                            <ul className="ml-menu">
                                <li><a href="icons.html">Material Icons</a></li>
                                <li><a href="icons-themify.html">Themify Icons</a></li>
                                <li><a href="icons-weather.html">Weather Icons</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-assignment"></i><span>Forms</span></a>
                            <ul className="ml-menu">
                                <li><a href="basic-form-elements.html">Basic Form</a></li>
                                <li><a href="advanced-form-elements.html">Advanced Form</a></li>
                                <li><a href="form-examples.html">Form Examples</a></li>
                                <li><a href="form-validation.html">Form Validation</a></li>
                                <li><a href="form-wizard.html">Form Wizard</a></li>
                                <li><a href="form-editors.html">Editors</a></li>
                                <li><a href="form-upload.html">File Upload</a></li>
                                <li><a href="form-summernote.html">Summernote</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-grid"></i><span>Tables</span></a>
                            <ul className="ml-menu">
                                <li><a href="normal-tables.html">Normal Tables</a></li>
                                <li><a href="jquery-datatable.html">Jquery Datatables</a></li>
                                <li><a href="editable-table.html">Editable Tables</a></li>
                                <li><a href="footable.html">Foo Tables</a></li>
                                <li><a href="table-color.html">Tables Color</a></li>
                            </ul>
                        </li>            
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-chart"></i><span>Charts</span></a>
                            <ul className="ml-menu">
                                <li><a href="c3.html">C3 Chart</a></li>
                                <li><a href="morris.html">Morris</a></li>
                                <li><a href="flot.html">Flot</a></li>
                                <li><a href="chartjs.html">ChartJS</a></li>
                                <li><a href="sparkline.html">Sparkline</a></li>
                                <li><a href="jquery-knob.html">Jquery Knob</a></li>
                            </ul>
                        </li>            
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-delicious"></i><span>Widgets</span></a>
                            <ul className="ml-menu">
                                <li><a href="widgets-app.html">Apps Widgets</a></li>
                                <li><a href="widgets-data.html">Data Widgets</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-lock"></i><span>Authentication</span></a>
                            <ul className="ml-menu">
                                <li><a href="sign-in.html">Sign In</a></li>
                                <li><a href="sign-up.html">Sign Up</a></li>
                                <li><a href="forgot-password.html">Forgot Password</a></li>
                                <li><a href="404.html">Page 404</a></li>
                                <li><a href="500.html">Page 500</a></li>
                                <li><a href="page-offline.html">Page Offline</a></li>
                                <li><a href="locked.html">Locked Screen</a></li>
                            </ul>
                        </li>
                        <li className="open_top"><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-copy"></i><span>Sample Pages</span></a>
                            <ul className="ml-menu">
                                <li><a href="blank.html">Blank Page</a></li>
                                <li><a href="image-gallery.html">Image Gallery</a></li>
                                <li><a href="profile.html">Profile</a></li>
                                <li><a href="timeline.html">Timeline</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="invoices.html">Invoices</a></li>
                                <li><a href="invoices-list.html">Invoices List</a></li>
                                <li><a href="search-results.html">Search Results</a></li>
                            </ul>
                        </li>
                        <li className="open_top"><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-map"></i><span>Maps</span></a>
                            <ul className="ml-menu">
                                <li><a href="google.html">Google Map</a></li>
                                <li><a href="yandex.html">YandexMap</a></li>
                                <li><a href="jvectormap.html">jVectorMap</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="progress-container progress-primary m-t-10">
                                <span className="progress-badge">Traffic this Month</span>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{"width": "67%"}}>
                                        <span className="progress-value">67%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-container progress-info">
                                <span className="progress-badge">Server Load</span>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{"width": "86%"}}>
                                        <span className="progress-value">86%</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
           </aside>
        </>
    )

}
export default Sidebar;