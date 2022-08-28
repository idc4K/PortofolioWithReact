import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
           <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
