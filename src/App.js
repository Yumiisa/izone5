import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Work from './components/Work';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Work/>
    {/* <SignUp/> */}
    {/* <SignIn/> */}
    <Footer/>
    <Routes>
<Route path="sign" element={<SignIn/>} />
<Route path="signup" element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
