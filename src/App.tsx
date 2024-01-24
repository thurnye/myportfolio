import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import CssBaseline from '@mui/material/CssBaseline';
import { AppContext } from './Context/context';
import { Box } from '@mui/material';
import Dashboard from './components/CompSiteLayout/Dashboard';
import Contact from './pages/Contact/Contact';
import NoMatch from './pages/NoMatch/NoMatch';
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/Home/Home';

library.add(fab, far, fas)


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <CssBaseline/>
          <Routes>
            <Route path='/' element={
              <Box>
              <Box sx={{
                    position: 'relative',
                    maxHeight: 1440,
                    maxWidth: 1440,
                    margin: 'auto',
                    height: '97vh',
                }}>
                <Dashboard/>
              </Box>
    
            </Box>
            }>
              <Route path="*" element={<NoMatch />} />
              <Route path="home" element={<Home/>}/>
              {/* <Route path="history" element={<History/>}/> */}
              <Route path="projects" element={<Portfolio/>}/>
              {/* <Route path="about" element={<AboutPage/>}/> */}
              <Route path="contact" element={<Contact/>}/>
              <Route index element={<Navigate to="home" />}></Route> 
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
