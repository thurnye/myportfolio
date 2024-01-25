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
    const phLayouts = [t('portfolio_layout_carousel'), t('portfolio_layout_masonry')];
    switch (true) {
      case viewportWidth > 1200:
        setPhotoLayout([...phLayouts,t('portfolio_layout_3columns'), t('portfolio_layout_4columns')])
        break;
      case viewportWidth < 1000:
        setPhotoLayout([...phLayouts,t('portfolio_layout_1column'), t('portfolio_layout_2columns')])
        break;
      case viewportWidth < 1024:
        setPhotoLayout([...phLayouts,t('portfolio_layout_1column'), t('portfolio_layout_2columns')])
        break;
      case viewportWidth < 1200:
        setPhotoLayout([...phLayouts,t('portfolio_layout_2columns'), t('portfolio_layout_3columns')])
        break;
    
      default:
        break;
    }
  }, [viewportWidth, t])

  return photoLayout;
};


