import "./Hero.css"

function Hero() {
    return (
        <div className="hero-wrapper">
            <div className="left">
                <p className="badge color-primary">Law firm</p>
                <h1 className="heading font-title">Overcome legal <br /> obstacles to <br /> your <span className="color-primary font-title">success!</span></h1>
                <p className="subheading color-mute">Law without obstacles for your success. Professional support to help you overcome legal difficulties and achieve your goals.</p>
                <button onClick={() => window.open("https://calendly.com/mailfornishantverma")} className="primary">Book a free consultation</button>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src="/hero-graphic.png" alt="Lawyer picture" />
                </div>
            </div>
        </div>
    )
}

export default Hero