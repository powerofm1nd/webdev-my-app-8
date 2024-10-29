import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Comments from './components/Comments.jsx';
import Products from './components/Products.jsx';
import Authorization from './components/Authorization.jsx';
import Registration from './components/Registration.jsx';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/comments' element={<Comments />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/authorization' element={<Authorization />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
      </Routes>
    </>
  );
}



export default App;
