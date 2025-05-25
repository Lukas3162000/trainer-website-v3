import { useState } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';



export default function NavBar () {

    return(
        <>
            <nav className='bg-neutral-50 shadow-md p-4 flex justify-around items-center sticky top-0'>
                <div><img src="src\assets\Logos\72x72.svg" alt="Lukas Fitness Logo" /></div>
                <ul className='flex space-6 gap-4 items-center justify-center font-bold'>
                    <li className='hover:text-sky-700'><NavLink to="/">HOME</NavLink></li>
                    <li className='hover:text-sky-700'><NavLink to="/trainings">TRAININGS</NavLink></li>
                    <li className='hover:text-sky-700'><NavLink to="/über-mich">ÜBER MICH</NavLink></li>
                    <li className='hover:text-sky-700'><NavLink to="/kontakt">KONTAKT</NavLink></li>
                </ul>
                <button className='bg-orange-400 text-neutral-50 cursor-pointer px-7 py-3 rounded-full font-bold hover:bg-orange-500 transition'>TERMIN BUCHEN</button>
            </nav>
        </>
    )
}