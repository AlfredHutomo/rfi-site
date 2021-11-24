import { useState } from 'react';

const Subscription = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // logic for email subscription will be here
    };

    return (
        <>
            <input
                type='text'
                value={email}
                onChange={({ target }) => {
                    setEmail(target.value);
                }}
            />
            <input type='submit' value='Subscribe' onClick={handleSubmit} />
        </>
    );
};

export default Subscription;
