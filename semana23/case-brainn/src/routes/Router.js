import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DiaDeSorte from '../pages/DiaDeSorte/DiaDeSorte';
import HomePage from '../pages/HomePage/HomePage';
import Lotofacil from '../pages/Lotofacil/Lotofacil';
import Lotomania from '../pages/Lotomania/Lotomania';
import MegaSena from '../pages/MegaSena/MegaSena'
import Quina from '../pages/Quina/Quina';
import Timemania from '../pages/Timemania/Timemania';


const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomePage/>}/>

                <Route path="/Megasena" element={<MegaSena/>}/>

                <Route path="/Dia-de-sorte" element={<DiaDeSorte/>}/>

                <Route path="/Lotofacil" element={<Lotofacil/>}/>
                
                <Route path="/Lotomania" element={<Lotomania/>}/>

                <Route path="/Quina" element={<Quina/>}/>

                <Route path="/Timemania" element={<Timemania/>}/>
                    
            </Routes>
        </BrowserRouter>
    )
}

export default Router 