import React from 'react';
import PropTypes from 'prop-types';
import Button from '../global/Button';
import { useState } from 'react';

import styles from './ContactForm.module.scss';


const ContactForm = (props) => {

    const {
        heading,
    } = props;

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic for form submission

        setSubmitted(true);
    };


    return (
        <div className={styles['contact-form-wrapper']}>
            {
                (props.heading != null) ?
                <h3 className={'h3'+ ' ' + styles['contact-form-heading']}>
                    {props.heading}
                </h3> : ''
            }
            <div className={styles['contact-form']}>
                <div className={styles['contact-form-row']}>
                    <label for="" className={styles['contact-form-label']}>Full Name</label>
                    <input type="text" value="" placeholder="Full Name" />
                </div>
                <div className={styles['contact-form-row']}>
                    <label for="" className={styles['contact-form-label']}>Email</label>
                    <input type="email" value="" placeholder="Email" />
                </div>
                <div className={styles['contact-form-row']}>
                    <label for="" className={styles['contact-form-label']}>Type of enquiry</label>
                    <select>
                        <option value="">Select enquiry</option>
                    </select>
                </div>
                <div className={styles['contact-form-row']}>
                    <label for="" className={styles['contact-form-label']}>Enquiry</label>
                    <textarea></textarea>
                </div>
                <div className={styles['contact-form-row']}>
                    <Button variant="1" className={styles['']} onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

ContactForm.propTypes = {
}

ContactForm.defaultProps = {
}

export default ContactForm;

