import { useState } from 'react'
import HomePage from './components/HomePage'
import SignIn from './components/SignIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ServicesPage from './components/ServicePage'
import IncomeCertificate from './components/IncomeCertificate'
import IncomeCertificatePage from './components/IncomeCertificatePage'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import VServicesPage from './components/VServicePage'
import DocumentUploadPage from './components/DocumentUploadPage'


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/SignIn' element={<SignIn/>}/>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/services' element={<ServicesPage/>}/>
     <Route path='/income' element={<IncomeCertificate/>}/>
     <Route path='/certificate' element={<IncomeCertificatePage/>}/>
     <Route path='/contact' element={<ContactUs/>}/>
     <Route path='/about' element={<AboutUs/>}/>
     <Route path='/vservice' element={<VServicesPage/>}/>
     <Route path='/document' element={<DocumentUploadPage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
