import React, { FC } from 'react';
import styles from './CompNav.module.scss';
import CompNavHeader from './CompNavHeader/CompNavHeader';
import CompNavContents from './CompNavContents/CompNavContents';
import { Box } from '@mui/material';

interface CompNavProps {
  width: number
  onClose: () => void
};

const CompNav: FC<CompNavProps> = (props:CompNavProps) => {
  const {width, onClose} = props;
  return(
    <Box className={styles.CompNav} data-testid="CompNav" sx={{width: width}}>
      <CompNavHeader closeIcon={onClose}/>
      <CompNavContents/>
    </Box>
  )
};

export default CompNav;
