import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { TimelineMax } from 'gsap';



export default function Index() {

    const toggleHide = (toShow, toHide) => {
        const tl = new TimelineMax({
            onStart: () => document.getElementById(toShow).style.display = 'flex',
            onComplete: () => document.getElementById(toHide).style.display = 'none',
        })
        tl
            .fromTo(`#${toHide}`, { left: 0 }, { left: "-100%" }, 0)
            .fromTo(`#${toShow}`, { left: "100%" }, { left: 0 }, 0)
    }
    return (
        <>
            <Login toggle={toggleHide} />
            <Register toggle={toggleHide} />
        </>
    )
}

