import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainForm from '../components/MainForm'
import AllDataPage from '../pages/AllDataPage'
import SingleTable from '../components/SingleTable'
import PageNotFound from '../pages/PageNotFound'

function MainRoute() {
  return (
    <Routes>
        <Route path='/addUpdate/*' element={<MainForm/>}/>
        <Route path='/' element={<AllDataPage/>}/>
        <Route path='/singleData/:id' element={<SingleTable/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default MainRoute