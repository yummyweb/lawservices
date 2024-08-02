import { FaFacebook, FaYoutube, FaLinkedinIn } from "react-icons/fa6"
import { SiSubstack } from "react-icons/si"
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-wrapper" id="footer">
            <div className="footer-top">
                <div className="left">
                    <div className="logo font-title">Bharihoke Law Chambers</div>
                    <div className="help-email">contact@nishantbharihoke.com</div>
                    <div className="contact-no">+91 9910241176</div>
                    <div className="address-container">
                        <div className="color-mute">Delhi Office:</div>
                        <div className="address color-mute">B-45 FF, The Shivalik, Malviya Nagar, New Delhi</div>
                        <br />
                        <div className="color-mute">Gurgaon Office:</div>
                        <div className="address color-mute">A236 GF, Blossoms I, Sec-47, Gurgaon</div>
                    </div>
                </div>
                <div className="right"></div>
            </div>

            <hr className="color-mute" />

            <div className="footer-bottom">
                <div className="left color-mute">© 2024 Bharihoke Law Chambers. All rights reserved.</div>
                <div className="middle">
                    <a target="_blank" style={{ textDecoration: "none", color: "black" }} href="https://bharihoke.substack.com/">
                        <SiSubstack size={22} />
                    </a>

                    <FaLinkedinIn size={22} />

                    <a target="_blank" style={{ textDecoration: "none", color: "black" }} href="https://www.youtube.com/@nishantbharihoke">
                        <FaYoutube size={22} />
                    </a>
                </div>
                <div className="right color-mute">Privacy Policy</div>
            </div>
        </div>
    )
}

export default Footer