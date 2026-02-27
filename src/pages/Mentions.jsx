import CoordItem from '../components/CoordItem'
import { Helmet } from 'react-helmet-async'

const AccordionItem = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.id}`}>
          {props.title}
        </button>
      </h2>
      <div id={props.id} className="accordion-collapse collapse">
        <div className="accordion-body">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default function Mentions() {
  return (
    <div style={{paddingTop: "56px"}}>
       <Helmet>
          <title>Mentions - Déscriptions des mentions</title>
          <meta name="description" content="Découvrez les mentions legales de la page" />
        </Helmet>
      <Helmet>
        <meta name="robots" content="noindex" />
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
        <h1><strong>Mentions légales</strong></h1>
        <hr style={{color:"blue", borderWidth: "3px", width: "20%", margin: "auto", }}/>
      </div>
      <div className="container" style={{marginBottom: "80px", marginTop: "20px"}}>
        <div className="accordion">
        <AccordionItem id="section1" title="Editeur du site">
          <strong><p>Antoine Mullatier</p></strong>
          <CoordItem icon="bi bi-pin-map" text="#" />
          <CoordItem icon="bi bi-geo-alt" text="#" />
          <CoordItem icon="bi bi-telephone" text="#" />
          <CoordItem icon="bi bi-envelope" text="kameraizo69@gmail.com"/>
          </AccordionItem>
          

        <AccordionItem id="section2" title="Hébergeur">
          <strong><p>#</p></strong>
          <p>#</p>
          <CoordItem icon="bi bi-globe" text={<a href="#">#</a>}/>
          </AccordionItem>

          <AccordionItem id="section3" title="credits">
            <strong><p>Credits</p></strong>
            <p>ce site a ete cree par Antoine Mullatier, etudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation</a></p>
            <p>les images utilisées sont libre de droit et on ete obtenu sur le site <a href="https://pixabay.com/fr/">pixabay</a></p>
            <p>La favicon de ce site a ete fournis par <a href="https://www.flaticon.com/">john doe icons erstellt von freepik - flaticon</a></p>
          </AccordionItem>
          </div>
      </div>
    </div>
  )
}