<script>
  export let img = '';
  export let title = '';
  export let content = '';
  export let link = '';
</script>

<div class="col-md-6 col-lg-4">
  <div class="feature-item">
    <img src={`/img/mockup/${img}.png`} alt="icon"   class="mockup" />
    <h3>{title}</h3>
    <p>{content}</p>
    {#if link !== ''}
    <a href={`${link}`} class:btn={link !== ''} class="btn-secondary">Visiter le site</a>
  {/if}
  </div>
</div>
