import {FaTwitter, FaBehance, FaFacebook, FaLinkedin} from 'react-icons/fa'
import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import Error from '../Pages/Error'


export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        page: <Home/>
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
        page: <About/>
    },
    {
        id: 3,
        url: '/products',
        text: 'Products',
        page: <Products/>
    },
    {
        id: 4, 
        url: '*',
        text: 'Error',
        page: <Error/>

    }
]
export const socials = [
    {
    id: 1, 
    url: "https:/www.twitter.com",
    icon: <FaTwitter/>
},
    {
    id: 1, 
    url: "https:/www.facebook.com",
    icon: <FaFacebook/>
},
    {
    id: 1, 
    url: "https:/www.linkedin.com",
    icon: <FaLinkedin/>
},
    {
    id: 1, 
    url: "https:/www.Behance.com",
    icon: <FaBehance/>
}
]
