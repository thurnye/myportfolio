import React, { FC, useState , useEffect} from 'react';
import Box from '@mui/material/Box';
import styles from './Portfolio.module.scss';
import { Typography } from '@mui/material';
import CompPortfolioGrid from '../../components/CompPortfolioGrid/CompPortfolioGrid';
// import CompPortfolioLayouts from '../../components/CompPortfolioLayouts/CompPortfolioLayouts';
import { useDataCustomHook } from '../../Data/data';
import CompGalleryLayout from '../../components/CompPortfolioLayouts/CompGalleryLayout/CompGalleryLayout';

interface PortfolioProps {}
 export interface LayoutProps {
  label: string,
  name: string,
  num?: number
}
export interface PFLinks {
  name: string;
  layouts: LayoutProps[];
  label: string;
};

const Portfolio: FC<PortfolioProps> = () => {
  const {projectPage: {header, filters, defaultFilter}} = useDataCustomHook();

  const [activeTab, setActiveTab] = useState<string>(defaultFilter.label)
  const [tab, setTab] = useState<string>(defaultFilter.name)
  const [structure, setStructure] = useState<{label: string, layout: LayoutProps} | undefined>();
  const [layout, setLayout] = useState<LayoutProps>(defaultFilter.layouts);
  

  useEffect(() => {
    if(structure){
      const label = structure.label;
      setLayout(structure.layout);
      setActiveTab(structure.label);
      const tab = filters.find(el => el.label === label);
      if(tab){
        setTab(tab.name)
      }
    }
  },[structure, filters]);
  
  const handleActiveTab = (label: string) => {
    if(label) {
      setActiveTab(label);
      const tab = filters.find(el => el.label === label);
      if(tab){
        setLayout(tab.layouts[0])
        setStructure(undefined)
      }
    }

  };

  return (
  <Box className={styles.Portfolio} data-testid="Portfolio" sx={{
    height: {xs: 'initial', lg: '92.8vh'},
    overflow: {xs: '',lg: 'hidden'}
  }}>
    <Box sx={{mb: 3}} className={styles.title}>
      <Typography>{header}</Typography>
    </Box>
    <Box className={styles.portfolioHeader}>
      <Box>
        <div className={styles.portfolioLinkContainer}>
          {filters.map((el, i) => <React.Fragment key={el.name} >
            <div 
              className={`${styles.portfolioLinkItem} ${activeTab === el.label ? styles.portfolioActiveTab : ''}`}
              onClick={() => handleActiveTab(el.label)
              }
              >
                <Typography sx={{fontSize: 11}}>{el.name}</Typography>
              </div>
            </React.Fragment>
          )}
          
        </div>
        <Box className={styles.mobilePFItem}>
          <Typography sx={{mr: 1}}>
            {tab} 
          </Typography> 
          <Typography sx={{fontSize: '10px'}}>
            {layout.label}
          </Typography>
        </Box>
      </Box>
      <Box>
        <CompPortfolioGrid 
        setStructure={setStructure}
        nav={filters}
        />
      </Box>
    </Box>

    <Box sx={{mt: 2}} className={styles.mobilePFItemName}>
      <Typography sx={{fontSize: '10px'}}>{layout.label}</Typography>
    </Box>

    <Box sx={{mt: 2, height: '86%', overflow: 'auto'}}>
      <CompGalleryLayout layout={layout} />
    </Box>
  </Box>
)};

export default Portfolio;
