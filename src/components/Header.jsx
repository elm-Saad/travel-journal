import React from 'react'
import icon from '../assets/world-icon.svg'

export default function Header(){
    return (
        <header>
            <section>
                <img src={icon} />
                <p>my travel journal.</p>
            </section>
        </header>
    )
}