import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <div className="logo font-title">Bharihoke Law Services.</div>
            </div>
            <div className="right">
                <div className="links">
                    <a>About us</a>
                    <a>Services</a>
                    <a>Our Team</a>
                    <a>Blog</a>
                    <a>Contact</a>
                </div>
                <button className="primary">Make an Appointment</button>
            </div>
        </nav>
    )
}

export default Navbar