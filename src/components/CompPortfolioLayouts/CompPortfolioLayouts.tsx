import React, { FC } from 'react';
import styles from './CompPortfolioLayouts.module.scss';
// import CompGridLayout from './CompGridLayout/CompGridLayout';
// import CompMasonryLayout from './CompMasonryLayout/CompMasonryLayout';
// import CompThumbnailLayout from './CompThumbnailLayout/CompThumbnailLayout';
// import CompCarouselLayout from './CompCarouselLayout/CompCarouselLayout';
import CompGalleryLayout from './CompGalleryLayout/CompGalleryLayout';
import { useTranslation } from "react-i18next";
import { LayoutProps } from '../../pages/Portfolio/Portfolio';


interface CompPortfolioLayoutsProps {
  layout: LayoutProps
}

const CompPortfolioLayouts: FC<CompPortfolioLayoutsProps> = ({ layout }) => {
  const { t } = useTranslation();
  let num = 0;
    // if(layout.includes(t('portfolio_layout_column'))){
    //   num = parseInt(layout[0])
    // }

  // const getDefinedLayout = (): React.ReactNode => {
  //   let num = 0;
  //   if(layout.includes(t('portfolio_layout_column'))){
  //     num = parseInt(layout[0])
  //   }
  //   switch (layout) {
  //     case t('portfolio_layout_masonry'):
  //       return <CompMasonryLayout  type={'Masonry'}/>;
  //     case t('portfolio_layout_thumbnail'):
  //       return <CompThumbnailLayout />;
  //     case t('portfolio_layout_gallery'):
  //       // return <CompThumbnailLayout type={'Gallery'}/>;
  //       return <CompGalleryLayout layout='' num={0}/>
  //     // case t('portfolio_layout_carousel'):
  //     //   return <CompCarouselLayout />;
  //     default:
  //       // return <CompGridLayout num={num}/>;
  //       return  <CompGalleryLayout layout='' num={0}/>;
  //   }
  // }
  
  return (
    <div className={styles.CompPortfolioLayouts} data-testid="CompPortfolioLayouts">
      {/* {getDefinedLayout()} */}
      {/* <CompGalleryLayout layout={''} num={0}/> */}
    </div>
  );
};

export default CompPortfolioLayouts;
