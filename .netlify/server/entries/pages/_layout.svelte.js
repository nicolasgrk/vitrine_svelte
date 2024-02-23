import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "ul.svelte-16k3aqy{margin:0;padding:0;list-style-type:none}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `     <header><div class="desktop-header" data-svelte-h="svelte-1scurk4"><div class="container-fluid"><div class="row align-items-center"><div class="col-md-2"><a href="/"><img src="/img/logo.svg" alt="logo"></a></div> <div class="col-md-8"><nav><ul class="svelte-16k3aqy"><li><a href="/">Accueil</a></li> <li><a href="/#about">A propos</a></li> <li><a href="/#expertise">Expertise</a></li> <li><a href="/#projets">Projets</a></li> <li><a href="/#procedure">Procédure</a></li></ul></nav></div> <div class="col-md-2 text-end"><a href="/#contact" class="btn btn-primary">Contactez-moi !</a></div></div></div></div> <div class="mobile-header"><a href="/" data-svelte-h="svelte-1796zqd"><img src="/img/logo.svg" alt="logo"></a> <span class="mobile-menu-open-icon" data-svelte-h="svelte-yqlzdi"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></span> <div class="${["mobile-menu", ""].join(" ").trim()}"><strong class="mobile-menu-close-icon" data-svelte-h="svelte-6y3ajg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"></path></svg></strong> <nav><ul class="svelte-16k3aqy"><li data-svelte-h="svelte-1q70977"><a href="/">Accueil</a></li> <li data-svelte-h="svelte-1befd6n"><a href="/#about">A propos</a></li> <li data-svelte-h="svelte-1gai52e"><a href="/#expertise">Expertise</a></li> <li data-svelte-h="svelte-h908o2"><a href="/#projets">Projets</a></li> <li data-svelte-h="svelte-8td96m"><a href="/#procedure">Procédure</a></li></ul></nav> <a href="/#contact" class="btn btn-primary" data-svelte-h="svelte-1xhzdi0">Contactez-moi !</a></div></div></header>`;
});
const css = {
  code: "ul.svelte-16k3aqy{margin:0;padding:0;list-style-type:none}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer data-svelte-h="svelte-jm6eh0"><div class="container"><div class="row"><div class="col-md-12 text-center"><img src="/img/logo.svg" alt="logo"> <p class="mx-850 text-center"><strong>Mail:</strong> nicolasgurak@gmail.com</p> <p class="mx-850 text-center"><strong>Téléphone:</strong> 0786103059</p> <p class="mx-850 text-center">Basé à Rennes 35000, France</p></div></div></div> <div class="footer-copyright"><div class="container"><div class="row gy-2"><div class="col-md-6 align-self-center"><p>Copyright © 2024 NicolasGurak. Tout droits résérvés.</p></div> <div class="col-md-6"><ul class="svelte-16k3aqy"><li><a href="/terms-of-service">Conditions d&#39;utilisation</a></li> <li><a href="/privacy-policy">Politique de confidentialité</a></li></ul></div></div></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
