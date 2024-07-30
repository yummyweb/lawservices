import { useRef } from "react";
import "./ReviewForm.css"
import emailjs from '@emailjs/browser'

function ReviewForm() {
    const form = useRef()

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm('service_okprt9e', 'template_z9e6w8f', form.current, {
                publicKey: 'LtuoglxrmioZ7WIKU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <div className="form-wrapper">
            <h1 className="font-title">Let's talk about your story.</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-field">
                    <label for="name">Name</label>
                    <input name="client_name" id="name" />
                </div>

                <div className="form-field">
                    <label for="email">Email</label>
                    <input name="client_email" id="email" />
                </div>

                <div className="form-field">
                    <label for="phone">Phone</label>
                    <input name="client_phone" id="phone" />
                </div>

                <div className="form-field">
                    <label for="city">City</label>
                    <input name="client_city" id="city" />
                </div>

                <div className="form-field">
                    <label for="state">State</label>
                    <input name="client_state" id="state" />
                </div>

                <div className="form-field">
                    <label for="nature">Nature of Matter</label>
                    <input name="client_nature" id="nature" />
                </div>

                <div className="form-field">
                    <label for="description">Case Description</label>
                    <textarea name="client_description" id="description" />
                </div>

                <button className="primary">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm