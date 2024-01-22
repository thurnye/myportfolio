import React, { FC } from 'react';
import styles from './CompPortfolioLayouts.module.scss';
import CompGridLayout from './CompGridLayout/CompGridLayout';
import CompMasonryLayout from './CompMasonryLayout/CompMasonryLayout';
import CompThumbnailLayout from './CompThumbnailLayout/CompThumbnailLayout';
import CompCarouselLayout from './CompCarouselLayout/CompCarouselLayout';

interface CompPortfolioLayoutsProps {
  layout: string
}

const CompPortfolioLayouts: FC<CompPortfolioLayoutsProps> = ({ layout }) => {

  const getDefinedLayout = (): React.ReactNode => {
    let num = 0;
    if(layout.includes('Column')){
      num = parseInt(layout[0])
    }
    switch (layout) {
      case 'Masonry':
        return <CompMasonryLayout  type={'Masonry'}/>;
      case 'Thumbnail':
        return <CompThumbnailLayout />;
      case 'Mosaic':
        return <CompMasonryLayout  type={'Mosaic'}/>;
      case 'Gallery':
        return <CompThumbnailLayout type={'Gallery'}/>;
      case 'Carousel':
        return <CompCarouselLayout />;
      default:
        return <CompGridLayout num={num}/>;
    }
  }
  
  return (
    <div className={styles.CompPortfolioLayouts} data-testid="CompPortfolioLayouts">
      {getDefinedLayout()}
    </div>
  );
};

export default CompPortfolioLayouts;
