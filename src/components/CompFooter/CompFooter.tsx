import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import styles from './CompFooter.module.scss';
import { useDataCustomHook } from '../../Data/data';

interface CompFooterProps {}

const CompFooter: FC<CompFooterProps> = () => {
  const {footer: {reserve, email}} = useDataCustomHook();
  
  return(
  <div className={styles.CompFooter} data-testid="CompFooter">
    <div className={styles.footerContainer}>
      <Typography
        variant="h4"
        component="div"
        fontSize={14}
        className={styles.recommendationHeader}
        >
          &copy; {reserve}
        {/* &copy; {new Date().getFullYear()} All Rights Reserved. */}
        </Typography> 
    </div>
    <div className={styles.footerContainer}>
      <Typography
        variant="h4"
        component="div"
        fontSize={14}
        className={styles.recommendationHeader}
        >
        {email.type}: <a href={email.link} target='_blank'>{email.email}</a>
        </Typography> 
    </div>
  </div>
)};

export default CompFooter;
