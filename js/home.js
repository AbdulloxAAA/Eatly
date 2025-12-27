document.addEventListener("DOMContentLoaded", () => {
  getHeroRow();
});
function getHeroRow() {
  const heroRow = document.querySelector(".hero-wrapper");
  //
  let heroLeft = document.createElement("div");
  heroLeft.className = "heroleft";
  //
  let heroSpan = document.createElement("span");
  heroSpan.className = "herospan";
  heroSpan.textContent = "OVER 1000 USERS";
  let heroline = document.createElement("span");
  heroline.className = "herospan-line";
  //
  let heroName = document.createElement("h1");
  heroName.textContent = "Enjoy Foods All Over The World";
  heroName.innerHTML =
    'Enjoy Foods All Over The <span class="highlight">World</span>';

  let heroDescription = document.createElement("p");
  heroDescription.textContent =
    "EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus.";
  heroDescription.innerHTML = `EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span class="highlight2">$20 bonus.</span>`;
  let heroLeftactions = document.createElement("div");
  heroLeftactions.className = "hero-actions";

  let heroLeftactionsBtn = document.createElement("button");
  heroLeftactionsBtn.textContent = "Get Started";

  let heroLeftactionsBtngopro = document.createElement("button");
  heroLeftactionsBtngopro.textContent = "Go Pro";

  let heroLeftrating = document.createElement("div");
  heroLeftrating.className = "heroleft-rating";

  let heroLeftratingimg = document.createElement("img");
  heroLeftratingimg.src = "/images/home/bigstar.png";

  let heroLeftratingpara = document.createElement("h6");
  heroLeftratingpara.textContent = "Trustpilot";

  let heroLeftratingsimage = document.createElement("img");
  heroLeftratingsimage.src = "/images/home/Star.png";

  let heroLeftratingspan = document.createElement("span");
  heroLeftratingspan.textContent = "4900+";

  let heroRight = document.createElement("img");
  heroRight.src = "/images/home/Hero.png";
  heroRight.className = "hero-right";

  heroLeftactions.append(heroLeftactionsBtn, heroLeftactionsBtngopro);

  heroLeftrating.append(
    heroLeftratingimg,
    heroLeftratingpara,
    heroLeftratingsimage,
    heroLeftratingspan
  );
  heroSpan.prepend(heroline),
    heroLeft.append(
      heroSpan,
      heroName,
      heroDescription,
      heroLeftactions,
      heroLeftrating
    );
  heroRow.append(heroLeft, heroRight);
}
///
const counters = document.querySelectorAll(".stat__number");
let started = false;

function formatCount(value, suffix) {
  if (suffix === "K+") {
    return Math.floor(value / 1000) + "K+";
  }

  if (suffix === "M") {
    return Math.floor(value / 1000000) + "M";
  }

  if (suffix === "%") {
    return value.toFixed(2) + "%";
  }

  return value;
}

function startCounter() {
  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    const suffix = counter.dataset.suffix;
    let count = 0;
    const speed = target / 120;

    function update() {
      count += speed;

      if (count < target) {
        counter.innerText = formatCount(count, suffix);
        requestAnimationFrame(update);
      } else {
        counter.innerText = formatCount(target, suffix);
      }
    }

    update();
  });
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !started) {
    startCounter();
    started = true;
  }
}, { threshold: 0.5 });

observer.observe(document.querySelector(".stats"));

