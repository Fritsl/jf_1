import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FrontPage } from './pages/FrontPage';
import { DataEnterPage } from './pages/DataEnterPage';
import { ResultPage } from './pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/dataenter" element={<DataEnterPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;