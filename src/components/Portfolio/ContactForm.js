import React, {Component} from 'react';

import './ContactForm.scss';

import './contactFormMsg.js';

import {ReactComponent as MailSVG} from './assets/mailSVGicon.svg';
import {ReactComponent as LinkedinSVG} from './assets/linkedinSVGicon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { functions } from '../../firebase.js';
import { httpsCallable } from 'firebase/functions';
import {ReactComponent as CVIcon} from './assets/cvIcon.svg';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            contactRequestLoading: false,
            msgSent: false,
            contactRequestFail: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickLink = this.clickLink.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, email, message } = this.state
        const data = {
            name: name,
            email: email,
            message: message
        }

        this.setState({contactRequestLoading: true});

        const sendMeMail = httpsCallable(functions, 'sendMeMail');
        sendMeMail(data)
        .then(() => {
            this.setState({ 
                msgSent: true,
                contactRequestLoading: false
            })
        })
        .catch((err) => {
            console.log(err)
            this.setState({
                contactRequestLoading: false,
                contactRequestFail: true
            })
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    clickLink(src, e){
        switch(src) {
            case 'linkedIn':
                window.open("https://www.linkedin.com/in/marcus-andreas-aandahl/", "_blank");
                e.preventDefault();
                break;
            case 'mail':
                window.open("mailto:marcus.aandahl@gmail.com", "_blank");
                e.preventDefault();
                break;
            case 'github':
                window.open("https://github.com/marcusaandahl/", "_blank");
                e.preventDefault();
                break;
            default:
        }
    }

    render() {
        return (
            <div className="contactForm">
                <div className="titleForm">Get in touch by message or social media!</div>
                <div className="contactContent">
                    <form className="form" onSubmit={this.handleSubmit} >
                        <div className="input-container ic1">
                            <input id="name" className="input" type="text" placeholder=" " required onChange={this.handleChange} disabled={(this.state.contactRequestLoading || this.state.msgSent || this.state.contactRequestFail)? "disabled" : ""} />
                            <div className="cut cutName" />
                            <label htmlFor="name" className="placeholdr">Name</label>
                        </div>
                        <div className="input-container ic1">
                            <input id="email" className="input" type="email" placeholder=" " required onChange={this.handleChange} disabled={(this.state.contactRequestLoading || this.state.msgSent || this.state.contactRequestFail)? "disabled" : ""} />
                            <div className="cut cutEmail"></div>
                            <label htmlFor="email" className="placeholdr">Email</label>
                        </div>
                        <div className="input-container msgContainer ic2">
                            <textarea id="message" className="input inputMsg" type="text" placeholder=" " required onChange={this.handleChange} disabled={(this.state.contactRequestLoading || this.state.msgSent || this.state.contactRequestFail)? "disabled" : ""}/>
                            <div className="cut cutMsg"></div>
                            <label htmlFor="message" className="placeholdr">Message</ label>
                        </div>
                        <button type="text" className="submit"  disabled={(this.state.contactRequestLoading || this.state.msgSent || this.state.contactRequestFail)? "disabled" : ""} style={{backgroundColor: (this.state.contactRequestFail ? "#c92c2c" : (this.state.contactRequestLoading ? "#2757cc" : (this.state.msgSent ? "green" : "#326cf9"))), cursor: ((this.state.msgSent || this.state.contactRequestFail) ? "not-allowed" : (this.state.contactRequestLoading ? "progress" : "pointer"))}}>{this.state.contactRequestLoading ? <FontAwesomeIcon icon={faCircleNotch} spin={true} /> : (this.state.msgSent ? "sent" : (this.state.contactRequestFail ? "failed" : "submit"))}</button>
                    </form>
                    <div className="break" id="contactFormBreak" />
                    <div className="links">
                        <LinkedinSVG className="linkedInIcon" onClick={(e) => this.clickLink('linkedIn', e)} alt="LinkedIn"/>
                        <MailSVG className="mailIcon" onClick={(e) => this.clickLink('mail', e)} alt="Mail"/>
                        <a className="d-block mx-auto" target="_blank" rel="noreferrer" href="https://firebasestorage.googleapis.com/v0/b/portfolio-336519.appspot.com/o/portfolio%2Fcv%2FCV%20Light.pdf?alt=media&token=39284b36-486c-40fb-b9ee-6283a576ba17">
                            <CVIcon className="cvIcon"/>
                        </a>
                    </div>
                </div>
            </div> 
        );
    }
}

export default ContactForm;