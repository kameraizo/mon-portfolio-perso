  import { Helmet } from 'react-helmet-async'
  
 const CardServices = (props) => {
      return (
        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <div className="mb-3">
                <i className={`bi ${props.icon} fs-1 text-primary`}></i>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.text}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }

export default function Services() {
  return (
  <div style={{paddingTop: "56px"}}>
      <Helmet>
        <title>services - Descriptions des prestations</title>
        <meta name="description" content="Découvrez les services proposés par John Doe : UX Design, développement web et référencement." />
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
        <h1>Mon offre de services</h1>
         <p>Voici les prestations sur les quelles
          je peux intervenir
         </p>
         <hr className="section-divider"/>
      </div>
      {/*cards*/}
<div className="container" style={{marginBottom: "80px", marginTop: "20px"}}>   
  <div className="row">

    {/*card1*/}
        <CardServices
        icon="bi-code-slash"
        title="Création de sites web"
        text="Sites vitrines et applications web sur-mesure, du design à la mise en ligne : maquettage,
         développement front/back, hébergement et nom de domaine."
        />

        {/*card2*/}
        <CardServices
        icon="bi-tools"
        title="Maintenance & Support IT"
        text="Suivi technique, mises à jour, corrections de bugs et support informatique pour artisans et
         commerçants — pour que votre site et vos outils numériques restent fiables au quotidien."
        />

        {/*card3*/}
        <CardServices
        icon="bi-camera-reels"
        title="Vidéo & Motion Design Publicitaire"
        text="Création de vidéos publicitaires et de motion design pour mettre en valeur votre activité sur
         les réseaux sociaux, avec une production rapide et sur-mesure."
        />
  </div>
</div> 
  </div>

  ) 
}