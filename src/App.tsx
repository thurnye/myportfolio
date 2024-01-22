import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import { AppContext } from './Context/context';
import CompSiteLayout from './components/CompSiteLayout/CompSiteLayout';


library.add(fab, far, fas)


function App() {
  const [activeNav, setActiveNav] = React.useState<string>('HOME');
  const [openRightNav, setOpenRightNav] = React.useState<boolean>(false);

  return (
    <AppContext.Provider value={{activeNav, setActiveNav, openRightNav, setOpenRightNav}}>
      <div className="App">
        <CompSiteLayout/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
