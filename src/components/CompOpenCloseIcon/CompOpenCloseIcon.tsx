import React, { FC } from 'react';
import styles from './CompOpenCloseIcon.module.scss';

interface CompOpenCloseIconProps {
  open: boolean;
}

const CompOpenCloseIcon: FC<CompOpenCloseIconProps> = (props : CompOpenCloseIconProps) => {
  const {open} = props;

  return(
    <div className={styles.CompOpenCloseIcon} data-testid="CompOpenCloseIcon">
      <div className={styles.navToggle}>
        <span className={`${styles.bar} ${ open ? styles.crossed : ''}`}></span>
        <span className={`${styles.bar} ${ open ? styles.crossed : ''}`}></span>
        <span className={`${styles.bar} ${ open ? styles.crossed : ''}`}></span>
      </div>
    </div>
  )
};

export default CompOpenCloseIcon;
