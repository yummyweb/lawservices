import "./WhyUs.css"

function WhyUs() {
    return (
        <div className="why-us-wrapper">
            <p className="badge color-primary">What makes us different</p>
            <h1 className="heading font-title">Why choose our law firm?</h1>

            <div className="info-wrapper">
                <div className="left">
                    <p className="percentage color-primary">95%</p>
                    <p className="description">Thanks to our skills and
                        commitment, our law firm
                        achieves a high degree of
                        efficiency in resolving cases.</p>
                    <button className="primary">See what our clients have to say</button>
                </div>

                <div className="right">
                    <div className="info-box">
                        <p className="number color-primary">10+</p>
                        <p className="info-description">Years of experience is the solid
                            foundation on which we base
                            our law firm.</p>
                    </div>
                    <hr className="line" />
                    <div className="info-box">
                        <p className="number color-primary">+500</p>
                        <p className="info-description">More than 500 satisfied clients
                            are the result of our excellent
                            legal services.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs