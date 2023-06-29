import "./Header.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">Sorting Visualizer</Link>
                <button className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={handleMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    {/* <li className="navbar-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Header