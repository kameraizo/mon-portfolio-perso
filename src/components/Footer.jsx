import { NavLink } from "react-router-dom"
export default function Footer() {
  return (
  <footer className="site-footer bg-dark">
    <section className="container">
      <div className="row">
        <div className="col-md-4" style={{color:"white"}}>
          <p>Antoine Mullatier</p>
              <p>contact.lartisanweb@gmail.com</p>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer nofollow">
          <i className="bi bi-github"></i>
          </a>
          <a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer nofollow">
          <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://x.com/?lang=fr" target="_blank" rel="noopener noreferrer nofollow">
          <i className="bi bi-twitter"></i>
          </a>
        </div>
        <div className="col-md-4" style={{color:"white"}}>
          <p>Liens utiles</p>
          <ul className="list-unstyled">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Me contacter</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mentions">Mentions légales</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-4" style={{color:"white"}}>
          <p>Mes dernières réalisations</p>
          <ul className="list-unstyled">
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Avant de cliquer</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Port de plaisance Port-Russell</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Maquette d'un site web</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">BDD</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Dashboard F1</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Devpro</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">L'artisan web</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Mystères &amp; Récits</NavLink>
            </li>
          </ul>

        </div>
    </div>
    </section>
  </footer>
  )
}