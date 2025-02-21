import { NavLink } from 'react-router-dom';
import Approutes from "../../../routes/Approutes"
import Search from '../Search/Search';
const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-primary navbar-primary">
            <div className="container-fluid">
                <NavLink className="text-decoration-none me-5 fw-bolder fs-5" to="/">LilShop</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className={({ isActive }) => (isActive ? "text-success text-decoration-none me-5" : "text-decoration-none me-5")} aria-current="page" to="/">Products</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-success text-decoration-none me-5" : "text-decoration-none me-5")} to="/Admin">Admin</NavLink>
                    </ul>
                    <Search />
                    <NavLink className="me-5 W-100 h-100" to="/panier">
                        <i className="zmdi zmdi-shopping-cart"></i>
                    </NavLink>
                </div>
            </div>
        </nav>
        <Approutes />
    </>
  )
}

export default NavBar