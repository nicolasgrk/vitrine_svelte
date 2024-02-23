import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { B as Brand } from "../../../chunks/Brand.js";
const Newsletter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container" data-svelte-h="svelte-cs5927"><div class="row"><div class="col-md-12"><div class="ready-section"><h2 class="title-2">Ready to <span>Begin?</span></h2> <p>Embark on the journey of creating your very own AI-powered assistant effortlessly.</p> <a href="/contact" class="btn btn-primary">Get Started</a></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<aboutComponent title="A propos" subtitle="de moi" content="En tant que développeur web freelance, je transforme vos idées en solutions numériques innovantes. Mon expertise en développement web s'étend sur plusieurs années, durant lesquelles j'ai acquis la capacité de créer des sites web qui allient fonctionnalité, esthétique et facilité d'utilisation." content2="Que vous cherchiez à lancer un nouveau site web pour votre entreprise, à améliorer un site web existant, ou à créer une application web unique, je suis là pour vous aider à atteindre vos objectifs."></aboutComponent> ${validate_component(Brand, "Brand").$$render($$result, {}, {}, {})} <div class="mt-192">${validate_component(Newsletter, "Newsletter").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
