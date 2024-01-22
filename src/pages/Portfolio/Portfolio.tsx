import React, { FC, useState , useEffect, useMemo} from 'react';
import Box from '@mui/material/Box';
import styles from './Portfolio.module.scss';
import { Typography } from '@mui/material';
import CompPortfolioGrid from '../../components/CompPortfolioGrid/CompPortfolioGrid';
import CompPortfolioLayouts from '../../components/CompPortfolioLayouts/CompPortfolioLayouts';
// import CompFooter from '../../components/CompFooter/CompFooter';

interface PortfolioProps {}
export interface PFLinks {
  name: string;
  layouts: string[];
  label: string;
};

const Portfolio: FC<PortfolioProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [tab, setTab] = useState<string>('ALL')
  const [structure, setStructure] = useState<string>('');
  const [layout, setLayout] = useState<string>('Grid');
  const [photoLayout, setPhotoLayout] = useState<string[]>([]);

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
    const phLayouts = ['Masonry', 'Carousel'];
    switch (true) {
      case viewportWidth > 1200:
        setPhotoLayout([...phLayouts,'3 Columns', '4 Columns'])
        break;
      case viewportWidth < 1000:
        setPhotoLayout([...phLayouts,'1 Column', '2 Columns'])
        break;
      case viewportWidth < 1024:
        setPhotoLayout([...phLayouts,'1 Column', '2 Columns'])
        break;
      case viewportWidth < 1200:
        setPhotoLayout([...phLayouts,'2 Columns', '3 Columns'])
        break;
    
      default:
        break;
    }
  }, [viewportWidth])





  const PortFolioLinks:PFLinks[] = useMemo(() => [
    {
      name: 'ALL',
      layouts: ['Grid'],
      label: 'all'
    },
    {
      name: 'WEB DESIGNS',
      layouts: ['Column','Thumbnail'],
      label: 'web'
    },
    {
      name: 'UI ELEMENTS',
      layouts: ['Gallery', 'Mosaic'],
      label: 'ui'
    },
    {
      name: 'PHOTOGRAPHY',
      layouts: photoLayout,
      label: 'photo'
    }
  ], [photoLayout]);

  useEffect(() => {
    if(structure){
      const label = structure.split('_')[0];
      const design = structure.split('_')[1];
      setLayout(design);
      setActiveTab(label);
      const tab = PortFolioLinks.find(el => el.label === label);
      if(tab){
        setTab(tab.name)
      }
    }
  },[structure, PortFolioLinks]);
  
  const handleActiveTab = (label: string) => {
    if(label) {
      setActiveTab(label);
      const tab = PortFolioLinks.find(el => el.label === label);
      if(tab){
        setLayout(tab.layouts[0])
      }
    }

  };

  return (
  <div className={styles.Portfolio} data-testid="Portfolio">
    <Box sx={{mb: 3}} className={styles.title}>
      <Typography>Portfolio</Typography>
    </Box>
    <Box className={styles.portfolioHeader}>
      <Box>
        <div className={styles.portfolioLinkContainer}>
          {PortFolioLinks.map((el, i) => <React.Fragment key={el.name} >
            <div 
              className={`${styles.portfolioLinkItem} ${activeTab === el.label ? styles.portfolioActiveTab : ''}`}
              onClick={() => handleActiveTab(el.label)
              }
              >
                <Typography>{el.name}</Typography>
              </div>
            </React.Fragment>
          )}
          
        </div>
        <Box className={styles.mobilePFItem}>
          <Typography sx={{mr: 1}}>
            {tab} 
          </Typography> 
          <Typography sx={{fontSize: '10px'}}>
            {layout}
          </Typography>
        </Box>
      </Box>
      <Box>
        <CompPortfolioGrid 
        setStructure={setStructure}
        nav={PortFolioLinks}
        />
      </Box>
    </Box>

    <Box sx={{mt: 2}} className={styles.mobilePFItemName}>
      <Typography sx={{fontSize: '10px'}}>{layout}</Typography>
    </Box>

    <Box sx={{mt: 2}}>
      <CompPortfolioLayouts layout={layout} />
    </Box>
    
    {/* <Box >
        <CompFooter/>
    </Box> */}
  </div>
)};

export default Portfolio;
