import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './FAQAccordion.module.scss';


const FAQAccordion = (props) => {

    const {
        faqlists
    } = props;

    return (
        <div className={styles['faq-accordion-wrapper']}>
            <div className={styles['faq-accordion-side']}>
                <h2 className="h2">Frequently asked questions</h2>
                <svg width="267" height="293" viewBox="0 0 267 293" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M169.077 73.2113C171.639 62.1085 173.939 50.9694 177.743 40.2113C181.88 28.5131 184.568 12.0062 192.41 2.10018C193.319 0.951891 198.107 19.7281 198.632 21.7668C202.634 37.2929 206.245 52.9244 210.299 68.4335C211.289 72.2208 212.065 79.4065 214.854 82.5446C217.571 85.6005 212.859 74.5782 211.243 70.8224C203.396 52.5825 192.933 35.5439 185.077 17.2113" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M190.077 21.2112C188.722 35.607 188.077 49.9741 188.077 64.4334C188.077 102.102 185.873 137.194 170.243 172.156C158.479 198.47 133.967 220.875 106.077 228.767C90.3711 233.211 73.1944 233.002 57.0767 231.211" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M36.0769 220.211C38.7792 223.851 51.5157 244.992 53.0769 244.211" stroke="white" strokeWidth="3" strokeLineCap="round"/>
                <path d="M58.0762 218.211C47.3644 229.22 35.5762 240.461 27.0762 253.211" stroke="white" strokeWidth="3" strokeLineCap="round"/>
                </svg>
            </div>
            {
                (props.faqlists != null && props.faqlists.length != 0) ? (
                <ul className={styles['faq-accordion-list']}>
                {
                    props.faqlists.map((faq, i) => (
                        <li className={styles['faq-accordion-list-item']}>
                            <div className={styles['faq-accordion-list-item-heading']}>
                                <h5>
                                    {faq.question}
                                </h5>
                            </div>
                            <div className={styles['faq-accordion-list-item-content']}>
                                {faq.answer}
                            </div>
                        </li>
                    ))
                }
                </ul>
                ) : ''
            }
        </div>
    );
}


FAQAccordion.propTypes = {}

export default FAQAccordion;

