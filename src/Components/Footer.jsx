import React from "react";
import "../Styles/Footer.css";
import { FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo-section">
                    <img
                        src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac993342deb5c460060ea_apartment-footer.svg"
                        alt="Logo"
                        className="footer-logo"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/66f39f1b82e983b9dc855469_footer-image.avif"
                        alt="Footer Image"
                        className="footer-image"
                    />
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Gallery">Gallery</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/Faqs">FAQs</Link></li>
                            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <ul>
                            <li>Style Guide</li>
                            <li>Instructions</li>
                            <li>Licenses</li>
                            <li>Changelog</li>
                            <li>Coming Soon</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li>Link in Bio</li>
                            <li>Password Protected</li>
                            <li>Error 404</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <div className="footer-contact">
                    <h1 className="ffoo">(555) 123-4567</h1>
                    <p className="ffoo">hello@example.com</p>
                </div>
                <div className="footer-address">
                    <p className="ffoo">Chicago HQ Estica Cop. Macomb, MI 48042</p>
                </div>
            </div>

            <hr className="footer-line" />
            <div className="footer-bottom">
                <p>Designed by <span className="highlight">Webestica</span>, Powered by <span className="highlight">Webflow</span></p>
                <div className="footer-icons">
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaWhatsapp /></a>
                    <a href="https://www.facebook.com/profile.php?id=61569362753063"><FaFacebook /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;