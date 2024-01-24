import React, { FC } from 'react';
import styles from './CompHomeContent.module.scss';
import CompServices from './CompServices/CompServices';
import CompRecommendations from './CompRecommendations/CompRecommendations';
import CompExperience from './CompExperience/CompExperience';
import CompBrands from './CompBrands/CompBrands';
import CompFooter from '../../CompFooter/CompFooter';

interface CompHomeContentProps {}

const CompHomeContent: FC<CompHomeContentProps> = () => (
  <div className={styles.CompHomeContent} data-testid="CompHomeContent">
    <CompExperience/>
    <CompServices/>
    <CompRecommendations/>
    <CompBrands/>
    {/* <CompFooter/> */}
  </div>
);

export default CompHomeContent;
