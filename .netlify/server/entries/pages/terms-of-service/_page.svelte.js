import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { A as AboutComponent } from "../../../chunks/aboutComponent.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(AboutComponent, "About").$$render(
    $$result,
    {
      title: "Conditons d'",
      subtitle: "utilisations",
      content: "Bienvenue sur ..., un site web géré par Nicolas Gurak. En accédant à notre site web, vous, l'utilisateur, acceptez de respecter \n  et d’être lié par les termes et conditions suivants. Si vous n'acceptez pas de vous conformer à ces conditions, \n  vous ne devez pas accéder ni utiliser notre site web.\n  Dernière mise à jour: 23/02/2024"
    },
    {},
    {}
  )} <div class="policy-area mt-192" data-svelte-h="svelte-1v06q2d"><div class="container"><div class="row"><div class="col-md-4"><div class="pills-tab" role="tablist" aria-orientation="vertical"><button class="nav-link active" data-bs-toggle="pill" data-bs-target="#pillOne">Utilisation du Site</button> <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillTwo">Propriété Intellectuelle</button> <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillThree">Limitation de Responsabilité</button> <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillFour">Exactitude des Informations</button> <button class="nav-link" data-bs-toggle="pill" data-bs-target="#pillFive">Modifications des Conditions</button></div></div> <div class="col-md-8"><div class="tab-content"><div class="tab-pane fade show active" id="pillOne" role="tabpanel"><h3>Utilisation du Site</h3> <p>Le contenu de ce site est destiné à fournir des informations sur les services offerts par NicolasGurak. 
                Le site est conçu pour un usage personnel et non commercial. 
                Toute utilisation du contenu de ce site à des fins commerciales sans notre consentement écrit préalable est strictement interdite.</p></div> <div class="tab-pane fade" id="pillTwo" role="tabpanel"><h3>Propriété Intellectuelle</h3> <p>Tous les contenus présents sur ce site, y compris, sans limitation, les textes, graphiques, logos, images, et la compilation de ces éléments, sont la propriété de NicolasGurak ou de ses fournisseurs de contenu
                 et sont protégés par les lois sur la propriété intellectuelle. 
                L&#39;utilisation non autorisée du contenu peut violer ces lois.</p></div> <div class="tab-pane fade" id="pillThree" role="tabpanel"><h3>Limitation de Responsabilité</h3> <p>NicolasGurak ne sera pas responsable des dommages de toute nature découlant de l&#39;utilisation de ce site, 7
                y compris, mais sans s&#39;y limiter, les dommages directs, indirects, accessoires, punitifs et consécutifs.</p></div> <div class="tab-pane fade" id="pillFour" role="tabpanel"><h3>Exactitude des Informations</h3> <p>Bien que nous nous efforcions d&#39;assurer l&#39;exactitude et la mise à jour des informations sur notre site, des erreurs ou des omissions peuvent survenir. 
                Nous ne garantissons pas l&#39;exactitude, la fiabilité ou l&#39;exhaustivité des informations présentées sur notre site.</p></div> <div class="tab-pane fade" id="pillFive" role="tabpanel"><h3>Modifications des Conditions</h3> <p>NicolasGurak se réserve le droit de modifier ou de remplacer ces conditions à tout moment. Il est de votre responsabilité de vérifier périodiquement ces conditions pour tout changement.</p></div></div></div></div></div></div>`;
});
export {
  Page as default
};
