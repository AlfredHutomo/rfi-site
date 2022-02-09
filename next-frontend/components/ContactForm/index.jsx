import React from 'react';
import Button from '../global/Button';
import { useState } from 'react';

import styles from './ContactForm.module.scss';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import { string } from 'prop-types';

const ContactForm = (props) => {
    const { heading, onSubmitSuccess } = props;

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            typeOfEnquiry: '',
            enquiry: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Please enter your full name.'),
            email: Yup.string()
                .email('A valid email is required.')
                .required('Please add you email.'),
            typeOfEnquiry: Yup.string().required(
                'Please select type of enquiry.'
            ),
            enquiry: Yup.string().required('Enquiry cannot be empty.'),
        }),
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
                    onSubmitSuccess(true);
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
                            className={
                                formik.touched.fullName &&
                                formik.errors.fullName
                                    ? styles['contact-form-input-error']
                                    : null
                            }
                        />
                        {formik.touched.fullName && formik.errors.fullName ? (
                            <p className={styles['contact-form-error']}>
                                {formik.errors.fullName}
                            </p>
                        ) : null}
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
                            className={
                                formik.touched.email && formik.errors.email
                                    ? styles['contact-form-input-error']
                                    : null
                            }
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className={styles['contact-form-error']}>
                                {formik.errors.email}
                            </p>
                        ) : null}
                    </div>
                    <div className={styles['contact-form-row']}>
                        <label
                            htmlFor=''
                            className={styles['contact-form-label']}
                        >
                            Type of enquiry
                        </label>
                        <select
                            {...formik.getFieldProps('typeOfEnquiry')}
                            className={
                                formik.touched.typeOfEnquiry &&
                                formik.errors.typeOfEnquiry
                                    ? styles['contact-form-input-error']
                                    : null
                            }
                        >
                            <option value='' disabled>
                                Select enquiry
                            </option>
                            <option value='programs'>programs</option>
                            <option value='sponsors'>sponsors</option>
                        </select>
                        {formik.touched.typeOfEnquiry &&
                        formik.errors.typeOfEnquiry ? (
                            <p className={styles['contact-form-error']}>
                                {formik.errors.typeOfEnquiry}
                            </p>
                        ) : null}
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
                            className={
                                formik.touched.fullName &&
                                formik.errors.fullName
                                    ? styles['contact-form-input-error']
                                    : null
                            }
                        ></textarea>
                        {formik.touched.enquiry && formik.errors.enquiry ? (
                            <p className={styles['contact-form-error']}>
                                {formik.errors.enquiry}
                            </p>
                        ) : null}
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
