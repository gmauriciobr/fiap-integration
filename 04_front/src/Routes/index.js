import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import CreateDrone from '../Pages/CreateDrone'
import CreateMetrica from '../Pages/CreateMetrica'

const RoutesDefault = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-drone" element={<CreateDrone />} />
            <Route path="/create-metrica" element={<CreateMetrica />} />
        </Routes>
    )
}

export default RoutesDefault;