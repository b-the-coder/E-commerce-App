import React from 'react'
import { Landingpage } from './pages/landingpage'
import Searchpage from './pages/searchpage'
import './App.css'

// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
      
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/search" element={<Searchpage />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App
