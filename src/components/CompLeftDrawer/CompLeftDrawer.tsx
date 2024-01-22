import React, { FC } from 'react';
import styles from './CompLeftDrawer.module.scss';
import InfoSection from './InfoSection/InfoSection';

interface CompLeftDrawerProps {
  
}


const CompLeftDrawer: FC<CompLeftDrawerProps> = (props: CompLeftDrawerProps ) => {
  
  return(
    <div className={styles.CompLeftDrawer} data-testid="CompLeftDrawer">
      <InfoSection />
    </div>
  )
};

export default CompLeftDrawer;
