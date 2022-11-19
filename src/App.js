import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Agreements from './Components/Agreements';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/agreements' element={<Agreements></Agreements>}></Route>
      </Routes>

    </div>
  );
}

export default App;
