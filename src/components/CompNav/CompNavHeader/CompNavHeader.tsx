import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {X} from 'react-feather'
import CompFeatherIcon from '../../CompFeatherIcon/CompFeatherIcon';
import IconButton from '@mui/material/IconButton';
import styles from './CompNavHeader.module.scss';

interface CompNavHeaderProps {
  closeIcon: () => void;
}

const CompNavHeader: FC<CompNavHeaderProps> = (props: CompNavHeaderProps) => {
  const {closeIcon} = props;
  return (
    <div className={styles.CompNavHeader} data-testid="CompNavHeader">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={styles.innerHeader}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={closeIcon}
            >
              <CompFeatherIcon size={18} icon={<X/>}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
};

export default CompNavHeader;
