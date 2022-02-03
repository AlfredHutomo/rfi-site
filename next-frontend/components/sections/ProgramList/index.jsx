import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './ProgramList.module.scss';

import ProgramCard from '../../ProgramCard';

import Button from '../../global/Button';
import SectionWrapper from '../../global/SectionWrapper';

const ProgramList = ({ sectionData }) => {
    const programData = sectionData.programs.data;

    const generateTags = (tagsData) => {
        const tags = tagsData.data.map((tags) => tags.attributes.name);

        return tags;
    };

    return (
        <SectionWrapper options={sectionData.wrapperOptions}>
            <div className={styles['program-list-wrapper']}>
                {programData != null && programData.length != 0 ? (
                    <ul className={styles['program-list']}>
                        {programData.map((program, i) => (
                            <li key={i}>
                                <ProgramCard
                                    image={program.attributes.listingThumbnail}
                                    name={program.attributes.name}
                                    tags={generateTags(program.attributes.tags)}
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
                {/* <div className={styles['program-list-cta']}>
                    <Button variant='2' to='/programs'>
                        See all programs
                    </Button>
                </div> */}
            </div>
        </SectionWrapper>
    );
};

ProgramList.propTypes = {};

export default ProgramList;
