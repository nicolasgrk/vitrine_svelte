<script>
	import Brand from "./components/Brand.svelte";
	import Faq from "./components/Faq.svelte";
	import Hero from "./components/Hero.svelte";
	import Newsletter from "./components/Newsletter.svelte";
	import Price from "./components/Price.svelte";
	import Solution from "./components/Solution.svelte";
</script>
<Hero />
<Brand />
<div class="feature-area mt-192">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2 class="title-2">Elevate Your Productivity <span>to New Heights</span></h2>
			</div>
		</div>
		<div class="row gy-4">
			<div class="col-md-4">
				<div class="feature-item">
					<img src="/img/icon/1.svg" alt="icon" />
					<h3>Skilled Companion</h3>
					<p>
						Save time with automated information retrieval, eliminating the need for manual
						searches or team inquiries.
					</p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="feature-item">
					<img src="/img/icon/2.svg" alt="icon" />
					<h3>Service Bot</h3>
					<p>
						Link integrations, sync spreadsheets, or upload documents to instantly engage with
						the chatbot.
					</p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="feature-item">
					<img src="/img/icon/3.svg" alt="icon" />
					<h3>Smart Helper</h3>
					<p>
						Your assistant learns from your responses and grows more intelligent, evolving into
						your ultimate "know-it-all" helper.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<Solution />
<Price />
<Faq />
<Newsletter />