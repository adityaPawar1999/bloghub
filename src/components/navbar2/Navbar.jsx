import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarStyle from "./NavbarStyle"; // Assuming this is your styled component
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import SmartToyIcon from '@mui/icons-material/SmartToy';

function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <>
            <NavbarStyle>
                <div className="mainContainer">

                    <div className="navigationColor col-lg-12">
                        <div className="logo">
                            <h4><SmartToyIcon/> UpdateDAILY</h4>
                        </div>
                        <div className="navigation">

                            <NavLink className="navLink" to='/'>Home</NavLink>
                            <NavLink className="navLink" to='/post'>Posts</NavLink>
                            <NavLink className="navLink" to='/create'>Create</NavLink>
                            <NavLink className="navLink " to='/login'>LogIn</NavLink>
                        </div>

                        <div className="mobile-navbar">
                            {isMenuOpen ? (
                                <CancelIcon sx={{ fontSize: 30 }} className="cancelIcon" onClick={toggleMenu} />
                            ) : (
                                <MenuIcon sx={{ fontSize: 30 }} className="menuIcon" onClick={toggleMenu} />
                            )}
                        </div>

                        {isMenuOpen && (
                            <div className="mobile-menu">
                                <Link className="navLink" to='/'>home</Link><hr />
                                <Link className="navLink" to='/about'>About</Link><hr />
                                <Link className="navLink" to='/contact'>Contact</Link><hr />
                            </div>
                        )}
                    </div>

                </div>
            </NavbarStyle>

        </>
    );
}

export default NavigationBar;
