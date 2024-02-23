
import './App.css';
import About from '../src/Components/About';
import Layout from './Components/Layout';
import Errormsg from './Components/Errormsg';
import Home from './Components/Home';
import Login from './Components/Login ';
import Register from './Components/Register'
import Doctors from './Components/Doctors';
import DashBoard from './Components/DashBoard';
import Contactus from './Components/Contactus'; // Corrected spelling
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Register /> },
      { path: 'Home', element: <Home /> },
      { path: 'About', element: <About /> },
      { path: 'Login', element: <Login /> },
      { path: 'Doctors', element: <Doctors /> },
      { path: 'DashBoard', element: <DashBoard /> },
      { path: 'Contactus', element: <Contactus /> }, 
      { path: '*', element: <Errormsg /> }, // Move this line to the end
    ]
  }
]);



function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
