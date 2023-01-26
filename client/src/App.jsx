import React from 'react';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Main from './pages/Main';
import Add from './pages/Add';
import { Route, Routes, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path='/' element={<Navigate to='authors' />} />
        <Route path='authors' element={<Main />} />
        <Route path='authors/:id' element={<Detail />} />
        <Route path='/authors/:id/edit' element={<Edit />} />
        <Route path='/authors/add' element={<Add />} />
      </Routes>
      </div>
    </>
  )
}

export default App