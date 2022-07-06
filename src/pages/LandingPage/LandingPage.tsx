import React,{FC, useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

import styles from './LandingPage.module.scss';




interface LandingPageProps {
}

const LandingPage: FC<LandingPageProps> = (props:LandingPageProps) => {
  

  return ( 
  <div className={styles.LandingPage} data-testid="LandingPage">
    LandingPage Component
    <Link to="/dashboard">Dashboard</Link>
    
    
  </div>
)
};

export default LandingPage;
