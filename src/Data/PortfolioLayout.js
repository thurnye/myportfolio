import React, {  useState , useEffect} from 'react';



export const PortfolioLayout = (t) => {
  const [photoLayout, setPhotoLayout] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setViewportWidth(window.innerWidth);
    };
    // Add event listener to update viewport width on window resize
    window.addEventListener('resize', handleWindowResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const phLayouts = [{
      label: t('portfolio_layout_masonry'),
      name: 'Masonry'
  }];
    switch (true) {
      case viewportWidth > 1200:
        setPhotoLayout([
          ...phLayouts,
          {label: t('portfolio_layout_3columns'), name: 'Column', num: 3}, 
          {label: t('portfolio_layout_4columns'), name: 'Column', num : 1}
        ])
        break;
      case viewportWidth < 1000:
        setPhotoLayout([
          ...phLayouts,
          {label: t('portfolio_layout_1column'), name: 'Column', num: 1},
          {label: t('portfolio_layout_2columns'), name: 'Column', num: 2},
          ])
        break;
      case viewportWidth < 1200:
        setPhotoLayout([
          ...phLayouts,
          {label: t('portfolio_layout_2columns'), name: 'Column', num: 2},
          {label: t('portfolio_layout_3columns'), name: 'Column', num: 3}
        ])
        break;
    
      default:
        break;
    }
  }, [viewportWidth, t])

  return photoLayout;
};


