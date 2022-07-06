import React,{useEffect, useState} from 'react';
import { loadCSS } from 'fg-loadcss';
import {Routes, Route} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'


import './App.scss';
import Dashboard from './pages/Dashboard/Dashboard';
import LandingPage from './pages/LandingPage/LandingPage';
import NoMatch from './pages/NoMatch/NoMatch';
import {NavBar}  from './components'

library.add(fab, far, fas)
function App() {
  const [component, setComponent] = useState<string>('Home')
  
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v6.0.0/css/all.css'
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);

  const getComponent = (comp:string) => setComponent(comp)


  
  return (
    <div className="App">
      <NavBar component={component}/>
      <Routes>
        <Route path="/"  element={<LandingPage />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/dashboard"  element={<Dashboard getComponent={getComponent}/>}/>
      </Routes>
    </div>
  );
}

export default App;
