import React from "react"
import{Link} from 'react-router-dom'
const NavBar = () => {
  return (
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a href="/" className="brand-logo">Blog</a>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>

          </ul>
        </div>

      </nav>
  )
}
export default NavBar