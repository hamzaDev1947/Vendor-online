import logo from './logo.svg';
// import './App.css';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Navbar from './Screens/Navbar/Navbar';
import Footer from './Screens/Footer/Footer';
import Main from './Screens/Main/Main';

function App() {
  return (
<>
<div className="main">
 <BrowserRouter>
 {/* {(window.location.pathname!=='/main')&&<div className="sidebar">
 <Navbar/>
  </div>} */}
    <Navbar/>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="about" element={<Footer />}/>
      <Route path="*"  element={ <div>  <h2>404 Page not found</h2> </div>  } />
</Routes>
<Footer/>
    </BrowserRouter>
   </div>
</>
  );
}

export default App;
