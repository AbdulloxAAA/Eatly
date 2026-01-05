const stepsData = [
  {
    title: "Browse Restaurants And Menus",
    text: "Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
    list: [
      "It was popular in the 1960s with the release",
      "Lorem Ipsum passages, and more recently",
    ],
  },
  {
    title: "Select Your Items",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
  },
  {
    title: "Place Your Order",
    text: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.`,
  },
];

const articlesData = [
  {
    img: "../images/page-6/page-6img1.jpg",
    title: "How To Deposit In DaPay ?",
  },
  {
    img: "../images/page-6/page-6img6.jpg",
    title: "Top 5 Business Ideas",
  },
  {
    img: "../images/page-6/page-6img5.jpg",
    title: "How To Control Money ?",
  },
];

const content = document.getElementById("guideContent");

/// ===== STEPS =====
const stepsDiv = document.createElement("div");
stepsDiv.className = "steps";

stepsData.forEach((step) => {
  const stepDiv = document.createElement("div");
  stepDiv.className = "step";

  const h3 = document.createElement("h3");
  h3.textContent = step.title;

  const p = document.createElement("p");
  p.textContent = step.text;

  stepDiv.append(h3, p);

  if (step.list) {
    const ul = document.createElement("ul");

    step.list.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    stepDiv.appendChild(ul);
  }

  stepsDiv.appendChild(stepDiv);
});

const btn = document.createElement("button");
btn.className = "btni";
btn.textContent = "Next Article →";

stepsDiv.appendChild(btn);

/// ===== ARTICLES =====
const aside = document.createElement("aside");
aside.className = "articles";

const h4 = document.createElement("h4");
h4.textContent = "Top Articles";
aside.appendChild(h4);

articlesData.forEach((article) => {
  const card = document.createElement("div");
  card.className = "article-card";

  const img = document.createElement("img");
  img.src = article.img;

  const info = document.createElement("div");

  const h5 = document.createElement("h5");
  h5.textContent = article.title;

  const conpink = document.createElement("div");
  conpink.className = "conpink";

  const avatar = document.createElement("img");
  avatar.src = "../images/page-6/pink-girl.png";

  const authorDiv = document.createElement("div");
  const span = document.createElement("span");
  span.textContent = "Written By";

  const pAuthor = document.createElement("p");
  pAuthor.className = "pi";
  pAuthor.textContent = "Perperzon";

  authorDiv.append(span, pAuthor);

  const date = document.createElement("div");
  date.className = "data";
  date.textContent = "15 DEC, 2022";

  conpink.append(avatar, authorDiv, date);
  info.append(h5, conpink);
  card.append(img, info);

  aside.appendChild(card);
});

/// ===== APPEND ALL =====
content.append(stepsDiv, aside);
