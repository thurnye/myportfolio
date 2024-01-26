import React, { FC, useEffect, useState } from 'react';
import Menu, { MenuActions } from '@mui/base/Menu';
import MenuItem, { menuItemClasses } from '@mui/base/MenuItem';
import Button, { buttonClasses } from '@mui/base/Button';
import Popper from '@mui/base/Popper';
import { styled } from '@mui/system';
import { ListActionTypes } from '@mui/base/useList';
import styles from './CompPortfolioGrid.module.scss';
import CompFeatherIcon from '../CompFeatherIcon/CompFeatherIcon';
import { Grid } from 'react-feather';
import { PFLinks, LayoutProps } from '../../pages/Portfolio/Portfolio';

interface CompPortfolioGridProps {
  setStructure: (layout: {label: string, layout: LayoutProps}) => void;
  nav: PFLinks[]
};


function MenuSection({ children, label }: MenuSectionProps) {
  return (
    <MenuSectionRoot>
      <MenuSectionLabel>{label}</MenuSectionLabel>
      <ul>{children}</ul>
    </MenuSectionRoot>
  );
}

const CompPortfolioGrid: FC<CompPortfolioGridProps> = (props: CompPortfolioGridProps) => {
  const {setStructure, nav} = props;
  const [buttonElement, setButtonElement] = React.useState<HTMLButtonElement | null>(
    null,
  );


  const [isOpen, setOpen] = React.useState(false);
  const menuActions = React.useRef<MenuActions>(null);
  const preventReopen = React.useRef(false);

  const updateAnchor = React.useCallback((node: HTMLButtonElement | null) => {
    setButtonElement(node);
  }, []);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (preventReopen.current) {
      event.preventDefault();
      preventReopen.current = false;
      return;
    }
    
    setOpen((open) => !open);
  };

  const handleButtonMouseDown = () => {
    if (isOpen) {
      // Prevents the menu from reopening right after closing
      // when clicking the button.
      preventReopen.current = true;
    }
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      if (event.key === 'ArrowUp') {
        // Focus the last item when pressing ArrowUp.
        menuActions.current?.dispatch({
          type: ListActionTypes.keyDown,
          key: event.key,
          event,
        });
      }
    }
  };


  const createHandleMenuClick = (menuItem: {label: string, layout: LayoutProps}) => {
    return () => {
      setStructure(menuItem);
      setOpen(false);
      buttonElement?.focus();
    };
  };




  return (
    <div className={styles.CompPortfolioGrid} data-testid="CompPortfolioGrid">
      <TriggerButton
        type="button"
        onClick={handleButtonClick}
        onKeyDown={handleButtonKeyDown}
        onMouseDown={handleButtonMouseDown}
        ref={updateAnchor}
        aria-controls={isOpen ? 'wrapped-menu' : undefined}
        aria-expanded={isOpen || undefined}
        aria-haspopup="menu"
        sx={{cursor: 'pointer',
          color: isOpen ? 'white' : 'inherit',
          '&:hover': {
            color: 'white'
          }
        }}
      >
        <CompFeatherIcon icon={<Grid/>}/>
      </TriggerButton>
      <Menu
        actions={menuActions}
        open={isOpen}
        onOpenChange={(open) => {
          setOpen(open);
          
        }}
        anchorEl={buttonElement}
        slots={{ root: StyledPopper, listbox: StyledListbox }}
        slotProps={{ listbox: { id: 'simple-menu' } }}
      >
        {nav.map((el: PFLinks, i: number) => <MenuSection label={el.name} key={`${el.name}_${i}`}>
          {el.layouts.map((layout: LayoutProps, j: number) => 
            <StyledMenuItem
            key={`${el.label}_${layout.name}_${j}`}
            onClick={createHandleMenuClick({label: el.label, layout})}>
              {layout.label}
            </StyledMenuItem>
          )}
        </MenuSection>)}
      </Menu>
    </div>
  );
}

export default CompPortfolioGrid;

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 8px;
  overflow: auto;
  outline: 0px;
  background: #1E1E28;
  border: 1px solid #2C2C38;
  color: #8C8C8E;
  box-shadow: 0px 2px 16px #2C2C38;
  `,
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 2px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }
  
  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  
  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }
  

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    background-color: #8C8C8E;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  
  `,
);

const TriggerButton = styled(Button)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;
  background: inherit;
  border: inherit;
  color: inherit;
  
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  
  &:hover {
    background: inherit;
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }
  
  &.${buttonClasses.focusVisible} {
    background: inherit;
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;

interface MenuSectionProps {
  children: React.ReactNode;
  label: string;
}

const MenuSectionRoot = styled('li')`
  list-style: none;

  & > ul {
    padding-left: 1em;
  }
`;

const MenuSectionLabel = styled('span')`
  display: block;
  padding: 10px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: white;
`;
