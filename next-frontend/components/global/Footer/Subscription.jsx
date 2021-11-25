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
        <div className={styles.subscription}>
            <h5 className={styles.h5}>Stay up to date</h5>
            <p>Sign up for our newsletter to stay informed on RFI updates.</p>
            {submitted ? (
                <h1>Sumbmitted</h1>
            ) : (
                <>
                    <div>
                        <input
                            className={styles.input}
                            type='text'
                            value={email}
                            onChange={({ target }) => {
                                setEmail(target.value);
                            }}
                            placeholder='Your email address'
                        />
                    </div>
                    <button className={styles.button} onClick={handleSubmit}>
                        Subscribe
                    </button>
                </>
            )}
        </div>
    );
};

export default Subscription;
