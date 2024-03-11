import React from 'react'; // Add this line

import './App.css';
import About from './Components/About'; // Adjusted import path
import Layout from './Components/Layout';
import Errormsg from './Components/Errormsg';
import Home from './Components/Home';
import Login from './Components/Login '; // Adjusted import path
import Register from './Components/Register'; // Adjusted import path
import Doctors from './Components/Doctors';
import DashBoard from './Components/DashBoard';
import Contactus from './Components/Contactus'; // Corrected spelling
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import
import ReactLoading from 'react-loading';

const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Register />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Login" element={<Login />} />
      <Route path="Doctors" element={<Doctors />} />
      <Route path="DashBoard" element={<DashBoard />} />
      <Route path="Contactus" element={<Contactus />} />
      <Route path="*" element={<Errormsg />} />
    </Route>
  </Routes>
);

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the time to simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <Router>
          {routes}
        </Router>
      )}
    </div>
  );
}

function Loading() {
  return (
    <div className='loadingstart text-center d-flex justify-content-center align-items-center vh-100'>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Monoton&display=swap');`}
        
      </style>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <h2 class='test'>
    <span>s</span>
    <span>o</span>
    <span>u</span>
    <span>n</span>
    <span>d</span>
    <span>&nbsp;</span> 
    <span>c</span>
    <span>a</span>
    <span>r</span>
    <span>e</span>
  </h2>
  <ReactLoading type="bars" color="#20B6A3" height={100} width={100} />
</div>

    </div>
  );
}

export default App;
