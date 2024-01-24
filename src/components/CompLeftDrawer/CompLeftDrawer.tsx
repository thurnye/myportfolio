import React, { FC } from 'react';
import styles from './CompLeftDrawer.module.scss';
import InfoSection from './InfoSection/InfoSection';
import Info from '../CompSiteLayout/Info/Info';

interface CompLeftDrawerProps {
  
}


const CompLeftDrawer: FC<CompLeftDrawerProps> = (props: CompLeftDrawerProps ) => {
  
  return(
    <div className={styles.CompLeftDrawer} data-testid="CompLeftDrawer">
      {/* <InfoSection /> */}
      <Info/>
    </div>
  )
};

export default CompLeftDrawer;
