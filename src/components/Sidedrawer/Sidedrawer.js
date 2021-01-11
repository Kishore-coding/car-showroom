import React from 'react'
import "./Sidedrawer.css"

function Sidedrawer() {
    return (
        <div>
            <nav className="side-drawer">
                <ul>
                    <li><i class="fas fa-home"></i><a href="/">HOME</a></li>
                    <li><i class="fas fa-car"></i><a href="/models">MODELS</a></li>
                    <li><i class="fas fa-cogs"></i><a href="/features">FEATURES</a></li>
                    <li><i class="fas fa-users"></i><a href="/about">ABOUT US</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidedrawer
