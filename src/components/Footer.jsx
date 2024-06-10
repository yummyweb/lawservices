import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <div className="left">
                    <div className="logo font-title">Bharihoke Law Services</div>
                    <div className="help-email">help@bharihokelaw.co</div>
                    <div className="contact-no">+91 9910241176</div>
                    <div className="address color-mute">Chamber No. 2, Patli Gali, Secretariat</div>
                </div>
                <div className="right"></div>
            </div>

            <hr className="color-mute" />

            <div className="footer-bottom">
                <div className="left color-mute">© 2024 Bharihoke Law Services. All rights reserved.</div>
                <div className="middle">
                    <FaFacebook size={22} />
                    <FaLinkedinIn size={22} />
                    <FaInstagram size={22} />
                </div>
                <div className="right color-mute">Privacy Policy</div>
            </div>
        </div>
    )
}

export default Footer