import React, { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './CompSkills.module.scss';

interface CompSkillsProps {}

const CompSkills: FC<CompSkillsProps> = () => (
  <div className={styles.CompSkills} data-testid="CompSkills">
    <Box className={styles.coding}>
        <Box>
        <Typography style={{textAlign: "left"}}> <strong>Language Skill</strong></Typography>
            <Box className={styles.stackContainer}>
                <Box className={styles.iconContainer} style={{margin: '0'}}>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><FontAwesomeIcon icon={['fab', 'html5']} /></span>
                        <span className={styles.skillName}>HTML5</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><FontAwesomeIcon icon={['fab', 'css3']} /></span>
                        <span className={styles.skillName}>CSS3</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><FontAwesomeIcon icon={['fab', 'bootstrap']} /></span>
                        <span className={styles.skillName}>Bootstrap</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><FontAwesomeIcon icon={['fab', 'sass']} /></span>
                        <span className={styles.skillName}>Sass</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><FontAwesomeIcon icon={['fab', 'js']} /></span>
                        <span className={styles.skillName}>JavaScript</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><i className="devicon-jquery-plain"></i></span>
                        <span className={styles.skillName}>JQuery</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><FontAwesomeIcon icon={['fab', 'react']} /></span>
                        <span className={styles.skillName}>React</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><i className="devicon-redux-original"></i></span>
                        <span className={styles.skillName}>Redux</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><FontAwesomeIcon icon={['fab', 'node-js']} /></span>
                        <span className={styles.skillName}>NodeJs</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><i className="devicon-mongodb-plain"></i></span>
                        <span className={styles.skillName}>MongoDB</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><i className="devicon-mysql-plain"></i></span>
                        <span className={styles.skillName}>MySQL</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><FontAwesomeIcon icon={['fab', 'git-alt']} /></span>
                        <span className={styles.skillName}>Git</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><FontAwesomeIcon icon={['fab', 'python']} /></span>
                        <span className={styles.skillName}>Python 3</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><i className="devicon-django-plain"></i></span>
                        <span className={styles.skillName}>Django</span>
                    </Box>
                    <Box className={styles.lang}>
                        <span className={styles.skill}><i className="devicon-azure-plain"></i></span>
                        <span className={styles.skillName}>Microsoft Azure</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  </div>
);

export default CompSkills;
