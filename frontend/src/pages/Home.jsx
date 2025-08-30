import React from 'react'
import NavBar from '../components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
function Home() {

    return (
        <div>
            <NavBar/>
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'><FontAwesomeIcon icon={faHouse} />Home</h1>
        </div>
    )
}

export default Home