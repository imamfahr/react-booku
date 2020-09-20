import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <h1><Link to = '/'>Setup</Link></h1>
            <ul>
                <li>
                    <Link to = '/'>Find</Link>
                </li>
                <li>
                    <Link to = '/reading-list'>list</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
