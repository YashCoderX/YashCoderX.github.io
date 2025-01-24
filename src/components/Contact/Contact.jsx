import React, { useState }  from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_w36y7zl', 'template_jwex1sn', e.target, 'PI3wNjAVdZehwLxye')
            .then((result) => {
                setStatus('Message sent successfully!');
            }, (error) => {
                setStatus('Failed to send message.');
            });
    };

    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            <div className='contact-form-container'>
                <form onSubmit={sendEmail}>

                    {/* EmailID Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='user_email'
                        className='input-box email-input'
                    />

                    {/* Email body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit Button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
                {status && <p>{status}</p>}
            </div>

            <div className='social-icons-container'>
                <a className='social-icon' href='https://github.com/YashCoderX'>
                    <img src={github} alt='github' />
                </a>
                <a
                    className='social-icon'
                    href='https://linkedin.com/in/yashagarwal1611/'
                >
                    <img src={linkedin} alt='linkedin' />
                </a>
                <a
                    className='social-icon'
                    href='https://instagram.com/_yashagarwal.16'
                >
                    <img src={instagram} alt='instagram' />
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                link='about me.'
                toAddress='/about'
            />
            <div className='vector-frame'>
                <img className='about-vector' src={contactVector} alt='' />
            </div>
        </div>
    );
};

export default Contact;
