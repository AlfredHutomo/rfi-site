import styles from './footer.module.scss';
import { useState } from 'react';
import Button from '../Button';

const Subscription = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || email.length === 0) return;
        // logic for email subscription will be here
        console.log('Subscribed');
        setSubmitted(true);
    };

    return (
        <div className={styles['page-footer-subscription']}>
            <h5 className={'h5 ' + styles['page-footer-subscription-heading']}>Stay up to date</h5>

            <div className={styles['page-footer-subscription-content']}>
                Sign up for our newsletter to stay informed on RFI updates.
            </div>

            <div className={styles['page-footer-subscription-form']}>
                {submitted ? (
                    <h1>Sumbmitted</h1>
                ) : (
                    <>
                        <div>
                            <input
                                //className={styles.input}
                                type='text'
                                value={email}
                                onChange={({ target }) => {
                                    setEmail(target.value);
                                }}
                                placeholder='Your email address'
                            />
                        </div>
                        <Button variant="5" className={styles['page-footer-subscription-form-btn']} onClick={handleSubmit}>
                            Subscribe
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Subscription;
