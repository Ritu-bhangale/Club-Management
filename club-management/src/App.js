import './App.css';
import Register from './pages/register/register';
import ClubDetails from './pages/club-detail/clubDetail';
import Calendar from './pages/Calendar/calendar'
import Login from './pages/login/login';
import Home from './pages/home/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

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
      </Routes>
    </Router>
    </>
  );
}

export default App;
