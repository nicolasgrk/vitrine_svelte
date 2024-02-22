<script>
  let firstName = '';
  let lastName = '';
  let companyName = '';
  let jobTitle = '';
  let email = '';
  let phoneNumber = '';
  let message = '';
  let acceptTerms = false;

  const submitForm = () => {
    // Handle form submission logic here
    // Access form data using firstName, lastName, etc.
    // You can send the data to your backend or perform other actions.
  };
</script>

<div class="contact-area mtb-192" id="contact">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="title-2">Me <span>contacter</span></h2>
      </div>
      <div class="col-md-12 col-lg-12">
        <div class="contact-form">
          <h2>Transformons Vos Idées en Réalité !</h2>
          <p>
            Votre projet mérite une attention sur-mesure. Contactez-moi dès maintenant pour le concrétiser ensemble !
          </p>
          <form on:submit|preventDefault={submitForm}>
            <div class="form-group">
              <div class="input-group">
                <input bind:value={firstName} type="text" placeholder="Prénom*" required />
                <input bind:value={lastName} type="text" placeholder="Nom*" required />
              </div>
              <div class="input-group">
                <input bind:value={companyName} type="text" placeholder="Entreprise" />
              </div>
              <div class="input-group">
                <input bind:value={email} type="email" placeholder="Adresse e-mail*" required />
                <input bind:value={phoneNumber} type="text" placeholder="Téléphone*" required />
              </div>
              <input bind:value={message} type="text" placeholder="Décrivez votre projet" required />
            </div>
            <div class="form-check">
              <input bind:checked={acceptTerms} class="form-check-input" type="checkbox" id="flexCheckDefault" required />
              <label for="flexCheckDefault">I read and accept terms and conditions, privacy policy.</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
