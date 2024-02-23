

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
          <form  name= "contact" method="POST" >
            <div class="form-group">
              <div class="input-group">
                <input type="text" placeholder="Prénom*" required  name="firstname"/>
                <input type="text" placeholder="Nom*" required name="lastname"/>
              </div>
              <div class="input-group">
                <input  type="text" placeholder="Entreprise" name="entreprise"/>
              </div>
              <div class="input-group">
                <input  type="email" placeholder="Adresse e-mail*" required name="email"/>
                <input  type="text" placeholder="Téléphone*" required name="tel"/>
              </div>
              <input  type="text" placeholder="Décrivez votre projet" name="message" required />
            </div>
            <div class="form-check">
              <input  class="form-check-input" type="checkbox" id="flexCheckDefault" required />
              <label for="flexCheckDefault">J'ai lu et accepté les termes et conditions, la politique de confidentialité.</label>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form[name="contact"]');
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Empêcher l'envoi classique du formulaire
  
      // Création de l'objet FormData à partir du formulaire
      const formData = new FormData(form);
  
      // Envoi des données du formulaire avec fetch
      fetch('https://nicolasgurakapi.000webhostapp.com/sendmail.php', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json()) // Assurez-vous de traiter la réponse en tant que JSON
      .then(data => {
        if(data.status === 'success') {
          alert(data.message); // Message de succès
        } else {
          alert(data.message); // Message d'erreur ou autre feedback
        }
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
      });
    });
  });
  </script>
  