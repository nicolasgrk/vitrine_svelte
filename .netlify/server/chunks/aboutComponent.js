import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
const AboutComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { content = "" } = $$props;
  let { content2 = "" } = $$props;
  let { id = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.content2 === void 0 && $$bindings.content2 && content2 !== void 0)
    $$bindings.content2(content2);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div class="hero-area"><div class="container"><div class="row"${add_attribute("id", id, 0)}><div class="col-md-12"><h1 class="title">${escape(title)} <span>${escape(subtitle)}</span></h1> <br> <p class="mx-850 text-center">${escape(content)}</p> <br> <br> <p class="mx-850 text-center">${escape(content2)}</p></div></div></div></div>`;
});
export {
  AboutComponent as A
};
