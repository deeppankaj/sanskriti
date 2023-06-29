import { Routes, Route } from 'react-router-dom';
import {About, Contact, Home, Login, MapBook, MapDetail, SignUp} from './pages';
import { Footer, Header } from './Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AddMaps } from './pages/admin';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './Redux-Store/Slices/UserSlice';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser)
    }, [])
    
    
   return (
        <>
            <ToastContainer/>
            <Header/>
            <Routes>
                <Route path='*' element={<Home />} />                
                <Route path='/mapbook/:id' element={<MapBook />} />                
                <Route path='/login' element={<Login />} />                
                <Route path='/signup' element={<SignUp />} />                
                <Route path='/contact' element={<Contact />} />                
                <Route path='/about' element={<About />} />                
                <Route path='/add' element={<AddMaps />} />                
                <Route path='/mapbook/:id/:id' element={<MapDetail />} />                
            </Routes>
            <Footer/>
        </>
    )
}

export default App