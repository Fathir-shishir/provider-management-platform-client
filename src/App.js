import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Agreements from './Components/Agreements';
import AgreementsDetails from './Components/AgreementsDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/agreements' element={<Agreements></Agreements>}></Route>
        <Route path='/agreementsDetails' element={<AgreementsDetails></AgreementsDetails>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
