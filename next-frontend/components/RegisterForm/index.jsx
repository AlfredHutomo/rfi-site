import React from 'react';
import PropTypes from 'prop-types';
import Button from '../global/Button';
import { useState } from 'react';

import Link from 'next/link';

import styles from './RegisterForm.module.scss';

const RegisterForm = (props) => {
    const { heading } = props;

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic for form submission

        setSubmitted(true);
    };

    return (
        <div className={styles['contact-form-wrapper']}>
            <h1 className={'h1' + ' ' + styles['contact-form-heading']}>
                Register today and get <span>world cup</span> ready!
            </h1>

            <div className={styles['contact-form-misc']}>
                Already a member?{' '}
                <Link href='#' passHref={true}>
                    Login here.
                </Link>
            </div>

            <div className={'form-wrapper ' + styles['contact-form']}>
                <fieldset className='form-section'>
                    <legend className='form-section-heading'>
                        Player Details
                    </legend>

                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                First Name *
                            </label>
                            <input
                                type='text'
                                className='form-input-text'
                                value=''
                                placeholder='First Name'
                            />
                        </div>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Last Name *
                            </label>
                            <input
                                type='text'
                                className='form-input-text'
                                value=''
                                placeholder='Last Name'
                            />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Date of birth *
                            </label>
                            <input
                                type='text'
                                className='form-input-text'
                                value=''
                                placeholder='First Name'
                            />
                        </div>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Current Club *
                            </label>
                            <input
                                type='text'
                                className='form-input-text'
                                value=''
                                placeholder='Last Name'
                            />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Gender *
                            </label>

                            <div className='form-radio-group'>
                                <div>
                                    <input
                                        type='radio'
                                        name='gender'
                                        id='g_male'
                                        className='form-radio'
                                        value=''
                                    />
                                    <label
                                        htmlFor='g_male'
                                        className='form-radio-label'
                                    >
                                        Male
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        name='gender'
                                        id='g_female'
                                        className='form-radio'
                                        value=''
                                    />
                                    <label
                                        htmlFor='g_female'
                                        className='form-radio-label'
                                    >
                                        Female
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        name='gender'
                                        id='g_unspecified'
                                        className='form-radio'
                                        value=''
                                    />
                                    <label
                                        htmlFor='g_unspecified'
                                        className='form-radio-label'
                                    >
                                        Unspecified
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Program *
                            </label>

                            <div className='form-custom-radio-group'>
                                <div>
                                    <input
                                        type='radio'
                                        name='program'
                                        id='p_development'
                                        className='form-custom-radio'
                                        value=''
                                    />
                                    <label
                                        htmlFor='p_development'
                                        className='form-custom-radio-label'
                                    >
                                        Development
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        name='program'
                                        id='p_initiation'
                                        className='form-custom-radio'
                                        value=''
                                    />
                                    <label
                                        htmlFor='p_initiation'
                                        className='form-custom-radio-label'
                                    >
                                        Initiation
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset className='form-section'>
                    <legend className='form-section-heading'>
                        Guardians Details
                    </legend>

                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                First Name *
                            </label>
                            <input
                                type='text'
                                className='form-input-text'
                                value=''
                                placeholder='First Name'
                            />
                        </div>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Last Name *
                            </label>
                            <input
                                type='text'
                                className='form-input-text'
                                value=''
                                placeholder='Last Name'
                            />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Email *
                            </label>
                            <input
                                type='text'
                                className='form-input-text'
                                value=''
                                placeholder='First Name'
                            />
                        </div>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Phone Number *
                            </label>
                            <input
                                type='text'
                                className='form-input-text'
                                value=''
                                placeholder='Last Name'
                            />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Relationship to player *
                            </label>
                            <input
                                type='text'
                                className='form-input-text'
                                value=''
                                placeholder='First Name'
                            />
                        </div>
                        <div className='form-col'>&nbsp;</div>
                    </div>
                </fieldset>

                <fieldset className='form-section'>
                    <legend className='form-section-heading'>
                        Additional Comments
                    </legend>

                    <div className='form-row'>
                        <div className='form-col'>
                            <label htmlFor='' className='form-label'>
                                Message (Optional)
                            </label>
                            <textarea className='form-textarea'></textarea>
                        </div>
                    </div>
                </fieldset>

                <div className='form-row'>
                    <Button
                        variant='1'
                        className={styles['']}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};

export default RegisterForm;
