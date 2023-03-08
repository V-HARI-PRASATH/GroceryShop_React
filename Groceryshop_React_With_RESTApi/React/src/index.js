import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CustomizedTables from './Components/Table';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddItem from './Components/AddItem';
import UpdateItem from './Components/UpdateItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomizedTables/>}/>
        <Route path="/add" element={<AddItem/>}/>
        <Route path="/update/:id" element={<UpdateItem/>}/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
