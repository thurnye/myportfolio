import React, { FC } from 'react';
import styles from './CompNewSkillSets.module.scss';
import CompCircularProgressBar from '../../../CompCircularProgressBar/CompCircularProgressBar';
import Typography from '@mui/material/Typography';

interface CompNewSkillSetsProps {}

const CompNewSkillSets: FC<CompNewSkillSetsProps> = () => {

  const data = [
    {
      name: 'SQL',
      progress: 45
    },
    {
      name: 'Azure',
      progress: 90
    },
    {
      name: 'C#',
      progress: 35
    }
  ]

  return (
    <div className={styles.CompNewSkillSets} data-testid="CompNewSkillSets">
      <Typography className={styles.inProgressSkill}> <strong>In Progress:</strong></Typography>
      <div className={styles.newSkillContainer}>
        {data.map((el) => <div className={styles.progression}>
        <CompCircularProgressBar progress={el.progress} variant={'circular'}/>
        <Typography className={styles.skillName}> <strong>{el.name}</strong></Typography>
      </div>
        )}
        
      </div>
    </div>
  )
};

export default CompNewSkillSets;
