function randomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  // Basic va Premium uchun random narxlar
  const basic = randomPrice(0, 3);      // $0 - $3
  const premium = randomPrice(5, 25);   // $5 - $25

  document.getElementById("basicPrice").textContent = basic;
  document.getElementById("premiumPrice").textContent = premium;

  console.log("Prices updated:", basic, premium);
});
const now = new Date().toDateString();
const savedDay = localStorage.getItem("priceDay");

if (savedDay !== now) {
  localStorage.setItem("priceDay", now);
  localStorage.setItem("basic", randomPrice(0,3));
  localStorage.setItem("premium", randomPrice(5,25));
}

document.getElementById("basicPrice").textContent =
  localStorage.getItem("basic");

document.getElementById("premiumPrice").textContent =
  localStorage.getItem("premium");
  ////////////////////////////////////////
  /////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const testimonials = [
  {
    name: "Alexander R.",
    time: "1 Year with Us",
    avatar: "../images/testimonial-footer/Aleksey.png",
    text: ` Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time `,
    rating: 5
  },
  {
    name: "Alexander R.",
    time: "8 Months with Us",
    avatar: "../images/testimonial-footer/Aleksey.png",
    text: "This platform improved our workflow dramatically. Payments are quicker and easier than ever.",
    rating: 5
  },
  {
    name: "Alexander R.",
    time: "2 Years with Us",
    avatar: "../images/testimonial-footer/Aleksey.png",
    text: "Reliable service with great support. Highly recommended for growing businesses.",
    rating: 4
  }
];

const track = document.getElementById("testimonialTrack");
const dotsContainer = document.getElementById("carouselDots");

let activeIndex = 0;

/* Render */
function renderTestimonials() {
  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  testimonials.forEach((item, index) => {
    /* CARD */
    const card = document.createElement("div");
    card.className = "testimonial__card";
    if (index === 0) card.classList.add("active");

    card.innerHTML = `
      <div class="testimonial__user">
        <img src="${item.avatar}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <span>${item.time}</span>
        </div>
      </div>
      <p class="testimonial__text">“ ${item.text} ”</p>
      <div class="testimonial__stars">
        ${"★".repeat(item.rating)}
      </div>
    `;

    card.addEventListener("click", () => setActive(index));
    track.appendChild(card);

    /* DOT */
    const dot = document.createElement("span");
    dot.className = "testimonial__dot";
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => setActive(index));
    dotsContainer.appendChild(dot);
  });
}

function setActive(index) {
  activeIndex = index;

  const cards = document.querySelectorAll(".testimonial__card");
  const dots = document.querySelectorAll(".testimonial__dot");

  cards.forEach((card, i) =>
    card.classList.toggle("active", i === index)
  );

  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === index)
  );

  const cardWidth = cards[0].offsetWidth + 30;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

/* INIT */
renderTestimonials();
setActive(0);