import { useNavigate, useNavigation } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    const navigate = useNavigate()

    return (
        <nav>
            <div className="left">
                <div onClick={() => navigate("/")} className="logo font-title">Bharihoke Law Chambers.</div>
            </div>
            <div className="right">
                <div className="links">
                    <a href="/#about">About us</a>
                    <a href="/#services">Services</a>
                    <a href="/#content">Media</a>
                    <a>Contact</a>
                </div>
                <button onClick={() => navigate("/apply")} className="primary">Apply for Free Case Review</button>
            </div>

            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar