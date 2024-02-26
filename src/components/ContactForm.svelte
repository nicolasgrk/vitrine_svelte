<script>
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://nicolasgurak-fr.preview-domain.com/', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        alert('Email envoyé avec succès !'); // Utiliser une méthode plus sophistiquée dans une application réelle
      } else {
        alert('Erreur lors de l\'envoi de l\'email.');
      }
    } catch (error) {
      alert('Erreur lors de la connexion au serveur.');
    }
  }
</script>

<div class="contact-area mtb-192" >
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="title-2">Me <span>contacter</span></h2>
      </div>
      <div class="col-md-12 col-lg-12">
        <div class="contact-form" id="contact">
          <h2>Transformons Vos Idées en Réalité !</h2>
          <p>
            Votre projet mérite une attention sur-mesure. Contactez-moi dès maintenant pour le concrétiser ensemble !
          </p>
          <form name="contact" action="https://nicolasgurak-fr.preview-domain.com/" method="post" on:submit={handleSubmit}>
            <div class="form-group">
              <div class="input-group">
                <input type="text" placeholder="Prénom*" required name="firstname" />
                <input type="text" placeholder="Nom*" required name="lastname" />
              </div>
              <div class="input-group">
                <input type="text" placeholder="Entreprise" name="entreprise" />
              </div>
              <div class="input-group">
                <input type="email" placeholder="Adresse e-mail*" required name="email" />
                <input type="text" placeholder="Téléphone*" required name="tel" />
              </div>
              <input type="text" placeholder="Décrivez votre projet" name="message" required />
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckDefault" required />
              <label for="flexCheckDefault">J'ai lu et accepté les termes et conditions, la politique de confidentialité.</label>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</div>
