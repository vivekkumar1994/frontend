

import { Route, Routes } from 'react-router-dom';
import EmployeDetail from './components/EmployeDetail';
import AddEdit from './pages/AddEdit/AddEdit';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Navbar from './pages/Navbar/Navbar';
import View from './pages/view/View';

function App() {
  return (
    <div className="app">
      <Navbar/>
      
      <EmployeDetail/>

      <Routes>
      <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/add' element={<AddEdit/>} />
        <Route path='/update/:id' element={<AddEdit/>} />
        <Route path='/view/:id' element={<View/>} />

      </Routes>
   
    </div>
  );
}

export default App;
