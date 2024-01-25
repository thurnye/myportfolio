import React, { FC, useState , useEffect} from 'react';
import Box from '@mui/material/Box';
import styles from './Portfolio.module.scss';
import { Typography } from '@mui/material';
import CompPortfolioGrid from '../../components/CompPortfolioGrid/CompPortfolioGrid';
import CompPortfolioLayouts from '../../components/CompPortfolioLayouts/CompPortfolioLayouts';
import { useDataCustomHook } from '../../Data/data';

interface PortfolioProps {}
export interface PFLinks {
  name: string;
  layouts: string[];
  label: string;
};

const Portfolio: FC<PortfolioProps> = () => {
  const {projectPage: {header, filters, defaultFilter}} = useDataCustomHook();

  const [activeTab, setActiveTab] = useState<string>(defaultFilter.label)
  const [tab, setTab] = useState<string>(defaultFilter.name)
  const [structure, setStructure] = useState<string>('');
  const [layout, setLayout] = useState<string>(defaultFilter.layouts);
  

  useEffect(() => {
    if(structure){
      const label = structure.split('_')[0];
      const design = structure.split('_')[1];
      setLayout(design);
      setActiveTab(label);
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
      }
    }

  };

  return (
  <div className={styles.Portfolio} data-testid="Portfolio">
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
        nav={filters}
        />
      </Box>
    </Box>

    <Box sx={{mt: 2}} className={styles.mobilePFItemName}>
      <Typography sx={{fontSize: '10px'}}>{layout}</Typography>
    </Box>

    <Box sx={{mt: 2}}>
      <CompPortfolioLayouts layout={layout}/>
    </Box>
  </div>
)};

export default Portfolio;
