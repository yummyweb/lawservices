import "./About.css"

function About() {
    return (
        <div className="about-wrapper">
            <div className="left">
                <p className="badge color-primary">About us</p>
                <h1 className="heading font-title">A few words <br /> about our law firm</h1>
                <p className="description color-mute">
                    Trust, modernity, success. Our law firm builds
                    relationships based on trust and security. We act
                    quickly, ensuring satisfaction and comfort. We
                    are your partner in business, removing legal
                    obstacles to success.
                </p>
                <button className="ghost">More information about the law firm</button>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src="/about-graphic.png" alt="Lawyer sitting on a table picture" />
                </div>
            </div>
        </div>
    )
}

export default About