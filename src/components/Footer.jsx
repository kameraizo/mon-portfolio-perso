import { NavLink } from "react-router-dom"
export default function Footer() {
  return (
  <footer className="navbar navbar-expand-lg navbar-dark bg-dark">
    <section className="container">
      <div className="row">
        <div className="col-md-4" style={{color:"white"}}>
          <p>John Doe</p>
          <p>40 rue Laure Diebold</p>
            <p>69009 Lyon France</p>  
              <p>10 20 30 40 50 </p>
              <p>john.doe@gmail.com</p>
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
              <NavLink className="nav-link" to="/mentions">Mentions lègales</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-4" style={{color:"white"}}>
          <p>Mes dernières réalisations</p>
          <ul className="list-unstyled">
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">fresh food</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Restaurant Akira</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Espace bien être</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">SEO</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Création API</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Maquette d'un site</NavLink>
            </li>
          </ul>

        </div>
    </div>
    </section>
  </footer>
  )
}