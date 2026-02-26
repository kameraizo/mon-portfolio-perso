  import { Helmet } from 'react-helmet-async'


const SkillBar = (props) => {
return (
<div style={{marginBottom:"20px"}}>
    <p style={{marginBottom:"0"}}>{props.pourcentage}</p>
          <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div className={`progress-bar ${props.color}`} style={props.progress}></div>
          </div>
</div>
);
}

import { useState, useEffect } from "react"
export default function Home() {
  <Helmet>
  <title>home - Decouvrez le portfolio de John Doe </title>
  <meta name="description" content="Découvrez le portfolio de John Doe" />
  </Helmet>

  const [showModal, setShowModal] = useState(false)
  const [githubData, setGithubData] = useState(null)
  useEffect(() => {
      fetch("https://api.github.com/users/github-john-doe")
          .then(res => res.json())
          .then(data => setGithubData(data))
  }, [])
  return (
        <>
      {/* HERO */}
      <section style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        paddingTop: "50px"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)"
        }}>
        </div>

        <div style={{position: "relative", zIndex: 1}}>
          <h1 className="text-white display-4 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="text-white">Développeur web full stack</h2>
          <button className="btn btn-danger mt-3 px-4" onClick={() => setShowModal(true)}>
            En savoir plus
          </button>
        </div>
      </section>

      {/* a propos */}
      <section className="container my-5">
      <div className="row">

          {/* colonne gauche a propos*/}


        
          <div className="col-md-6">
            <h2>A propos</h2>
            <hr style={{color:"blue", borderWidth: "3px"}}/>
            <img src="/images/john-doe-about.jpg" alt="John Doe" className="img-fluid mb-3" />
            <p>Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis.
            </p>
            <p>Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis.
            </p>
            <p>Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis.
            </p>

          </div>
        

        <div className="col-md-6"> 
          <h2>Mes compètences</h2>
            <hr style={{color:"blue", borderWidth: "3px",}}/>
            <SkillBar
            pourcentage="HTML.5 90%"
            color="bg-danger"
            progress={{width: "90%"}}
            />
            <SkillBar
            pourcentage="CSS.3 80%"
            color="bg-info"
            progress={{width: "80%"}}
            />
           <SkillBar
           pourcentage="JavaScript 70%"
           color="bg-warning"
           progress={{width: "70%"}}
           />
            <SkillBar
            pourcentage="PHP 2%"
            color="bg-success"
            progress={{width: "2%"}}
            />
            <SkillBar
            pourcentage="React 50%"
            color="bg-primary"
            progress={{width: "50%"}}
            />


        </div>
          
      </div>
        

      </section>
      {/* MODALE GITHUB */}
      {showModal && (
      <div className="modal fade show" style={{display: "block", backgroundColor: "rgba(0,0,0,0.5)"}}>
      <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Mon profil GitHub</h3>
          <button className="btn-close" onClick={() => setShowModal(false)}></button>
        </div>
        <div className="modal-body">
          {githubData && (
            <div className="d-flex gap-3">
              <img src={githubData.avatar_url} alt="Avatar GitHub" width="100" className="rounded-circle" />
              <div>
                <p><i className="bi bi-person me-2"></i>{githubData.name}</p>
                <p><i className="bi bi-collection me-2"></i>Repositories : {githubData.public_repos}</p>
                <p><i className="bi bi-people me-2"></i>Followers : {githubData.followers}</p>
                <p><i className="bi bi-people me-2"></i>Following : {githubData.following}</p>
              </div>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  )
}
