const popularItems = [
  {
    image: "../images/product-2/salt1.png",
    tag: "Healthy",
    tagStyle: "tag-healthy",
    title: "Chicken Hell",
    duration: "24min •",
    score: "4.8",
    cost: 12.99,
    favIcon: "../images/product-2/Heart.png",
    favActiveIcon: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image: "../images/product-2/salt2.png",
    tag: "Trending",
    tagStyle: "tag-trending",
    title: "Swe Dish",
    duration: "34min •",
    score: "4.9",
    cost: 19.99,
    favIcon: "../images/product-2/Heart.png",
    favActiveIcon: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image: "../images/product-2/salt3.png",
    tag: "Supreme",
    tagStyle: "tag-supreme",
    title: "Swe Dish",
    duration: "34min •",
    score: "4.9",
    cost: 19.99,
    favIcon: "../images/product-2/Heart.png",
    favActiveIcon: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image: "../images/product-2/salt1.png",
    tag: "Healthy",
    tagStyle: "tag-healthy",
    title: "Chicken Hell",
    duration: "24min •",
    score: "4.8",
    cost: 12.99,
    favIcon: "../images/product-2/Heart.png",
    favActiveIcon: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    image: "../images/product-2/salt2.png",
    tag: "Trending",
    tagStyle: "tag-trending",
    title: "Swe Dish",
    duration: "34min •",
    score: "4.9",
    cost: 19.99,
    favIcon: "../images/product-2/Heart.png",
    favActiveIcon: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  }
];

const popularList = document.getElementById("popularList");

function createPopularCard(item) {
  let quantity = 1;
  const startPrice = item.cost;

  const card = document.createElement("div");
  card.className = "popular-card";

  card.innerHTML = `
    <div class="popular-favorite">
      <img src="${item.favIcon}" alt="favorite">
    </div>

    <img class="popular-image" src="${item.image}" alt="${item.title}">

    <span class="popular-tag ${item.tagStyle}">${item.tag}</span>
    <h3 class="popular-title">${item.title}</h3>

    <div class="popular-info">
      <span>${item.duration}</span>
      <span class="popular-rating">
        <img src="../images/product-1/Star (1).png" alt="star">
        ${item.score}
      </span>
    </div>

    <div class="popular-bottom">
      <span class="popular-price">$${startPrice}</span>
      <button class="popular-add">+</button>
    </div>
  `;

  const priceText = card.querySelector(".popular-price");
  const addBtn = card.querySelector(".popular-add");
  const favBtn = card.querySelector(".popular-favorite img");

  /* ADD BUTTON */
  addBtn.onclick = () => {
    quantity++;
    priceText.textContent = `$${(startPrice * quantity).toFixed(2)}`;
  };

  /* FAVORITE */
  favBtn.onclick = () => {
    favBtn.src = favBtn.src.includes("Heart")
      ? item.favActiveIcon
      : item.favIcon;
  };

  return card;
}

popularItems.forEach(item => {
  popularList.append(createPopularCard(item));
});

////////////////////////////////////////////////////////////////////
////////////////Chiken SECTION//////////////////////////////////////
// Menu ma'lumotlari
const menuItems = [
  {
    img: "../images/product-2/salt1.png",
    tag: "Healthy",
    tagType: "is-healthy",
    title: "Chicken Hell",
    time: "24min •",
    score: "4.8",
    cost: 12.99,
    heart: "../images/product-2/Heart.png",
    heartActive: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  },
  {
    img: "../images/product-2/salt3.png",
    tag: "Trending",
    tagType: "is-trending",
    title: "Swe Dish",
    time: "34min •",
    score: "4.9",
    cost: 19.99,
    heart: "../images/product-2/Heart.png",
    heartActive: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  }
];

const menuGrid = document.getElementById("menuGrid");

// Menu kartasini yaratish funksiyasi
function renderMenuCard(data) {
  const card = document.createElement("div");
  card.className = "menu-item";

  // Har bir kartadagi boshlang'ich narx
  let currentPrice = data.cost;

  card.innerHTML = `
    <span class="fav-btn">
      <img src="${data.heart}" alt="heart">
    </span>

    <img class="item-pic" src="${data.img}" alt="${data.title}">

    <span class="item-tag ${data.tagType}">${data.tag}</span>
    <h4 class="item-name">${data.title}</h4>

    <div class="item-info">
      <span>${data.time}</span>
      <span class="item-score">
        <img src="../images/product-1/Star (1).png" alt="star">
        ${data.score}
      </span>
    </div>

    <div class="item-footer">
      <span class="item-price">$${currentPrice.toFixed(2)}</span>
      <button class="item-add">+</button>
    </div>
  `;

  // ❤️ Heart toggle
  const heartImg = card.querySelector(".fav-btn img");
  heartImg.onclick = () => {
    heartImg.src = heartImg.src.includes("Heart")
      ? data.heartActive
      : data.heart;
  };

  // ➕ Add price shu kartada
  const addBtn = card.querySelector(".item-add");
  const priceEl = card.querySelector(".item-price");

  addBtn.onclick = () => {
    currentPrice += data.cost;  // har bosishda original narx qo'shiladi
    priceEl.textContent = `$${currentPrice.toFixed(2)}`;
  };

  return card;
}

// Menu itemlarini yaratish va ekranga qo‘yish
menuItems.forEach(item => {
  menuGrid.append(renderMenuCard(item));
});
////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////ACCORDION SECTION/////////////////////////////
const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach(item => {
  const btn = item.querySelector(".accordion__header");
  const icon = item.querySelector(".accordion__icon");

  btn.addEventListener("click", () => {
    if (item.classList.contains("is-open")) {
      item.classList.remove("is-open");
      icon.textContent = "+";
    } else {
      accordionItems.forEach(i => {
        i.classList.remove("is-open");
        i.querySelector(".accordion__icon").textContent = "+";
      });

      item.classList.add("is-open");
      icon.textContent = "−";
    }
  });
});
