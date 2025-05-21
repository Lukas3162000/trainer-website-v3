import { useState } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';



export default function NavBar () {

    return(
        <>
            <nav>
                <div>LukiTraineri</div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/trainings">Trainings</NavLink></li>
                    <li><NavLink to="/über-mich">Über mich</NavLink></li>
                    <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                </ul>
            </nav>
        </>
    )
}