import React from 'react'

function Header() {
  return (
    <header>
        <h4>Shortly</h4>
        <nav>
          <ul class="nav__links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </nav>
        <ul class="nav__links">
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
        </ul>
      </header>
  )
}

export default Header