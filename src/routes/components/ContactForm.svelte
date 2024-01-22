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

<div class="contact-area mtb-192">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="title-2">Get <span>in Touch</span></h2>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="contact-content">
          <img src="/img/logo.svg" alt="logo" />
          <p>
            OpenAI presented Assistify with a range of challenging tasks, featuring tight latency
            requirements, substantial ambiguity, and instances of incorrect answers. In turn,
            Assistify collaborated closely to tailor their QA systems to our specific
            requirements.
          </p>
          <h3>John Lawson</h3>
          <h4>Member of Technical Staff</h4>
          <h5>Trusted by the world's most ambitious teams</h5>
          <div class="contact-brand">
            <img src="/img/brand/1.png" alt="brand" />
            <img src="/img/brand/2.png" alt="brand" />
            <img src="/img/brand/3.png" alt="brand" />
            <img src="/img/brand/4.png" alt="brand" />
            <img src="/img/brand/5.png" alt="brand" />
            <img src="/img/brand/6.png" alt="brand" />
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="contact-form">
          <h2>Quick Responses Await!</h2>
          <p>
            Connect with us! Feel free to ask any questions or share your thoughts. We'll respond
            promptly.
          </p>
          <form on:submit|preventDefault={submitForm}>
            <div class="form-group">
              <div class="input-group">
                <input bind:value={firstName} type="text" placeholder="First Name*" required />
                <input bind:value={lastName} type="text" placeholder="Last Name*" required />
              </div>
              <div class="input-group">
                <input bind:value={companyName} type="text" placeholder="Company Name*" required />
                <input bind:value={jobTitle} type="text" placeholder="Job Title*" required />
              </div>
              <div class="input-group">
                <input bind:value={email} type="email" placeholder="Email Address*" required />
                <input bind:value={phoneNumber} type="text" placeholder="Phone Number*" required />
              </div>
              <input bind:value={message} type="text" placeholder="How can we help?" required />
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
