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
        <title>services - Déscriptions des prestations</title>
        <meta name="description" content="Découvrez les services proposés par John Doe : UX Design, développement web et référencement." />
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
        <h1>Mon offre de services</h1>
         <p>Voici les prestations sur les quelles
          je peux intervenir
         </p>
         <hr style={{color:"blue", borderWidth: "3px", width: "20%", margin: "auto", }}/>
      </div>
      {/*cards*/}
<div className="container" style={{marginBottom: "80px", marginTop: "20px"}}>   
  <div className="row">

    {/*card1*/}
        <CardServices
        icon="bi-brush"
        title="UX Design"
        text="Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis."
        />

        {/*card2*/}
        <CardServices
        icon="bi-code-slash"
        title="Developpement web"
        text="Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis."
        />

        {/*card3*/}
        <CardServices
        icon="bi-search"
        title="Référencement"
        text="Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel
               commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent,
                tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis."
        />
  </div>
</div> 
  </div>

  ) 
}