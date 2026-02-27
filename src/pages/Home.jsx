import { useState, useEffect } from "react"
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


export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [githubData, setGithubData] = useState(null)
  useEffect(() => {
      fetch("https://api.github.com/users/kameraizo")
          .then(res => res.json())
          .then(data => setGithubData(data))
  }, [])
  return (
        <>
  <Helmet>
  <title>home - Decouvrez le portfolio de Antoine </title>
  <meta name="description" content="Découvrez le portfolio de Antoine.M" />
  </Helmet>
      {/* HERO */}
      <section style={{
        backgroundImage: "url('/images/hero-perso.png')",
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
          <h1 className="text-white display-4 fw-bold">Bonjour, je suis Antoine</h1>
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
            <img src="/images/avatar-AM.png" alt="Avatar Antoine" className="img-fluid mb-3" />
            <p>Mon prénom est Antoine. Actuellement en formation de développeur web et web mobile full stack via le Centre Européen de Formation, je suis cette formation depuis le 2 janvier 2026. <br />
               Issu d'une formation de conducteur poids lourds, je me suis assez vite rendu compte que je n'aimais pas plus que ça ce métier. Mes débuts dans le milieu professionnel commencent à mes 18 ans après l'obtention de mes permis PL et mon BEP conduite et services dans le transport routier. <br />
               J'enchaîne quelques CDD et finis par trouver un CDI pour un travail de livraison de pièces auto de nuit. Après quelques années, nous subissons un licenciement économique. Je pars alors vivre dans le Jura pour travailler dans une usine de menuiserie. Après un an, je termine mon CDD et rentre dans ma région d'origine. J'enchaîne quelques missions d'intérim (La Poste…) puis trouve un CDI en qualité de chauffeur poids lourds grue auxiliaire chez un grossiste dans le bâtiment. <br />
               Je reste chauffeur pendant 2-3 ans avant d'évoluer au sein de la société en tant que magasinier vendeur comptoir. Je resterai finalement 8 ans dans cette société. Ayant envie d'autre chose, de responsabilités, d'évolution, de nouveaux challenges et d'une meilleure rémunération, je postule à un poste de responsable qui ne me sera finalement pas accordé. <br />
               Je réfléchis, je gamberge, et je me dis qu'il est temps de ne plus subir ma vie professionnelle et de faire quelque chose qui me plaît. C'est alors que je m'oriente naturellement vers ce qui me passionne depuis ma plus tendre enfance : l'informatique. Passionné mais sans connaissance du milieu ni de la programmation — je suis un geek de base, et tant que mes machines fonctionnent et font tourner mes jeux, mes connaissances en informatique n'ont pas besoin de s'étendre. <br />
               Alors je me challenge, j'apprends avec mes cours mais aussi seul de mon côté. J'essaie, je casse, je recommence, je ne comprends pas, je doute, mais je continue — je lis, me renseigne et utilise tous les outils à ma disposition. <br />
               Voici donc mon portfolio personnel de mes projets. Le chemin est encore long et certainement semé d'embûches, mais l'arrivée n'en sera que meilleure.
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
