<script>
	import Brand from "../components/Brand.svelte";
	import Faq from "../components/Faq.svelte";
	import MainHeader from "../components/mainHeader.svelte";
	import Newsletter from "../components/Newsletter.svelte";
	import Price from "../components/Price.svelte";
	import Expertise from "../components/Expertise.svelte";
	import About from "../components/aboutComponent.svelte";
	import Card from "../components/cardComponent.svelte";


</script>
<MainHeader />
<Brand />
<About 
title="A propos"
subtitle="de moi"
content="En tant que développeur web freelance, je transforme vos idées en solutions numériques innovantes. Mon expertise en développement web s'étend sur plusieurs années, durant lesquelles j'ai acquis la capacité de créer des sites web qui allient fonctionnalité, esthétique et facilité d'utilisation."
content2="Que vous cherchiez à lancer un nouveau site web pour votre entreprise, à améliorer un site web existant, ou à créer une application web unique, je suis là pour vous aider à atteindre vos objectifs."

/>
<Card />
<Expertise />
<Price />
<Faq />
<Newsletter />