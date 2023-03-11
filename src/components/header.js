import { useState, useContext } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import UserLoginForm from './UserLoginForm';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const Header = () => {
    const {cartItems} = useContext(ShoppingCartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <div className="container">
        <Navbar dark expand='md'>
                <NavbarBrand className="logo" href='/'>
                    Movie House
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav navbar className="me-auto">
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/movies'>
                                Movies
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/menu'>
                                Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavLink to="/checkout" className="cart ms-auto me-5">
                            <i className="fa fa-shopping-cart"></i>
                            { cartItems.length > 0 ? <div className="indicator">!</div> : null}
                    </NavLink>
                    <UserLoginForm />
                </Collapse>
        </Navbar>
        </div>
        </header>
    );
}

export default Header