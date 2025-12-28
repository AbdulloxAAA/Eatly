const restaurants = [
  {
    image:"../images/product-1/img1.jpg",
    badge:"Healthy",
    badgeClass:"healthy",
    name:"The Chicken King",
    time:"24min •",
    rating:"4.8",
    starImg:"../images/product-1/Star (1).png",
    bookmarkImg:"../images/product-1/Bookmark.png",
    bookmarkActiveImg:"https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image:"../images/product-1/img2.jpg",
    badge:"Trending",
    badgeClass:"trending",
    name:"The Burger King",
    time:"24min •",
    rating:"4.9",
    starImg:"../images/product-1/Star (1).png",
    bookmarkImg:"../images/product-1/Bookmark.png",
    bookmarkActiveImg:"https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image:"../images/product-1/img1.jpg",
    badge:"Healthy",
    badgeClass:"healthy",
    name:"The Chicken King",
    time:"24min •",
    rating:"4.8",
    starImg:"../images/product-1/Star (1).png",
    bookmarkImg:"../images/product-1/Bookmark.png",
    bookmarkActiveImg:"https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
];


function createRestaurantCard(restaurant) {
  const card = document.createElement("div");
  card.className = "restaurant-card";

  const img = document.createElement("img");
  img.src = restaurant.image;
  img.alt = restaurant.name;

  const body = document.createElement("div");
  body.className = "card-body";

  const badge = document.createElement("span");
  badge.className = `badge ${restaurant.badgeClass}`;
  badge.textContent = restaurant.badge;

  const title = document.createElement("h3");
  title.textContent = restaurant.name;

  const info = document.createElement("div");
  info.className = "info";

  const time = document.createElement("span");
  time.textContent = restaurant.time;


  const rating = document.createElement("span");
  rating.className = "rating";

  const star = document.createElement("img");
  star.src = restaurant.starImg;
  star.alt = "star";
  star.style.width = "25px";
  star.style.height = "25px";

  const ratingText = document.createElement("span");
  ratingText.textContent = restaurant.rating;

  rating.append(star, ratingText);


  const bookmark = document.createElement("div");
  bookmark.className = "bookmark";

  const bookmarkImg = document.createElement("img");
  bookmarkImg.src = restaurant.bookmarkImg;
  bookmarkImg.alt = "bookmark";
  bookmark.append(bookmarkImg);

  bookmark.onclick = () => {
    if (bookmarkImg.src === restaurant.bookmarkImg) {
      bookmarkImg.src = restaurant.bookmarkActiveImg;
    } else {
      bookmarkImg.src = restaurant.bookmarkImg;
    }
  };

  info.append(time, rating, bookmark);
  body.append(badge, title, info);
  card.append(img, body);

  return card;
}


const cardsContainer = document.querySelector(".restaurant-cards");
restaurants.forEach(restaurant => {
  cardsContainer.append(createRestaurantCard(restaurant));
});

////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
const dishes = [
  {
    image: "../images/product-2/salt1.png",
    badge: "Healthy",
    badgeClass: "healthy",
    name: "Chicken Hell",
    time: "24min •",
    rating: "4.8",
    price: 12.99,
    bookmarkImg: "../images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image: "../images/product-2/salt2.png",
    badge: "Trending",
    badgeClass: "trending",
    name: "Swe Dish",
    time: "34min •",
    rating: "4.9",
    price: 19.99,
    bookmarkImg: "../images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image: "../images/product-2/salt3.png",
    badge: "Supreme",
    badgeClass: "supreme",
    name: "Swe Dish",
    time: "34min •",
    rating: "4.9",
    price: 19.99,
    bookmarkImg: "../images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image: "../images/product-2/salt1.png",
    badge: "Healthy",
    badgeClass: "healthy",
    name: "Chicken Hell",
    time: "24min •",
    rating: "4.8",
    price: 12.99,
    bookmarkImg: "../images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image: "../images/product-2/salt2.png",
    badge: "Trending",
    badgeClass: "trending",
    name: "Swe Dish",
    time: "34min •",
    rating: "4.9",
    price: 19.99,
    bookmarkImg: "../images/product-2/Heart.png",
    bookmarkActiveImg: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  }
];

const row2 = document.getElementById("menuItems");

function getDishCard(el) {
  let count = 1; 
  const basePrice = el.price;

  const card = document.createElement("article");
  card.className = "menu-list__item";

  card.innerHTML = `
    <div class="item-bookmark">
      <img src="${el.bookmarkImg}" alt="Bookmark Icon">
    </div>

    <img class="item-image" src="${el.image}" alt="${el.name}">

    <span class="item-badge ${el.badgeClass}">${el.badge}</span>
    <h3 class="item-name">${el.name}</h3>

    <div class="item-info">
      <span class="item-time">${el.time}</span>
      <span class="item-rating">
        <img src="../images/product-1/Star (1).png" alt="star">
        ${el.rating}
      </span>
    </div>

    <div class="item-footer">
      <span class="item-price">$${basePrice}</span>
      <button class="item-add-btn">+</button>
    </div>
  `;

  const priceEl = card.querySelector(".item-price");
  const plusBtn = card.querySelector(".item-add-btn");

 
  plusBtn.onclick = () => {
    count++;
    const newPrice = basePrice * count;
    priceEl.innerText = `$${newPrice.toFixed(2)}`;
  };


  const bookmarkImg = card.querySelector(".item-bookmark img");
  bookmarkImg.onclick = () => {
    bookmarkImg.src =
      bookmarkImg.src.includes("Heart")
        ? el.bookmarkActiveImg
        : el.bookmarkImg;
  };

  return card;
}

dishes.forEach(el => row2.append(getDishCard(el)));

/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq__question");
  const icon = item.querySelector(".icon");

  btn.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      icon.textContent = "+";
    } else {
      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      });

      item.classList.add("active");
      icon.textContent = "−";
    }
  });
});