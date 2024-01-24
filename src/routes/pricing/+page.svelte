<script>
  import Brand from "../../components/Brand.svelte";
  import Faq from "../../components/Faq.svelte";
	import Newsletter from "../../components/Newsletter.svelte";
  import PageHero from "../../components/PageHero.svelte";
	import Price from "../../components/Price.svelte";
</script>
  <PageHero 
  title="Pricing"
  subtitle="Plans"
  content="Join our exclusive beta program to experience Assistify for free."
  />
  <div class="mt-192">
    <Price />
  </div>
    <Faq />
  <div class="mb-192">
    <Brand />
  </div>
    <Newsletter />