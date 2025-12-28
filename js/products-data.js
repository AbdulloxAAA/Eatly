const restaurants = [
  {
    image:"./images/product-1/img1.jpg",
    badge:"Healthy",
    badgeClass:"healthy",
    name:"The Chicken King",
    time:"24min •",
    rating:"4.8",
    starImg:"./images/product-1/Star (1).png",
    bookmarkImg:"./images/product-1/Bookmark.png",
    bookmarkActiveImg:"https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image:"./images/product-1/img2.jpg",
    badge:"Trending",
    badgeClass:"trending",
    name:"The Burger King",
    time:"24min •",
    rating:"4.9",
    starImg:"./images/product-1/Star (1).png",
    bookmarkImg:"./images/product-1/Bookmark.png",
    bookmarkActiveImg:"https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
   {
    image:"./images/product-1/img1.jpg",
    badge:"Healthy",
    badgeClass:"healthy",
    name:"The Chicken King",
    time:"24min •",
    rating:"4.8",
    starImg:"./images/product-1/Star (1).png",
    bookmarkImg:"./images/product-1/Bookmark.png",
    bookmarkActiveImg:"https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
];


function getRestaurantCard(el){
  let card = document.createElement("div");
  card.className="restaurant-card";

  let img = document.createElement("img");
  img.src = el.image;

  let body = document.createElement("div");
  body.className="card-body";

  let badge = document.createElement("span");
  badge.className=`badge ${el.badgeClass}`;
  badge.innerHTML=el.badge;

  let title = document.createElement("h3");
  title.innerHTML=el.name;

  let info = document.createElement("div");
  info.className="info";

  let time = document.createElement("span");
  time.innerHTML=el.time;


  let rating = document.createElement("span");
  rating.className="rating";

  let star = document.createElement("img");
  star.src=el.starImg;
  star.alt="star";
  star.style.width="25px";
  star.style.height="25px";

  let ratingText = document.createElement("span");
  ratingText.innerHTML=el.rating;

  rating.append(star,ratingText);

  
  let bookmark = document.createElement("div");
  bookmark.className="bookmark";

  let bookmarkImg = document.createElement("img");
  bookmarkImg.src = el.bookmarkImg;
  bookmark.append(bookmarkImg);

  bookmark.onclick = ()=>{
    if(bookmarkImg.src===el.bookmarkImg){
      bookmarkImg.src = el.bookmarkActiveImg;
    }else{
      bookmarkImg.src = el.bookmarkImg;
    }
  };

  info.append(time,rating,bookmark);
  body.append(badge,title,info);
  card.append(img,body);

  return card;
}


let row = document.querySelector(".restaurants-row");
restaurants.map(el=>{
  row.append(getRestaurantCard(el));
});
///////////////menu//////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////
const dishes = [
  {
    image: "./images/product-2/salt1.png",
    badge: "Healthy",
    badgeClass: "healthy",
    name: "Chicken Hell",
    time: "24min •",
    rating: "4.8",
    price: 12.99,
    bookmarkImg: "./images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
     {
    image: "./images/product-2/salt2.png",
    badge: "Trending",
    badgeClass: "trending",
    name: "Swe Dish",
    time: "34min •",
    rating: "4.9",
    price: 19.99,
    bookmarkImg: "./images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
    {
    image: "./images/product-2/salt3.png",
    badge: "Supreme",
    badgeClass: "supreme",
    name: "Swe Dish",
    time: "34min •",
    rating: "4.9",
    price: 19.99,
    bookmarkImg: "./images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
    {
    image: "./images/product-2/salt1.png",
    badge: "Healthy",
    badgeClass: "healthy",
    name: "Chicken Hell",
    time: "24min •",
    rating: "4.8",
    price: 12.99,
    bookmarkImg: "./images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image: "./images/product-2/salt2.png",
    badge: "Trending",
    badgeClass: "trending",
    name: "Swe Dish",
    time: "34min •",
    rating: "4.9",
    price: 19.99,
    bookmarkImg: "./images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  }
];

const row2 = document.getElementById("dishesRow");

function getDishCard(el) {
  let count = 1; 
  const basePrice = el.price;

  const card = document.createElement("div");
  card.className = "dish-card";

  card.innerHTML = `
    <div class="bookmark">
      <img src="${el.bookmarkImg}">
    </div>

    <img class="dish-img" src="${el.image}" alt="${el.name}">

    <span class="badges ${el.badgeClass}">${el.badge}</span>
    <h3>${el.name}</h3>

   <div class="infos">
  <span>${el.time}</span>
  <span class="ratings">
    <img src="./images/product-1/Star (1).png" alt="star">
    ${el.rating}
  </span>
</div>
    <div class="bottom">
      <span class="price">$${basePrice}</span>
      <button class="plus">+</button>
    </div>
  `;

  const priceEl = card.querySelector(".price");
  const plusBtn = card.querySelector(".plus");

  
  plusBtn.onclick = () => {
    count++;
    const newPrice = basePrice * count;
    priceEl.innerText = `$${newPrice.toFixed(2)}`;
  };

 
  const bookmarkImg = card.querySelector(".bookmark img");
  bookmarkImg.onclick = () => {
    bookmarkImg.src =
      bookmarkImg.src.includes("Heart")
        ? el.bookmarkActiveImg
        : el.bookmarkImg;
  };

  return card;
}

dishes.forEach(el => row2.append(getDishCard(el)));

////////////////////TESTIMONIAL///////////////////////////////////////////////////////////
/////////////////////SECTION///////////////////////////////////////////////////////////
const testimonials = [
  {
    name: "Alexander R.",
    time: "1 Year with Us",
    avatar: "./images/testimonial-footer/Aleksey.png",
    text: ` Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time `,
    rating: 5
  },
  {
    name: "Alexander R.",
    time: "8 Months with Us",
    avatar: "./images/testimonial-footer/Aleksey.png",
    text: "This platform improved our workflow dramatically. Payments are quicker and easier than ever.",
    rating: 5
  },
  {
    name: "Alexander R.",
    time: "2 Years with Us",
    avatar: "./images/testimonial-footer/Aleksey.png",
    text: "Reliable service with great support. Highly recommended for growing businesses.",
    rating: 4
  }
];

const track = document.getElementById("testimonialTrack");
const dotsContainer = document.getElementById("carouselDots");

let activeIndex = 0;


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


renderTestimonials();
setActive(0);
