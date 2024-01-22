import React, { FC } from 'react';
import styles from './CompCarouselLayout.module.scss';

interface CompCarouselLayoutProps {}

const CompCarouselLayout: FC<CompCarouselLayoutProps> = () => (
  <div className={styles.CompCarouselLayout} data-testid="CompCarouselLayout">
    CompCarouselLayout Component
  </div>
);

export default CompCarouselLayout;
