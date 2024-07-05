import "./About.css"

function About() {
    return (
        <div className="about-wrapper" id="about">
            <div className="left">
                <p className="badge color-primary">About us</p>
                <h1 className="heading font-title">A few words <br /> about our law firm</h1>
                <p className="description color-mute">
                    We are a full-service legal practise situated in Gurgaon
                    with offices in Delhi, Chandigarh, and Gurgaon. We
                    specialise in litigation and have a team of highly driven
                    and experienced advocates who believe in putting the clients'
                    interests first at all times.
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