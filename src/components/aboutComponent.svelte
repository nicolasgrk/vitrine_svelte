<script>
  export let title = '';
  export let subtitle = '';
  export let content = '';
  export let content2 = '';

</script>

<div class="hero-area">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="title">
          {title}
          <span> {subtitle}</span>
        </h1>
        <br/>

        <p class="mx-850 text-center">{content}</p>
        <br/>
        <br/>
        <p class="mx-850 text-center">{content2}</p>
      </div>
    </div>
  </div>
</div>
