<script>
  import { onMount } from "svelte";

  let planTypes = ["monthly", "yearly"];
  let pricingItems = [
    {
      name: "Starter",
      description: "Perfect for individuals.",
      monthlyPrice: "$9",
      yearlyPrice: "$99",
      price: "$9",
      sub: "/m",
      pauseCancelText: "Pause or cancel anytime",
      features: [
        "Team members: 1",
        "Users: Unlimited",
        "Integrations: Unlimited",
        "Total message: 150",
        "Assistants: 2",
      ],
    },
    {
      name: 'Business <img src="/img/pro-btn.svg" alt="pro">',
      description: "Perfect for small businesses.",
      monthlyPrice: "$29",
      yearlyPrice: "$269",
      price: "$29",
      sub: "/m",
      pauseCancelText: "Pause or cancel anytime",
      features: [
        "Team members: 3",
        "Users: Unlimited",
        "Integrations: Unlimited",
        "Total message: 650",
        "Assistants: 5",
      ],
    },
    {
      name: "Professional",
      description: "Perfect for larger businesses.",
      monthlyPrice: "$59",
      yearlyPrice: "$699",
      price: "$59",
      sub: "/m",
      pauseCancelText: "Pause or cancel anytime",
      features: [
        "Team members: 10",
        "Users: Unlimited",
        "Integrations: Unlimited",
        "Total message: 1650",
        "Assistants: 12",
      ],
    },
  ];
  let activeIndex = 0;
  // @ts-ignore
  const togglePricing = (index) => {
    activeIndex = index;
    const buttons = document.querySelectorAll(".pricing-tab button");
    buttons.forEach((btn, i) => {
      btn.classList.remove("active");
      if (i === index) {
        btn.classList.add("active");
      }
    });

    const pricingItems = document.querySelectorAll(".pricing-item");
    pricingItems.forEach((item, i) => {
      const monthlyPrice = item.getAttribute("data-monthly-price");
      const yearlyPrice = item.getAttribute("data-yearly-price");
      const spanElement = item.querySelector("h4 span");
      const subElement = item.querySelector("h4 sub");

      if (spanElement) {
        if (planTypes[index] === "monthly") {
          spanElement.textContent = monthlyPrice;
          if (subElement) {
            subElement.textContent = "/m";
          }
        } else if (planTypes[index] === "yearly") {
          spanElement.textContent = yearlyPrice;
          if (subElement) {
            subElement.textContent = "/y";
          }
        }
      }
    });
  };

  // @ts-ignore
  const handleButtonClick = (index) => {
    togglePricing(index);
  };

  onMount(() => {
    togglePricing(activeIndex);
  });
</script>

<div class="pricing-area">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="title-2">Select a <span>Pricing Plan</span></h2>
        <div class="pricing-tab">
          {#each planTypes as type, index (type)}
            <button
              on:click={() => handleButtonClick(index)}
              class:active={index === activeIndex}
            >
              {#if type === "monthly"} Monthly {/if}
              {#if type === "yearly"} Yearly {/if}
            </button>
          {/each}
        </div>
      </div>
    </div>
    <div class="row gy-4">
      {#each pricingItems as item, index (item)}
        <div class="col-md-4">
          <div
            class="pricing-item"
            data-monthly-price={item.monthlyPrice}
            data-yearly-price={item.yearlyPrice}
          >
            <h3>{@html item.name}</h3>
            <p>{item.description}</p>
            <h4>
              <span>{item.price}</span>
              <sub>{item.sub}</sub>
            </h4>
            <p>Pause or cancel anytime</p>
            <div class="pricing-button">
              <button>Start Trial</button>
              <button>Subscribe</button>
            </div>
            <ul>
              {#each item.features as feature (feature)}
                <li>
                  <img src="/img/check.svg" alt="check" width="24" height="24" />
                  {feature}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
