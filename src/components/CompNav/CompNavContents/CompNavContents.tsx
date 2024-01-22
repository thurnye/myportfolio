import React, { FC } from 'react';
import { Link } from "react-router-dom";
import styles from './CompNavContents.module.scss';
import CompDivider from '../../CompDivider/CompDivider';
import { useAppContext } from '../../../Context/context';

interface CompNavContentsProps {}

const CompNavContents: FC<CompNavContentsProps> = () => {
  const {activeNav, setActiveNav, setOpenRightNav} = useAppContext()
  
  const navRoutes = [
    {
    name: 'HOME',
    path: '/'
  },
    {
    name: 'PORTFOLIO',
    path: '/portfolio'
  },
    {
    name: 'CONTACT',
    path: '/contact'
  },
];

const handleClick = (el: string) => {
  setActiveNav(el);
  setOpenRightNav(false)
};

  return (
    <div className={styles.CompNavContents} data-testid="CompNavContents">
      <div className={styles.container}>
        {navRoutes.map((el) => <div className={`
        ${activeNav === el.name ? styles.active :''}
        ${styles.navigationContainer}
        `} onClick={() => handleClick(el.name)}> 
          <Link to={el.path}>{el.name}</Link>
        </div>)}
      <CompDivider/>
      </div>
    </div>
  )
};

export default CompNavContents;
