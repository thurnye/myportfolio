import React, { FC } from 'react';
import styles from './CompHomelayout.module.scss';
import CompJumbotron from './CompJumbotron/CompJumbotron';
import CompHomeContent from './CompHomeContent/CompHomeContent';
import Box from '@mui/material/Box';
import CompFooter from '../CompFooter/CompFooter';

interface CompHomelayoutProps {}

const CompHomelayout: FC<CompHomelayoutProps> = () => (
  <div className={styles.CompHomelayout} data-testid="CompHomelayout">
    <CompJumbotron/>
      <Box sx={{p: 3}}>
        <CompHomeContent/>
      </Box>
    {/* <CompFooter/> */}
  </div>
);

export default CompHomelayout;
