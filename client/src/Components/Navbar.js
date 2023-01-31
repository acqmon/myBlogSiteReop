import React from "react";
import "./stylesheets/Navbar.css";

function Navbar() {
    return (
        <div>
            <div className="navContainer">
                <div className="container">

                    <h3 className="navLogo">MY-BlogSite</h3>
                    <ul className="navLinks">
                        <li>Food</li>
                        <li>Travel</li>
                        <li>Technology</li>
                        <li>Culture</li>
                        <li className="user">Acquin</li>
                        <li className="newBlog">Write</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Navbar;