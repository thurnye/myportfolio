import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import styles from './CompFooter.module.scss';

interface CompFooterProps {}

const CompFooter: FC<CompFooterProps> = () => (
  <div className={styles.CompFooter} data-testid="CompFooter">
    <div className={styles.footerContainer}>
      <Typography
        variant="h4"
        component="div"
        fontSize={14}
        className={styles.recommendationHeader}
        >
        &copy; {new Date().getFullYear()} All Rights Reserved.
        </Typography> 
    </div>
    <div className={styles.footerContainer}>
      <Typography
        variant="h4"
        component="div"
        fontSize={14}
        className={styles.recommendationHeader}
        >
        Email: <a href="mailto:danthurnye@gmail.com" target='_blank'>danthurnye@gmail.com</a>
        </Typography> 
    </div>
  </div>
);

export default CompFooter;
