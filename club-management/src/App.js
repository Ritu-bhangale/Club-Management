import './App.css';
import Modal from 'react-modal'
import UserHome from './pages/user/home/home'
import ClubHome from './pages/clubs/home/home'

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
      </Routes>
    </Router>
    </>
  );
}

export default App;
