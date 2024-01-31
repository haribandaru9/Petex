import React from 'react';
import Usersignup from './Usersignup';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Admindasboard from './Admindashboard';
import Menubar from './Menubar';
import Stepin from './Stepin';
import Userlogin from './Userlogin';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import AskQuery from './Ask aQuery'
import Feedbackform from './Feedbackform';
import User from './User';
import Adminlogin from './Adminlogin';
import ForgotPassword from './Forgetpassword';
import Navbar from './Navbar';
import Appointment from './Appointment';

function App() {
  return (
    
      

    <BrowserRouter>
    <Menubar/>
    <Routes>
    <Route path='/Usersignup' element={<Usersignup/>}/>
    <Route path='/Admindasboard' element={<Admindasboard/>}/>
    <Route path='/Stepin' element={<Stepin/>}/>
    <Route path='/Userlogin' element={<Userlogin/>}/>
    <Route path='/Aboutus' element={<Aboutus/>}/>
    <Route path='/Contactus' element={<Contactus/>}/>
    <Route path='/Ask aquery' element={<AskQuery/>}/>
    <Route path='/Feedbackform' element={<Feedbackform/>}/>
    <Route path='/User' element={<User/>}/>
    <Route path='/Adminlogin' element={<Adminlogin/>}/>
    <Route path='/Forgetpassword' element={<ForgotPassword/>}/>
    <Route path='/Appointment' element={<Appointment/>}/>

    






    





    



    <Route path='/Menubar' element={<Menubar/>}/>
    </Routes>
        </BrowserRouter>

  );
}

export default App;
