<script>
  export let img = '';
  export let title = '';
  export let content = '';
  export let link = '';
</script>

<div class="col-md-6 col-lg-4">
  <div class="feature-item">
    <img src={`/img/icon/${img}.svg`} alt="icon" width="80" height="80" />
    <h3>{title}</h3>
    <p>{content}</p>
    {#if link !== ''}
    <a href={`/${link}`} class:btn={link !== ''}>View examples</a>
  {/if}
  </div>
</div>
