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
          <title>Mentions - Descriptions des mentions</title>
          <meta name="description" content="Découvrez les mentions légales de la page" />
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
        <hr className="section-divider"/>
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

          <AccordionItem id="section3" title="Crédits">
            <strong><p>Crédits</p></strong>
            <p>Ce site a été créé par Antoine Mullatier, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de Formation</a></p>
            <p>Les images utilisées sont libres de droit et ont été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a></p>
            <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/">john doe icons erstellt von freepik - flaticon</a></p>
          </AccordionItem>
          </div>
      </div>
    </div>
  )
}