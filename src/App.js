import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Agreements from './Components/Agreements';
import AgreementsDetails from './Components/AgreementsDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';
import UpdateMasterAgreements from './Components/UpdateMasterAgreements';
import Dashboard from './Components/Dashboard';
import UpdateProviders from './Components/UpdateProviders';
import PostReview from './Components/PostReview';
import SelectedProfile from './Components/SelectedProfile';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/agreements' element={<RequireAuth>
          <Agreements></Agreements>
        </RequireAuth>}></Route>
        <Route path='/agreementsDetails' element={<AgreementsDetails></AgreementsDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/updateMasterAgreements' element={<UpdateMasterAgreements></UpdateMasterAgreements>}></Route>
        <Route path='/dashboard' element={ <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}></Route>
        <Route path='/UpdateProviders' element={<UpdateProviders></UpdateProviders>}></Route>
        <Route path='/review' element={<PostReview></PostReview>}></Route>
        <Route path='/selectedProfile' element={<SelectedProfile></SelectedProfile>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
