import React from "react";
import Logo from '../assets/footerLogo.png'
import Nav from "./Nav";

const Footer = () => {
    return (
    <footer>
        <img src={Logo} alt="footer-logo"/>
        <div className="footerLinksContainer">
            <div className="navigation">
                <h4>Navigation</h4>
                <Nav />
            </div>
            <div className="contactUs">
                <h4>Contact Us</h4>
                <ul>
                    <li>101 Michigan Avenue</li>
                    <li>(312) 555-0179</li>
                    <li><a href="mailto:contact@example.com" >Email Us</a></li>
                </ul>
            </div>
            <div className="socials">
                <h4>Socials</h4>
                <ul>
                    <li><a href="http://wwww.facebook.com" >Facebook</a></li>
                    <li><a href="http://x.com" >Twitter</a></li>
                    <li><a href="http://www.instagram.com" >Instagram</a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>2025 © Little Lemon</p>
        </div>
    </footer>
    );
}

export default Footer;