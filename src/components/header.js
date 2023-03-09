import { useState } from 'react';
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

const Header = () => {
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
                    <Nav navbar>
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
                    <UserLoginForm />
                </Collapse>
        </Navbar>
        </div>
        </header>
    );
}

export default Header