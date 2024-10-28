<script context="module">
	import Brand from "../components/Brand.svelte";
	import Procedures from "../components/Procedures.svelte";
	import MainHeader from "../components/mainHeader.svelte";
	import Expertise from "../components/Expertise.svelte";
	import About from "../components/aboutComponent.svelte";
	import Card from "../components/cardComponent.svelte";
	import FeatureItem from "../components/FeatureItem.svelte";
	import ContactForm  from "../components/ContactForm2.svelte";
  import { onMount } from 'svelte';


</script>

<MainHeader />
<About 
title="A propos"
subtitle="de moi"
content="En tant que développeur web freelance, je transforme vos idées en solutions numériques innovantes. Mon expertise en développement web s'étend sur plusieurs années, durant lesquelles j'ai acquis la capacité de créer des sites web qui allient fonctionnalité, esthétique et facilité d'utilisation."
content2="Que vous cherchiez à lancer un nouveau site web pour votre entreprise, à améliorer un site web existant, ou à créer une application web unique, je suis là pour vous aider à atteindre vos objectifs."
id="about"
/>
<Card />
<Expertise />
<div class="feature-area">
  <div class="container">
    <About 
    title="Mes"
    subtitle="projets"
    content="Un aperçu de mon voyage dans le monde du développement web"
    content2=""
    id ="projets"
    />
    <div class="row gy-4">
      <FeatureItem
        img="Carpeto"
        title="Carpeto - Refonte d'un site e-commerce"
        content="Carpeto souhaitait effectuer une refonte de leurs boutiques en ligne. Le but derrière cette refonte était d'avoir un site internet qui colle à l'image de marque de l'entreprise et d'augmenter les ventes auprès des clients particuliers et de présenter cette dernière aux clients professionnels."
        link="https://play-carpeto.fr/"
      />
      <FeatureItem
        img="LaLicorne"
        title="Hôtel La Licorne - Création d'un site vitrine"
        content="Le projet consiste à créer un site web complet pour l'Hôtel La Licorne, situé à Carnac. L'objectifs étant de faciliter la réservation d'hébergement pour les visiteurs intéressés par un séjour à Carnac, tout en présentant les caractéristiques uniques de l'hôtel"
        link="https://hotel-la-licorne.com/"
      />
      <FeatureItem
        img="PetitNuageEquiCoaching"
        title="Petit nuage équicoaching - Création d'un site vitrine"
        content="Petit Nuage Equicoaching m'a contacté dans le but de créer le site internet de l'entreprise. Afin de démarrer son activité de la meilleure des manières, l'entreprise avait besoin d'avoir une présence en ligne. C'est dans ce but-là que j'ai créé le site internet, pour toucher de nouveaux clients et faire découvrir l'équicoaching au plus grand nombre."
        link="https://petitnuageequicoaching.fr/"
      />
      <FeatureItem
        img="Simeon"
        title="Simeon - Application mobile"
        content="Le but de l'application Simeon est de trouver des itinéraires les plus adaptés aux véhicules électriques (trottinette, vélo, voiture) afin de découvrir la Bretagne. Le plus de cette application est de pouvoir se restaurer ou se loger auprès de nos partenaires dans toute la Bretagne. Les établissements mettent à disposition tout le nécessaire pour recharger vos véhicules. Ceci est un projet personnel."
        link=""
      />
    </div>
  </div>
</div>
<Procedures />
<form name="netlify-form-example" method="POST"  data-netlify="true">
  <input type="hidden" name="form-name" value="netlify-form-example" />
  <label for="name">Name</label>
  <input name="name" id="name" required placeholder="Name" type="text" />
  <label for="email">Email</label>
  <input name="email" id="email" required placeholder="Email" type="email" />
  <label for="message">Message</label>
  <input name="message" id="message" required placeholder="Message" type="text" />
  <input type="submit" value="Submit" />
</form>