import React, { FC } from 'react';
import styles from './CompJumbotron.module.scss';
import { Button, CardMedia, Typography } from '@mui/material';
import CompCode from '../../CompCode/CompCode';
import { Link } from 'react-router-dom';

interface CompJumbotronProps {}

const CompJumbotron: FC<CompJumbotronProps> = () => {
  const typed: string[] = [
    "Hello Wor- No...",
    "I like to make websites.",
    "Also web applications.",
    "I do other stuff as well.",
    "... but mostly not relevant."
  ]
  return(
    <div className={styles.CompJumbotron} data-testid="CompJumbotron">
      <div className="jumbotron">
    <div className={styles.jumbotronComponent1}></div>
    <div className={styles.jumbotronComponent2}></div>
    <div className={styles.jumbotronComponent3}>
      
      <div className={styles.jumbotronContentContainer}>
        <Typography variant="h4" component="div" gutterBottom className={styles.jumbotronHead}> 
        <span>Discover my Amazing </span>

        <span>Art Space!</span>
        </Typography>
        <Typography variant="body1" component="div" gutterBottom className={styles.cardHead}> 
          <CompCode typed={typed} />
        </Typography>
        <div className={styles.contactNow}>
          
          <Link to={'/contact'}>Contact Now!</Link>
        </div>
      </div>


      {/* <div className={styles.imageContainer}>
     
      </div> */}
    </div>
    
  </div>
    </div>
)
};

export default CompJumbotron;
