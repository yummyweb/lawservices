import "./Blog.css"

function Blog() {
    return (
        <div className="blog-wrapper">
            <p className="badge color-primary">Blog</p>
            <h1 className="heading font-title">Newsroom</h1>
            <div className="blog-posts">
                <div className="post">
                    <div className="banner">
                        <img src="/blog-graphic1.png" alt="Image of a laptop and a notebook" />
                    </div>
                    <div className="tag">Criminal Law</div>
                    <div className="title">How do you prepare for a
                        company's RODO audit
                        and implementation?</div>
                    <div className="blurb color-mute">RODO, or the General Data Protection Regulation, is an
                        EU law that regulates the processing of personal data.</div>
                </div>

                <div className="post">
                    <div className="banner">
                        <img src="/blog-graphic1.png" alt="Image of a laptop and a notebook" />
                    </div>
                    <div className="tag">Criminal Law</div>
                    <div className="title">How do you prepare for a
                        company's RODO audit
                        and implementation?</div>
                    <div className="blurb color-mute">RODO, or the General Data Protection Regulation, is an
                        EU law that regulates the processing of personal data.</div>
                </div>

                <div className="post">
                    <div className="banner">
                        <img src="/blog-graphic1.png" alt="Image of a laptop and a notebook" />
                    </div>
                    <div className="tag">Criminal Law</div>
                    <div className="title">Division of property during divorce</div>
                    <div className="blurb color-mute">RODO, or the General Data Protection Regulation, is an
                        EU law that regulates the processing of personal data.</div>
                </div>
            </div>
        </div>
    )
}

export default Blog