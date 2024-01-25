import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './CompSkills.module.scss';
import { useDataCustomHook } from '../../../../Data/data';
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';


interface CompSkillsProps {}

const CompSkills: FC<CompSkillsProps> = () => {
    const {t} = useTranslation();
    const {sidebar: {skillsSet}} = useDataCustomHook();
    
    return(
    <div className={styles.CompSkills} data-testid="CompSkills">
        <Box>
            <Box>
                <Typography style={{textAlign: "left"}}> <strong>{t('languageSkills')}</strong></Typography>
                <Box sx={{p: 3, mb: 3}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} >
                    {skillsSet.map((el, i) =>  (
                        <Grid item xs={4} key={el.name} >
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Typography variant="body2" sx={{fontSize: 22, color: '#FFC107'}}>{el.icon}</Typography>
                            <Typography variant="body2" sx={{fontSize: 12}}>{el.name}</Typography>
                        </Box>
                        </Grid>
                    ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    </div>
)};

export default CompSkills;
