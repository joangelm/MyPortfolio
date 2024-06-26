import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
    const [done, setDone] = useState(false);
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_eo91od8", "template_k5hwdaq", formRef.current, "mF0aWZqZ32FOzWWRA").then(
            (result) => {
                console.log(result.text);
                setDone(true);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };

    return (
        <div id="contact">
            <div className="verticalbar"></div>
            <div className="container">
                <div className="row d-flex justify-content-center ">
                    <div className="col-sm-6 me-5 ms-n5">
                        <h2 data-aos="fade-up">Contact Me</h2>
                        <br />
                        <form onSubmit={sendEmail} ref={formRef}>
                            {/* <form ref={formRef}> */}
                            <input data-aos="fade-up" type="text" placeholder="Your Name" className="form-control" name="user_name" required />
                            <div className="row">
                                <div className="col-sm-6">
                                    <input
                                        data-aos="fade-up"
                                        type="email"
                                        placeholder="Your Email"
                                        className="form-control"
                                        name="user_email"
                                        required
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        data-aos="fade-up"
                                        type="text"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        name="user_phone_number"
                                        pattern="[0-9]{10}"
                                        title="Please enter valid number."
                                        required
                                    />
                                </div>
                            </div>
                            <input data-aos="fade-up" type="text" placeholder="Subject" className="form-control" name="user_subject" required />
                            <textarea
                                data-aos="fade-up"
                                name="user_message"
                                rows="4"
                                className="form-control"
                                placeholder="Your Message"
                                required
                            ></textarea>
                            <br />
                            <button data-aos="fade-up" type="submit" className="btn btn-primary">
                                Send
                            </button>
                            <br />
                            <br />
                            {done ? <p>Thank you!</p> : null}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
