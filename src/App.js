
import './App.css';
import {
  BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";
import Home from './Page/Home/Home';
import About from './Page/AboutUs/About';
import Contact from './Page/ContactUs/Contact';
import ThingsToDo from './Page/ThingsToDo/ThingsToDo';
import Gallery from './Page/Gallery/Gallery';
import Room from './Page/Room/Room';
import SingleRoom from './Page/SingleRoomPage/SingleRoom';
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';
import Thnakyou from './Page/Thank you/Thnakyou';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/things' element={<ThingsToDo/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/room/:id' element={<SingleRoom/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/thankyou' element={<Thnakyou/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
