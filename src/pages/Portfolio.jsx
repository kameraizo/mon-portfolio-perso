  import { Helmet } from 'react-helmet-async'
const CardPortfolio = (props) => {
return (
<div className="col-12 col-md-4 mb-4">
 <div className="card h-100 portfolio-card">
<div className="portfolio-card-strip" aria-hidden="true"></div>
<div className="portfolio-card-frame">
{props.video ? (
<video src={props.video} className="card-img-top" autoPlay loop muted playsInline style={{ height: "200px", width: "100%", objectFit: "cover" }}/>
) : (
<img src={props.src} className="card-img-top" alt={props.alt} style={{ height: "200px", objectFit: "cover" }}/>
)}
</div>
<div className="card-body text-center">
<h2 className="card-title">{props.title} </h2>
<p>{props.text}</p>
{props.link && <a href={props.link} className="btn btn-primary">Voir le site</a>}
</div>
<div className="portfolio-card-scrub" aria-hidden="true"></div>
<div className="card-footer text-center">
<small className="text-muted">
{props.real}
</small>
</div>
</div>
</div>
);
}

export default function Portfolio() {
  return (
  <div style={{paddingTop: "56px"}}>
  <Helmet>
      <title>Portfolio - Descriptions des réalisations</title>
      <meta name="description" content="Découvrez le portfolio de John Doe" />
  </Helmet>

    {/*banner*/}
    <section style={{
      backgroundImage: "url('/images/banniere2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "300px",}}>
    </section>
    {/*titre*/}
      <div style={{textAlign: "center"}}>
        <h1>Portfolio</h1>
         <p>Voici quelques-unes de mes réalisations</p>
         <hr className="section-divider"/>
      </div>
      {/*cards*/}
      <div className="container" style={{marginBottom: "80px", marginTop: "20px"}}>
        <div className="row">
          {/*card 1*/}
          <CardPortfolio
          video="/vidéos/pub-devpro.mp4"
          alt="Pub DevPro"
          title="Pub DevPro"
          text="Vidéo publicitaire créée pour DevPro, réalisée avec mon pipeline de motion design"
          real="motion design"
          link="https://devpro-artisan.netlify.app/"
          />
          {/*card 2*/}
          <CardPortfolio
          src="/images/channels4_profile.jpg"
          alt="Mystères & Récits"
          title="Mystères & Récits"
          text="Chaîne YouTube, création de contenu"
          real="YouTube"
          link="https://www.youtube.com/channel/UCyvIybmVFHE3IAxBQ-xENGQ"
          />
          {/*card 3*/}
          <CardPortfolio
          src="/images/couverture_facebook_artisan_web.png"
          alt="L'artisan web"
          title="L'artisan web"
          text="Création de ma société L'artisan web"
          real="Facebook"
          link="https://www.facebook.com/profile.php?id=61592667996281"
          />
          {/*card 4*/}
          <CardPortfolio
          src="/images/DEVPRO.png"
          alt="formulaire DEVPRO"
          title="Devpro"
          text="Site de formulaire en ligne pour des devis de particuliers à des artisans"
          real="Site réalisé en HTML"
          link="https://devpro-artisan.netlify.app/"
          />
          {/*card 5*/}
          <CardPortfolio
          src="/images/f1.jpg"
          alt="Dashboard F1"
          title="dashboard F1"
          text="Site de résultats de F1 en temps réel, créé par un fan de F1 pour les fans de F1, gratuit, sans abonnement, sans pub"
          real="Site réalisé avec React + Vite"
          link="https://f1-dashboard-v1j5.onrender.com/"
          />
          {/*card 6*/}
          <CardPortfolio
          src="/images/BDD.png"
          alt="Base de données (projet d'études)"
          title="BDD"
          text="Création d'une base de données"
          real="Site réalisé avec MySQL"
          link="https://github.com/kameraizo/tifosi"
          />
          {/*card 7*/}
          <CardPortfolio
          src="/images/3333333.png"
          alt="Maquette d'un site web (projet d'études)"
          title="Maquette d'un site web"
          text="Création d'un prototype d'un site"
          real="Site réalisé avec Figma"
          link="https://www.figma.com/design/bVNhmas0r91G74g1uTMcME/Sans-titre?node-id=3-72&p=f&t=59pw2EM1zDCQd6cO-0"
          />
          {/*card 8*/}
          <CardPortfolio
          src="/images/coder.jpg"
          alt="Création d'une API (projet d'études)"
          title="Port de plaisance Port-Russell"
          text="Création d'une API REST de gestion des réservations d'un port de plaisance, sécurisée par JWT"
          real="Site réalisé avec Node.js/Express/MongoDB"
          link="https://port-russel-7pop.onrender.com"
          />
          {/*card 9*/}
          <CardPortfolio
          src="/images/sms-scam.png"
          alt="Avant de cliquer"
          title="Avant de cliquer"
          text="Site alertant sur les arnaques aux SMS. 1ère création"
          real="Site réalisé en HTML et CSS"
          link="https://kameraizo.github.io/avant_de_cliquer/"
          />

        </div>
      </div>
  </div> 
  ) 
}