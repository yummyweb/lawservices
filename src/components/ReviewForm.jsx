import "./ReviewForm.css"

function ReviewForm() {
    return (
        <div className="form-wrapper">
            <h1 className="font-title">Let's talk about your story.</h1>
            <form>
                <div className="form-field">
                    <label for="name">Name</label>
                    <input id="name" />
                </div>

                <div className="form-field">
                    <label for="email">Email</label>
                    <input id="email" />
                </div>

                <div className="form-field">
                    <label for="phone">Phone</label>
                    <input id="phone" />
                </div>

                <div className="form-field">
                    <label for="city">City</label>
                    <input id="city" />
                </div>

                <div className="form-field">
                    <label for="state">State</label>
                    <input id="state" />
                </div>

                <div className="form-field">
                    <label for="nature">Nature of Matter</label>
                    <input id="nature" />
                </div>

                <button onClick={e => e.preventDefault()} className="primary">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm