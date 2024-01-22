import React, { FC } from 'react';
import Residence from './Residence/Residence';
import Box from '@mui/material/Box';
import styles from './Stacks.module.scss';
import CompDivider from '../../CompDivider/CompDivider';
import CompNewSkillSets from './CompNewSkillSets/CompNewSkillSets';
import CompSkills from './CompSkills/CompSkills';

interface StacksProps {}

const Stacks: FC<StacksProps> = () => {

  
  return(
  <Box className={styles.Stacks} data-testid="Stacks">
    <Residence/>
    <CompDivider/>
    <CompSkills/>
    <CompDivider/>
    <CompNewSkillSets/>
  </Box>
);
}
export default Stacks;
