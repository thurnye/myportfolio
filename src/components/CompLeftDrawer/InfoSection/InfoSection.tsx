import React, { FC } from 'react';
import About from './About/About';
import Connection from '../../Connection/Connection';
import Stacks from '../Stacks/Stacks';
import styles from './InfoSection.module.scss';

interface InfoSectionProps {
}

const InfoSection: FC<InfoSectionProps> = (props: InfoSectionProps) => (
  <div className={styles.InfoSection} data-testid="InfoSection">
    <About/>
    <div className={styles.stackContentsContainer}>
    <Stacks/>
    </div>
    <div className={styles.footer}>
      <Connection/>
    </div>
  </div>
);

export default InfoSection;
