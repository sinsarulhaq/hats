import './App.css';
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import { getAuthUser } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthUser())
  });
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/dashboard' element={<Dashboard />} />
       
       <Route path='/settings' element={<Settings />} />
      
       
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
