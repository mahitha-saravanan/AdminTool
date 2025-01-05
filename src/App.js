
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import Login from './Components/Login';
import ForgetPassword from './Components/ForgetPassword';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
 <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/registration" element={<SignUp/>}/>
    <Route path="/forgetpassword" element={<ForgetPassword/>}/>
  </Routes>
 </Router>
    </div>
  );
}

export default App;
