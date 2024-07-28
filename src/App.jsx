import Navbar from "./components/Navbar";
import College from "./pages/College/College";
import Home from "./pages/Home/Home";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import SingleCollege from "./pages/SingleCollege/SingleCollege";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Success from "./pages/Register/Success";
import { useSelector } from "react-redux";
import LoadingCard from "./components/Loading/Loader1";
import Verify from "./pages/Register/Verify";
import FloatLabels from "./components/FloatingLabels/FloatLabel";
import Profile from "./pages/Register/Profile";
import MLogin from "./pages/Mlogin/Login";
import MyHome from "./pages/Homev1/MHome";
import Contactv1 from "./pages/Contactv1/Contactv1";
import SearchResult from "./pages/SearchResult/SearchResult";
import SingleCollegev1 from "./pages/SingleCollegev1/SingleCollegev1";
import VendorRegister from "./pages/Register/VendorRegister";
import VendorLogin from "./pages/Mlogin/VendorLogin";
import SearchCountryResult from "./pages/SearchResult/SearchCountryResult";

function App() {

  const user= useSelector(({reducer})=> reducer.user)
  return (
     <div className="app">
       
       <BrowserRouter>
          <FloatLabels/> 
          <Routes>
               
               <Route path="/" element={<Home/>} />
               <Route path='/colleges' element= {<College/>}/>
               <Route path="/colleges/:id" element={<SingleCollegev1/>}/>
               <Route path='/login' element={user ? <Navigate to='/dashboard'/>:<MLogin/>} />
               <Route path='/login/vendor' element={user ? <Navigate to='/dashboard'/>:<VendorLogin/>} />

               <Route path="/register" element={user ? <Navigate to='/dashboard'/>:<Register/>} />
               <Route path="/register/vendor" element={user ? <Navigate to='/dashboard'/>:<VendorRegister/>} />

               <Route path="/complete-profile" element={<Profile />} />
               <Route path="/dashboard" element= {<Dashboard />}/>
               <Route path="/success" element={<Success />} />
               {/* <Route path="/contact" element={<LoadingCard/>} /> */}
               <Route path="/search/:name" element={<SearchResult/>} />
               <Route path="/search/country/:name" element={<SearchCountryResult/>} />

               <Route path="/contact" element={<Contactv1 />} />
               <Route path="/verify-email/:uid/:token" element={<Verify />} />
          </Routes>
          <Navbar/>

         

       </BrowserRouter>  
     </div>
  );
}

export default App;
