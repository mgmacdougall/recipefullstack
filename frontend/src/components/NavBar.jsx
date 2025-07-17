import React from 'react'

function NavBar() {
    return (
        <nav className="nav-bar">
            <a href="/" className="nav-item">Home</a>
            <a href="/recipes" className="nav-item">Recipes</a>
            <a href="/recipe-box" className="nav-item">Tips</a>
            <a href="/meal-planner" className="nav-item">Meal Planner</a>
            <a href="/about" className="nav-item">About</a>
        </nav>
    )
}

export default NavBar