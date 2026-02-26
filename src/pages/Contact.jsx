import { Helmet } from 'react-helmet-async'
import CoordItem from '../components/CoordItem'
const InputField = (props) => {
  return (
    <div className="mb-3">
      <input type={props.type} className="form-control" placeholder={props.placeholder} required />
    </div>

  );
};

export default function Contact() {
  return (
  <div style={{paddingTop: "56px"}}>
        <Helmet>
            <title>Contact - Prenez contact avec John Doe </title>
            <meta name="description" content="Prendre contact avec John Doe" />
        </Helmet>
      <div style={{textAlign: "center"}}>
        <h1><strong>Contact</strong></h1>
        <p>pour me contacter en vue d'un entretien ou d'une future
          collaboration, merci de remplir le formulaire de contact.
        </p>
        <hr style={{color:"blue", borderWidth: "3px", width: "20%", margin: "auto", }}/>
      </div>

      {/*cdre pour formulaire et coordonnées*/}
    <div className="container" style={{marginBottom: "80px", marginTop: "20px"}}>
      <div className="row shadow-sm border" style={{margin:"30px",paddingTop:"30px", }}>

        {/*formulaire de contact*/}
          <div className="col-md-6">
            <h2>Formulaire de contact</h2>
            <hr style={{color:"blue", borderWidth: "3px", width: "95%", marginLeft: "0", }}/>
            <InputField type="text" placeholder="Votre Nom" />
            <InputField type="email" placeholder="Votre adresse Email" />
            <InputField type="text" placeholder="Votre numéro de téléphone" />
            <InputField type="text" placeholder="sujet" />
            <div className="mb-3">
              <textarea className="form-control" placeholder="Votre message" rows="5" required></textarea>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-primary">Envoyer</button>
            </div>
          </div>

      {/*coordonnées*/}
          <div className="col-md-6">
            <h2>Mes coordonnées</h2>
            <hr style={{color:"blue", borderWidth: "3px", width: "95%", marginLeft: "0", }}/>
            <strong>John Doe</strong>
            <CoordItem icon="bi bi-pin-map" text="40 rue Laure Diebold" />
            <CoordItem icon="bi bi-geo-alt" text="69009 Lyon France" />
            <CoordItem icon="bi bi-telephone" text="10 20 30 40 50" />
            <CoordItem icon="bi bi-envelope" text="john.doe@gmail.com" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6181904843743!2d4.798270794097235!3d45.7788415540099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2snl!4v1772015237575!5m2!1sfr!2snl"
              width="100%" height="450" style={{border:0}} allowFullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
          </div>
      </div>
  </div>
        

  )
}