import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './ProgramList.module.scss';

import ProgramCard from '../ProgramCard';

import Button from '../global/Button';

const ProgramList = (props) => {

    const {
        programData
    } = props;

    return (
        <div className={styles['program-list-wrapper']}>
            {
                (props.programData.length !=0 || props.programData != null) ? (
                <ul className={styles['program-list']}>
                {
                    props.programData.map((program, i) => (
                        <li>
                            <ProgramCard
                                //image={Image}
                                name={program.name}
                                tags={program.tags}
                                cta={program.cta}
                                link={program.link}
                            >
                                {program.description}
                            </ProgramCard>
                        </li>
                    ))
                }
                </ul>
                ) : ''

            }
            <div className={styles['program-list-cta']}>
                <Button
                    variant="2"
                    to="#"
                >
                    See all programs
                </Button>
            </div>
        </div>
    );
}


ProgramList.propTypes = {}

export default ProgramList;

