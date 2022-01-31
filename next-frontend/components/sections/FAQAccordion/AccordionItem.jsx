import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './FAQAccordion.module.scss';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import ReactMarkdown from 'react-markdown';

const AccordionItem = (props) => {
    const {
        question,
    } = props;

    const [isActive, setAccordionState] = useState(false);

    /*
    const toggleAccordion = (event) => {
        setAccordionState((state) => !state);
    };
    */

    return (
        <div className={styles['faq-accordion-list-item']}>
            <div
                className={ styles['faq-accordion-list-item-heading'] }
                onClick={() => setAccordionState(!isActive)}
            >
                <h5>{props.question}</h5>
                <div>
                    { isActive ? <ExpandLessIcon sx={{ fontSize: 20 }} /> : <ExpandMoreIcon sx={{ fontSize: 20 }} /> }
                </div>
            </div>

            <div className={`${ styles['faq-accordion-list-item-content'] } ${isActive ? styles['active'] : ''}`} >
                <ReactMarkdown>{props.children}</ReactMarkdown>
            </div>
        </div>
    );
};

AccordionItem.propTypes = {};

export default AccordionItem;
