import React, { useState } from "react";
import Logo from '../../assets/images/logo.png';
import "./header.sass";
import '../../assets/style/icomoon.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="top-bar">
                <div className="logo-section">
                    <div className="img-flex">
                        <img src={Logo} alt="JIIT Logo" className="logo" />
                        <div className="institute-name">
                            <h1>JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY, NOIDA</h1>
                            <p>(Deemed to be a University under section 3 of UGC Act 1956)</p>
                        </div>
                    </div>

                    <div className="contact-section">
                        <div className="contact-flex">
                            <div className="contact-item">
                                <a href="tel:+911202594300"><span class="icon-call"></span> +91-120-2594300/400</a>
                            </div>
                            <div className="contact-item">
                                <a href="mailto:admission@jiit.ac.in"><span class="icon-mail"></span> admission@jiit.ac.in</a>
                            </div>
                            <div className="font-size-toggle">
                                <span>A-</span> <span>A+</span>
                            </div>
                        </div>
                        <div className="search-box">
                            <input type="text" placeholder="Search" />
                            <button>
                                <span class="icon-search-o"></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hamburger Icon */}
                <div className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Navbar */}
            <nav className={`navbar ${menuOpen ? "active" : ""}`}>
                {/* Close button */}
                <div className="close-btn" onClick={() => setMenuOpen(false)}>
                    &times;
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Academics</a></li>
                    <li><a href="#">For Students</a></li>
                    <li><a href="#">Research & Development</a></li>
                    <li><a href="#">Innovation & Entrepreneurship</a></li>
                    <li><a href="#">Institute Facilities</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>

            <div className="bottom-bar">
                <div className="bottom-bar-flex">
                    <div className="bottom-bar-item">
                        <span class="icon-speaker"></span>
                        <p><b>Important Announcements:</b> Admission Round for BTech, BBA & Integrated MBA (After Class XII) closing on May 31, 2024. Limited Seats Left.</p>
                    </div>
                    <button>apply now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
