  import { Helmet } from 'react-helmet-async'
const CardPortfolio = (props) => {
return ( 
<div className="col-12 col-md-4 mb-4">
 <div className="card h-100 shadow-sm">
<img src={props.src} className="card-img-top" alt={props.alt}/>
<div className="card-body text-center">
<h2 className="card-title">{props.title} </h2>
<p>{props.text}</p>
<a href="#" className="btn btn-primary">voir le site</a>
</div>
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
      <title>Portfolio - Déscriptions des realisations</title>
      <meta name="description" content="Découvrez les le porfolio de John Doe" />
  </Helmet>

    {/*banner*/}
    <section style={{
      backgroundImage: "url('/images/banner.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "300px",}}>
    </section>
    {/*titre*/}
      <div style={{textAlign: "center",color: "black" }}>
        <h1>Portfolio</h1>
         <p>Voici quelques-unes de mes réalisations</p>
         <hr style={{color:"blue", borderWidth: "3px", width: "20%", margin: "auto", }}/>
      </div>
      {/*cards*/}
      <div className="container" style={{marginBottom: "80px", marginTop: "20px"}}>
        <div className="row">
          {/*card 1*/}
          <CardPortfolio
          src="/images/fresh-food.jpg"
          alt="Fresh food"
          title="Fresh food"
          text="site de vente de produits frais en ligne"
          real="Site realiser avec PHP et MySQL"
          />
          {/*card 2*/}
          <CardPortfolio
          src="/images/restaurant-japonais.jpg"
          alt="Restaurant Akira"
          title="Restaurant Akira"
          text="Site de vente de sushi en ligne"
          real="Site realiser avec WORDPRESS"
          />
          
          {/*card 3*/}
          <CardPortfolio
          src="/images/espace-bien-etre.jpg"
          alt="Espace bien etre"
          title="Espace bien etre"  
          text="Site d'espace bien etre en ligne"
          real="Site realiser avec Laravel"
          />
          {/*card 4*/}
          <CardPortfolio
          src="/images/seo.jpg"
          alt="SEO"
          title="SEO"
          text="Site de e-commerce"
          real="Site realiser avec SEO"
          />
          {/*card 5*/}
          <CardPortfolio
          src="/images/coder.jpg"
          alt="Creation d'une API"
          title="Creation d'une API"
          text="Creation d'une API RESTFULL publique"
          real="Site realiser avec SYMFONY"
          />
          {/*card 6*/}
          <CardPortfolio
          src="/images/screens.jpg"
          alt="Maquette d'un site web"
          title="Maquette d'un site web"
          text="creation d'un prototype d'un site"
          real="Site realiser avec Figma"
          />


        </div>
      </div>
  </div> 
  ) 
}