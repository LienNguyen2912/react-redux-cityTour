// just type "rfc" it will auto generate template function for react
import React from 'react'
import './Navbar.scss'
import logo from '../../logo.png'
import {Link, NavLink, withRouter} from 'react-router-dom'

function Navbar() {
    return (
        <nav className = "navbar">
            <img src = {logo} alt='city tours logo'></img>
            <ul className = 'nav-links'>
                <li><NavLink exact to='/' className='nav-link'>home</NavLink>
                    {/* <a href = '/' className='nav-link'>home</a> */}
                </li>
                <li>
                    <NavLink to='/about' className='nav-link'>about</NavLink>
                    {/* <a href = '/about' className='nav-link'>about</a> */}
                </li>
                <li>
                    <NavLink to='/contact' className='nav-link active'>contact</NavLink>
                    {/* <a href = '/tours' className='nav-link active'>contact</a> */}
                </li>
            </ul>
        </nav>
    )
}
export default withRouter(Navbar)