import { c as create_ssr_component } from "../../chunks/ssr.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="error-area" data-svelte-h="svelte-1kywnqm"><div class="container"><div class="row"><div class="col-md-12"><h2 class="title-2"><span>404.</span></h2> <h3>Cette page n&#39;existe pas</h3> <p>Oops! Il semble que vous vous soyez aventuré en territoire inexploré
          Retournez en lieu sûr !</p> <a href="/" class="btn btn-primary">Accueil</a></div></div></div></div>`;
});
export {
  Error as default
};
