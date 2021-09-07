import { description } from 'commander'
import React, { useState, useEffect } from 'react'
import Three from '../Components/Three'
import Data from '../data'
const Home = () => {
    return (
        <>
            <div className="paralax">
                <header>
                    <h2 className="header">Briggs</h2>
                </header>
                <button className="btn">Schedule Us</button>
            </div>

            <div className="container">
                {Data.map((tile) => {
                    return <Three {...tile} />
                })}
            </div>

        </>
    )
}

export default Home
