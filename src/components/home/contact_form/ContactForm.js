import React, {Component} from 'react';
import "./_contact_form.scss";
import Decorator from "../../decorator/Decorator";

class ContactForm extends Component
{


    render() {
        return (
            <>
                <section className="section-contact-form" id="scroll-contact-form">
                    <div className="container">
                        <div className="contact-form">
                            <div className="contact-form-img"/>
                            <div className="contact-form-form">
                                <h2>Skontaktuj się z nami</h2>
                                <Decorator/>
                                <form>
                                    <label>Wpisz swoje imię
                                        <input type="text" name="name" placeholder="Krzysztof"/>
                                    </label>
                                    <label>Wpisz swój email
                                        <input type="email" name="email" placeholder="abc@xyz.pl"/>
                                    </label>
                                    <label>Wpisz swoją wiadomość
                                        <textarea name="text"
                                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo consequat."/>
                                    </label>
                                    <button>Wyślij</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ContactForm;