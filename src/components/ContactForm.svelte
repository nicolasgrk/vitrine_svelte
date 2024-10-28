<script>
  // Fonction pour encoder les données du formulaire
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Vérifier le champ honeypot pour les robots
    if (data['bot-field']) {
      // Si le champ est rempli, c'est un robot, on arrête la soumission
      return;
    }
    delete data['bot-field'];

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': form.getAttribute('name'), ...data }),
      });

      if (response.ok) {
        // Réinitialiser le formulaire après soumission réussie
        form.reset();
        alert('Votre message a été envoyé avec succès.');
      } else {
        alert("Erreur lors de l'envoi du formulaire.");
      }
    } catch (error) {
      alert('Erreur lors de la connexion au serveur.');
    }
  }
</script>

<div class="contact-area mtb-192">
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
          <form
            name="contact"
            netlify
            netlify-honeypot="bot-field"
            on:submit={handleSubmit}
          >
            <!-- Champ caché requis pour Netlify -->
            <input type="hidden" name="form-name" value="contact" />

            <!-- Champ honeypot pour les robots -->
            <p class="hidden">
              <label>
                Ne remplissez pas ce champ si vous êtes humain : <input name="bot-field" />
              </label>
            </p>

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
              <textarea placeholder="Décrivez votre projet" name="message" required></textarea>
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

<style>
  .hidden {
    display: none;
  }
</style>
