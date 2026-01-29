import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      
     <nav className="navbar">
  <div className="nav-container">
    <a to="/logo" className="logo">MyApp</a>

    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <ul className="nav-links">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/feauture">Features</Link></li>
      <li><Link to="/pricie">Pricing</Link></li>
      <li><Link to="/" className="login">Login</Link></li>
      <li><Link to="/cc" className="signup">Sign Up</Link></li>
      <li><Link to="/signUpData">SignUpData</Link>SignUpData</li>
    </ul>
  </div>
</nav>

    </>
  )
}

export default Navbar
