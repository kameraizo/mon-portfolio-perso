import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          John Doe
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/">Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/contact">Contact</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/Mentions">Mentions legales</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}           