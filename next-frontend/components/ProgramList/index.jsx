import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './ProgramList.module.scss';

import ProgramCard from '../ProgramCard';

import Button from '../global/Button';
import SectionWrapper from '../global/SectionWrapper';

const ProgramList = (props) => {
    const { sectionData, wrapperOptions } = props;

    const programData = sectionData.programs.data;

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['program-list-wrapper']}>
                {programData != null && programData.length != 0 ? (
                    <ul className={styles['program-list']}>
                        {programData.map((program, i) => (
                            <li key={i}>
                                <ProgramCard
                                    image={program.attributes.coverImage}
                                    name={program.attributes.program_name}
                                    tags={[
                                        program.attributes.age_range,
                                        program.attributes.level,
                                    ]}
                                    slug={program.attributes.slug}
                                >
                                    {program.attributes.description}
                                </ProgramCard>
                            </li>
                        ))}
                    </ul>
                ) : (
                    ''
                )}
                <div className={styles['program-list-cta']}>
                    <Button variant='2' to='/programs'>
                        See all programs
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

ProgramList.propTypes = {};

export default ProgramList;
