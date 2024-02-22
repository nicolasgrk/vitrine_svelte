<script>
  // Votre code JavaScript ici
  let cards;
  let stackArea;

  import { onMount } from 'svelte';

  onMount(() => {
    let cards = document.querySelectorAll(".card");
      let stackArea = document.querySelector(".stack-area");

      function rotateCards() {
        let angle = 0;
        cards.forEach((card) => {
          if (card.classList.contains("active")) {
            card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
          } else {
            card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            angle = angle - 10;
          }
        });
      }

      rotateCards();

      window.addEventListener("scroll", () => {
        let proportion =
          stackArea.getBoundingClientRect().top / window.innerHeight;
        if (proportion <= 0) {
          let n = cards.length;
          let index = Math.ceil((proportion * n) / 2);
          index = Math.abs(index) - 1;
          for (let i = 0; i < n; i++) {
            if (i <= index) {
              cards[i].classList.add("active");
            } else {
              cards[i].classList.remove("active");
            }
          }
          rotateCards();
        }
      });

      //Code for responsiveness

      function adjust() {
        let windowWidth = window.innerWidth;
        let left = document.querySelector(".left");
        left.remove();
        if (windowWidth < 800) {
          stackArea.insertAdjacentElement("beforebegin", left);
        } else {
          stackArea.insertAdjacentElement("afterbegin", left);
        }
      }
      adjust();

      //detect Resize

      window.addEventListener("resize", adjust);
  });
</script>

<style>
      body {
        width: 100%;
        height: fit-content;
        margin: 0;
        padding: 0;
      }
      .center {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .stack-area {
        width: 100%;
        height: 300vh;
        position: relative;
        display: flex;
        justify-content: center;
      }
      .right,
      .left {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        top: 0;
        box-sizing: border-box;
        flex-basis: 50%;
      }
      .cards {
        width: 100%;
        height: 100%;
        position: relative;
      }
      .card {
        width: 350px;
        height: 350px;
        box-sizing: border-box;
        padding: 35px;
        border-radius: 6mm;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        transition: 0.5s ease-in-out;
      }
      .card:nth-child(1) {
        background: rgb(95, 51, 255);
        z-index: 4;
      }
      .card:nth-child(2) {
        background: rgb(58, 188, 150);
        z-index: 3;
      }
      .card:nth-child(3) {
        background: rgb(255, 134, 93);
        z-index: 2;
      }
      .card:nth-child(4) {
        background: rgb(124, 194, 215);
        z-index: 1;
      }
      .sub {
        font-size: 20px;
        font-weight: 700;
      }
      .cardContent {
        font-size: 38px;
        font-weight: 700;
        line-height: 54px;
      }
      .card.active {
        transform-origin: bottom left;
      }
      .left {
        align-items: center;
        flex-direction: column;
      }

      .sub-title {
        width: 420px;
      }

      .top,
      .bottom {
        width: 100%;
        height: 100vh;
        font-size: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /*CSS Code for responsiveness*/
      @media screen and (max-width: 800px) {
        .left {
          position: relative;
          width: 100vw;
        }
      }
</style>

<div class="center">
    <div class="stack-area">
      <div class="left">
        <h1 class="title">
          Notre <br />
          <span>Expertise</span>
        </h1>
        <div class="sub-title">
          Je propose une gamme variée de services pour répondre à vos besoins en matière de présence en ligne. Chaque service est conçu pour vous aider à atteindre vos objectifs spécifiques et à maximiser votre impact numérique.
        </div>
      </div>
      <div class="right">
        <div class="cards">
          <div class="card">
            <div class="sub">Développement</div>
            <div class="cardContent">Développement de sites web</div>
          </div>
          <div class="card">
            <div class="sub">Refonte</div>
            <div class="cardContent">Refonte de site web</div>
          </div>
          <div class="card">
            <div class="sub">Applications</div>
            <div class="cardContent">Développement d'applications web</div>
          </div>
          <div class="card">
            <div class="sub">Support</div>
            <div class="cardContent">Maintenance et support</div>
          </div>
        </div>
      </div>
    </div>
  </div>
