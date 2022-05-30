   
import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from '../Page/Home'
import { Page1 } from '../Page/Page1';



export const Router = () => {
    return (
        <Routes>
            <Route path='/'  element={<Home />} exact />
            
            <Route path='/Page' element={<Page1 />} />
        </Routes>
    )
}