import React, { FC } from 'react';
import styles from './Residence.module.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import { useDataCustomHook } from '../../../../Data/data';

interface ResidenceProps {}

const Residence: FC<ResidenceProps> = () => {
  const {t} = useTranslation();
  const {sidebar: {location}} = useDataCustomHook();

  
  return(
  <Box className={styles.Residence} data-testid="Residence">
    {location.map((el) => <Box className={styles.myResidence} key={el.type}>
      <Typography> <strong>{el.type}:</strong></Typography>
      <Typography  variant="body2"  className={styles.location}>{el.place}</Typography>
    </Box>)}
  </Box>
)};

export default Residence;
