import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftNav from './components/leftNav/leftNav'
import RightNav from './components/rightNav/rightNav'
import Center from './components/center/center'

function App() {
  return (
    <div className="App">
      <LeftNav/>
      {/* <Center/> */}
      <RightNav/>
    </div>
  );
}

export default App;
