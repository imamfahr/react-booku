import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <h1><Link to = '/'>sitase</Link></h1>
            <ul>
                <li>
                    <Link to = '/'>find book</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
