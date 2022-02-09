import React from 'react';
import Button from '../global/Button';
import { useState } from 'react';

import styles from './ContactForm.module.scss';
import { useFormik } from 'formik';

const ContactForm = (props) => {
    const { heading } = props;

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            typeOfEnquiry: '',
            enquiry: '',
        },
        onSubmit: (values) => {
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            }).then((res) => {
                console.log('Response received');
                if (res.status === 200) {
                    console.log('Response succeeded!');
                }
            });
        },
    });

    return (
        <div className={styles['contact-form-wrapper']}>
            {heading != null ? (
                <h3 className={'h3' + ' ' + styles['contact-form-heading']}>
                    {heading}
                </h3>
            ) : (
                ''
            )}
            <form onSubmit={formik.handleSubmit}>
                <div className={styles['contact-form']}>
                    <div className={styles['contact-form-row']}>
                        <label
                            htmlFor=''
                            className={styles['contact-form-label']}
                        >
                            Full Name
                        </label>
                        <input
                            type='text'
                            placeholder='Full Name'
                            {...formik.getFieldProps('fullName')}
                        />
                    </div>
                    <div className={styles['contact-form-row']}>
                        <label
                            htmlFor=''
                            className={styles['contact-form-label']}
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            placeholder='Email'
                            {...formik.getFieldProps('email')}
                        />
                    </div>
                    <div className={styles['contact-form-row']}>
                        <label
                            htmlFor=''
                            className={styles['contact-form-label']}
                        >
                            Type of enquiry
                        </label>
                        <select {...formik.getFieldProps('typeOfEnquiry')}>
                            <option value='' disabled>
                                Select enquiry
                            </option>
                            <option value='programs'>programs</option>
                            <option value='sponsors'>sponsors</option>
                        </select>
                    </div>
                    <div className={styles['contact-form-row']}>
                        <label
                            htmlFor=''
                            className={styles['contact-form-label']}
                        >
                            Enquiry
                        </label>
                        <textarea
                            {...formik.getFieldProps('enquiry')}
                        ></textarea>
                    </div>
                    <div className={styles['contact-form-row']}>
                        <Button
                            variant='1'
                            className={styles['']}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
