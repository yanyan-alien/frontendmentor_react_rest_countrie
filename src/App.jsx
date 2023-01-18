import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/mainComponent';

function App() {
  return (
    <BrowserRouter >
        <Main/>
    </BrowserRouter>
  );
}

export default App;
