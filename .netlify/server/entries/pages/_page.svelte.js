import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { A as AboutComponent } from "../../chunks/aboutComponent.js";
import { B as Brand } from "../../chunks/Brand.js";
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="contact-area mtb-192" data-svelte-h="svelte-14dqh3s"><div class="container"><div class="row"><div class="col-md-12"><h2 class="title-2">Me <span>contacter</span></h2></div> <div class="col-md-12 col-lg-12"><div class="contact-form" id="contact"><h2>Transformons Vos Idées en Réalité !</h2> <p>Votre projet mérite une attention sur-mesure. Contactez-moi dès maintenant pour le concrétiser ensemble !</p> <form name="contact" method="POST" data-netlify="true"><div class="form-group"><div class="input-group"><input type="text" placeholder="Prénom*" required name="firstname"> <input type="text" placeholder="Nom*" required name="lastname"></div> <div class="input-group"><input type="text" placeholder="Entreprise" name="entreprise"></div> <div class="input-group"><input type="email" placeholder="Adresse e-mail*" required name="email"> <input type="text" placeholder="Téléphone*" required name="tel"></div> <input type="text" placeholder="Décrivez votre projet" name="message" required></div> <div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault" required> <label for="flexCheckDefault">J&#39;ai lu et accepté les termes et conditions, la politique de confidentialité.</label></div> <button type="submit" class="btn btn-primary">Envoyer</button></form></div></div></div></div></div>`;
});
const FeatureItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img = "" } = $$props;
  let { title = "" } = $$props;
  let { content = "" } = $$props;
  let { link = "" } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<div class="col-md-6 col-lg-4"><div class="feature-item"><img${add_attribute("src", `/img/mockup/${img}.png`, 0)} alt="icon" width="500" class="mockup"> <h3>${escape(title)}</h3> <p>${escape(content)}</p> ${link !== "" ? `<a${add_attribute("href", `${link}`, 0)} class="${["btn-secondary", link !== "" ? "btn" : ""].join(" ").trim()}">Visiter le site</a>` : ``}</div></div>`;
});
const CardComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="feature-area mt-100" data-svelte-h="svelte-8at71w"><div class="container"><div class="row gy-4"><div class="col-md-4"><div class="feature-item"><img src="/img/icon/1.svg" alt="icon"> <h3>Innovation numérique</h3> <p>Transformation de visions en réalités digitales captivantes et avant-gardistes.</p></div></div> <div class="col-md-4"><div class="feature-item"><img src="/img/icon/2.svg" alt="icon"> <h3>Expertise technique</h3> <p>Compétences avancées dans l&#39;élaboration de solutions web optimisées et sécurisées.</p></div></div> <div class="col-md-4"><div class="feature-item"><img src="/img/icon/3.svg" alt="icon"> <h3>Collaboration client</h3> <p>Engagement à forger des partenariats solides pour concrétiser vos ambitions numériques.</p></div></div></div></div></div>`;
});
const css = {
  code: ".center.svelte-1w2g175{width:100%;height:fit-content;display:flex;align-items:center;justify-content:center;flex-direction:column}.stack-area.svelte-1w2g175{width:100%;height:300vh;position:relative;display:flex;justify-content:center}.right.svelte-1w2g175,.left.svelte-1w2g175{height:80vh;display:flex;align-items:center;justify-content:center;position:sticky;top:0;box-sizing:border-box;flex-basis:50%}.cards.svelte-1w2g175{width:100%;height:100%;position:relative}.card.svelte-1w2g175{width:350px;height:350px;box-sizing:border-box;padding:35px;border-radius:6mm;display:flex;justify-content:space-between;flex-direction:column;position:absolute;top:50%;left:50%;transition:0.5s ease-in-out}.card.svelte-1w2g175:nth-child(1){background:rgb(95, 51, 255);z-index:4}.card.svelte-1w2g175:nth-child(2){background:rgb(58, 188, 150);z-index:3}.card.svelte-1w2g175:nth-child(3){background:rgb(255, 134, 93);z-index:2}.card.svelte-1w2g175:nth-child(4){background:rgb(124, 194, 215);z-index:1}.sub.svelte-1w2g175{font-size:20px;font-weight:700}.cardContent.svelte-1w2g175{font-size:35px;font-weight:700;line-height:54px}.left.svelte-1w2g175{align-items:center;flex-direction:column}.sub-title.svelte-1w2g175{width:420px}@media screen and (max-width: 800px){.left.svelte-1w2g175{position:relative;width:100vw}}",
  map: null
};
const Expertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="center svelte-1w2g175" data-svelte-h="svelte-je3pfa"><div class="stack-area svelte-1w2g175"><div class="left svelte-1w2g175"><h1 class="title" id="expertise">Notre <br> <span>Expertise</span></h1> <div class="sub-title svelte-1w2g175">Je propose une gamme variée de services pour répondre à vos besoins en matière de présence en ligne. Chaque service est conçu pour vous aider à atteindre vos objectifs spécifiques et à maximiser votre impact numérique.</div></div> <div class="right svelte-1w2g175"><div class="cards svelte-1w2g175"><div class="card svelte-1w2g175"><div class="sub svelte-1w2g175">Développement</div> <div class="cardContent svelte-1w2g175">Développement de sites web</div></div> <div class="card svelte-1w2g175"><div class="sub svelte-1w2g175">Refonte</div> <div class="cardContent svelte-1w2g175">Refonte de site web</div></div> <div class="card svelte-1w2g175"><div class="sub svelte-1w2g175">Applications</div> <div class="cardContent svelte-1w2g175">Développement d&#39;applications web</div></div> <div class="card svelte-1w2g175"><div class="sub svelte-1w2g175">Support</div> <div class="cardContent svelte-1w2g175">Maintenance et support</div></div></div></div></div></div>`;
});
const MainHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="hero-area" data-svelte-h="svelte-11ifecq"><div class="container"><div class="row"><div class="col-md-12"><h1 class="title">L&#39;artisan de votre<br> <span>succès en ligne</span></h1> <p class="mx-850 text-center">Sites vitrines, E-commerce, et plus encore pour valoriser votre marque.</p> <div class="hero-btn"><a href="#about" class="btn btn-tertiary">Découvrir</a> <a href="#contact" class="btn btn-primary">Contactez-moi !</a></div></div></div></div></div>`;
});
const Procedures = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="faq-area mx-850 mtb-192 mx-auto" data-svelte-h="svelte-v17bre"><div class="container"><div class="row"><div class="col-md-12"><h2 class="title-2" id="procedure">Mes <span>procedures</span></h2> <div class="accordion" id="accordionInner"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Analyse de Vos Besoins Personnalisée</button></h2> <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionInner"><div class="accordion-body">Nous commençons par un entretien individuel pour comprendre en profondeur vos besoins, vos souhaits et vos objectifs. Cette étape essentielle constitue la base solide sur laquelle nous construisons votre projet, évitant ainsi les malentendus ultérieurs.</div></div></div> <div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Conception Initiale</button></h2> <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionInner"><div class="accordion-body">Je travaille sur la création d&#39;une première maquette du projet, vous permettant de visualiser rapidement le concept de manière réaliste. Nous nous assurons ainsi que nous sommes sur la même longueur d&#39;onde en termes de conception et de fonctionnalités.</div></div></div> <div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Communication active et transparente</button></h2> <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionInner"><div class="accordion-body">Tout au long du projet, je maintiens une communication continue avec vous. Je vous tiens régulièrement informé(e) des progrès réalisés et sollicite vos retours. Cette approche proactive garantit que votre projet évolue en adéquation avec vos attentes, permettant de résoudre tout problème potentiel dès le départ.</div></div></div> <div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Livraison</button></h2> <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionInner"><div class="accordion-body">Je vous organise une présentation finale, où nous examinons attentivement chaque aspect du projet. Je m&#39;assure que toutes les fonctionnalités et les détails convenus initialement sont parfaitement mis en place. Votre satisfaction reste ma priorité absolue, et cette étape garantit que j&#39;ai pris en compte tous vos commentaires tout au long du processus.</div></div></div></div></div></div></div></div>`;
});
const prerender = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MainHeader, "MainHeader").$$render($$result, {}, {}, {})} ${validate_component(Brand, "Brand").$$render($$result, {}, {}, {})} ${validate_component(AboutComponent, "About").$$render(
    $$result,
    {
      title: "A propos",
      subtitle: "de moi",
      content: "En tant que développeur web freelance, je transforme vos idées en solutions numériques innovantes. Mon expertise en développement web s'étend sur plusieurs années, durant lesquelles j'ai acquis la capacité de créer des sites web qui allient fonctionnalité, esthétique et facilité d'utilisation.",
      content2: "Que vous cherchiez à lancer un nouveau site web pour votre entreprise, à améliorer un site web existant, ou à créer une application web unique, je suis là pour vous aider à atteindre vos objectifs.",
      id: "about"
    },
    {},
    {}
  )} ${validate_component(CardComponent, "Card").$$render($$result, {}, {}, {})} ${validate_component(Expertise, "Expertise").$$render($$result, {}, {}, {})} <div class="feature-area"><div class="container">${validate_component(AboutComponent, "About").$$render(
    $$result,
    {
      title: "Mes",
      subtitle: "projets",
      content: "Un aperçu de mon voyage dans le monde du développement web",
      content2: "",
      id: "projets"
    },
    {},
    {}
  )} <div class="row gy-4">${validate_component(FeatureItem, "FeatureItem").$$render(
    $$result,
    {
      img: "Carpeto",
      title: "Carpeto - Refonte d'un site e-commerce",
      content: "Carpeto souhaitait effectuer une refonte de leurs boutiques en ligne. Le but derrière cette refonte était d'avoir un site internet qui colle à l'image de marque de l'entreprise et d'augmenter les ventes auprès des clients particuliers et de présenter cette dernière aux clients professionnels.",
      link: "https://play-carpeto.fr/"
    },
    {},
    {}
  )} ${validate_component(FeatureItem, "FeatureItem").$$render(
    $$result,
    {
      img: "LaLicorne",
      title: "Hôtel La Licorne - Création d'un site vitrine",
      content: "Le projet consiste à créer un site web complet pour l'Hôtel La Licorne, situé à Carnac. L'objectifs étant de faciliter la réservation d'hébergement pour les visiteurs intéressés par un séjour à Carnac, tout en présentant les caractéristiques uniques de l'hôtel",
      link: "https://hotel-la-licorne.com/"
    },
    {},
    {}
  )} ${validate_component(FeatureItem, "FeatureItem").$$render(
    $$result,
    {
      img: "PetitNuageEquiCoaching",
      title: "Petit nuage équicoaching - Création d'un site vitrine",
      content: "Petit Nuage Equicoaching m'a contacté dans le but de créer le site internet de l'entreprise. Afin de démarrer son activité de la meilleure des manières, l'entreprise avait besoin d'avoir une présence en ligne. C'est dans ce but-là que j'ai créé le site internet, pour toucher de nouveaux clients et faire découvrir l'équicoaching au plus grand nombre.",
      link: "https://petitnuageequicoaching.fr/"
    },
    {},
    {}
  )} ${validate_component(FeatureItem, "FeatureItem").$$render(
    $$result,
    {
      img: "Simeon",
      title: "Simeon - Application mobile",
      content: "Le but de l'application Simeon est de trouver des itinéraires les plus adaptés aux véhicules électriques (trottinette, vélo, voiture) afin de découvrir la Bretagne. Le plus de cette application est de pouvoir se restaurer ou se loger auprès de nos partenaires dans toute la Bretagne. Les établissements mettent à disposition tout le nécessaire pour recharger vos véhicules. Ceci est un projet personnel.",
      link: ""
    },
    {},
    {}
  )}</div></div></div> ${validate_component(Procedures, "Procedures").$$render($$result, {}, {}, {})} ${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default,
  prerender
};
