import React, { FC } from 'react';
import styles from './CompNewSkillSets.module.scss';
import CompCircularProgressBar from '../../../CompCircularProgressBar/CompCircularProgressBar';
import Typography from '@mui/material/Typography';
import { useDataCustomHook } from '../../../../Data/data';
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface CompNewSkillSetsProps {}

const CompNewSkillSets: FC<CompNewSkillSetsProps> = () => {

  const {t} = useTranslation();
    const {sidebar: {skillsSet}} = useDataCustomHook();


  return (
    <div className={styles.CompNewSkillSets} data-testid="CompNewSkillSets">
      <Typography className={styles.inProgressSkill}> <strong>{t('inProgress')}:</strong></Typography>
      
      <Box sx={{p: 3, mb: 3}}>
        <Grid container spacing={{ xs: 2, md: 3 }} >
          {skillsSet.map((el, i) => el.isInProgress && (
            <Grid item xs={4} key={el.name} >
              <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <CompCircularProgressBar progress={el.percentage} variant={'circular'}/>
                <Typography variant="body2" sx={{fontSize: 12}}>{el.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
};

export default CompNewSkillSets;
