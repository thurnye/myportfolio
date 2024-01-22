import React, { FC } from 'react';
import styles from './CompRoutes.module.scss';
import { Routes, Route } from 'react-router-dom';
import Contact from '../../pages/Contact/Contact';
import NoMatch from '../../pages/NoMatch/NoMatch';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Home from '../../pages/Home/Home';

interface CompRoutesProps {}

const CompRoutes: FC<CompRoutesProps> = () => (
  <div className={styles.CompRoutes} data-testid="CompRoutes">
    <Routes>
            <Route path="*" element={<NoMatch />} />
            <Route path="/"  element={<Home/>}/>
            <Route path="/portfolio"  element={<Portfolio/>}/>
            <Route path="/contact"  element={<Contact/>}/>
          </Routes>
  </div>
);

export default CompRoutes;
