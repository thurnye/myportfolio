import React, { FC } from 'react';
import styles from './Residence.module.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ResidenceProps {}

const Residence: FC<ResidenceProps> = () => (
  <Box className={styles.Residence} data-testid="Residence">
    <Box className={styles.myResidence}>
      <Typography> <strong>Residence:</strong></Typography>
      <Typography  variant="body2"  className={styles.location}>Canada</Typography>
    </Box>
    <Box className={styles.myResidence}>
      <Typography> <strong>City:</strong></Typography>
      <Typography  variant="body2"  className={styles.location}>Toronto</Typography>
    </Box>
  </Box>
);

export default Residence;
