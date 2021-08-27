import {FaTwitter, FaBehance, FaFacebook, FaLinkedin} from 'react-icons/fa'
import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'
import Admin from '../Pages/Admin'
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
        url: '/cart',
        text: 'Cart',
        page: <Cart/>
    },
    {
        id: 6,
        url: '/admin',
        text: "Admin",
        page: <Admin/>
    },
    {
        id: 5, 
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
