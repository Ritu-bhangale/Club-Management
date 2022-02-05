import './App.css';
import Modal from 'react-modal'
import UserHome from './pages/user/home/home'
import ClubHome from './pages/clubs/home/home'
import Login from './pages/clubs/login/login';
import Register from './pages/clubs/register/register';
import ClubDetails from './pages/clubs/club-detail/clubDetail';
import AddEvent from './pages/addEvent/addEvent'

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
        <Route path="/" element={<UserHome/>}/>
        <Route path="/clubs/" element={<ClubHome/>}/>
        <Route path="/clubs/login" element={<Login/>}/>
        <Route path="/clubs/register" element={<Register/>}/>
        <Route path="/clubs/details" element={<ClubDetails/>}/>
        <Route path="/clubs/addevent" element={<AddEvent/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
