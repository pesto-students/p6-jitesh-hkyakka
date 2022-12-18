import React from 'react'

function Header() {
  return (
    <header>
        <h4>Shortly</h4>
        <nav>
          <ul class="nav__links">
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Resources</a></li>
          </ul>
        </nav>
        <ul class="nav__links">
            <li><a>Login</a></li>
            <li><a>Sign Up</a></li>
        </ul>
      </header>
  )
}

export default Header