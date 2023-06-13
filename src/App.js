import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Listing from './Listing';
import Login from './Login';
import Register from './Register';
import Request from './Request';
import Search from './Search';
import Viewproperty from './Viewproperty';
import Propertypost from './Propertypost';
import Saved from './Saved';

function App () {
  let key=0;
  switch (key) {
    case 1:
      return <Home/>
    case 2:
      return <About/>
    case 3:
      return <Contact/>
    case 4:
      return <Dashboard/>
    case 5:
      return <Listing/>
    case 6:
      return <Login/>
    case 7:
      return <Register/>
    case 8:
      return <Request/>
    case 9:
      return <Search/>
    case 10:
      return <Viewproperty/>
    case 11:
      return <Propertypost/>
    case 12:
      return <Saved/>
    default:
      return(
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Listing" element={<Listing/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Propertypost" element={<Propertypost/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Request" element={<Request/>}/>
            <Route path="/Saved" element={<Saved/>}/>
            <Route path="/Search" element={<Search/>}/>
            <Route path="/Viewproperty" element={<Viewproperty/>}/>
          </Routes>
        </Router>
      )
  }
}

export default App;