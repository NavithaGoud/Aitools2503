
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  
  return (
    <div className="App">
   {/* <SignIn></SignIn>
   <SignUp></SignUp> */}
   <BrowserRouter>
   <Routes>
    <Route   path="/signup" element={<SignUp></SignUp>}> </Route>
    <Route path='/' element={<SignIn/>}></Route>
    <Route path="/forgot-password" element={<div>Forgot Password Page</div>} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
