import './App.css';
import Register from './pages/register/register';
import ClubDetails from './pages/club-detail/clubDetail';
import Calendar from './pages/Calendar/calendar'
import Login from './pages/login/login';
import Home from './pages/home/home';
import Whatsapp from './pages/whatsapp/whatsapp';
import ClubDetail_form from './pages/clubDetail_Form/clubDetail_form';
import Modal from 'react-modal'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
Modal.setAppElement('#root');
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/clubdetails" element={<ClubDetails/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/clubForm" element={<ClubDetail_form/>}/>
        <Route path="/whatsapp" element={<Whatsapp/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
