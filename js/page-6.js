const articlesData = [
  {
    title: "How To Order Food ?",
    image: "../images/page-6/page-6img1.jpg",
    author: "Perperzon",
    avatar: "../images/page-6/pink-girl.png",
    date: "15 DEC, 2022"
  },
  {
    title: "How To Track The Order ?",
    image: "../images/page-6/page-6img2.jpg",
    author: "Perperzon",
    avatar: "../images/page-6/pink-girl.png",
    date: "15 DEC, 2022"
  },
  {
    title: "How To Manage Cards ?",
    image: "../images/page-6/page-6img3.jpg",
    author: "Perperzon",
    avatar: "../images/page-6/pink-girl.png",
    date: "15 DEC, 2022"
  },
  {
    title: "Tips & Tricks For Business",
    image: "../images/page-6/page-6img4.jpg",
    author: "Perperzon",
    avatar: "../images/page-6/pink-girl.png",
    date: "15 DEC, 2022"
  },
  {
    title: "How To Control Money ?",
    image: "../images/page-6/page-6img5.jpg",
    author: "Perperzon",
    avatar: "../images/page-6/pink-girl.png",
    date: "15 DEC, 2022"
  },
  {
    title: "Top 5 Business Ideas",
    image: "../images/page-6/page-6img6.jpg",
    author: "Perperzon",
    avatar: "../images/page-6/pink-girl.png",
    date: "15 DEC, 2022"
  }
];

const grid = document.getElementById("articlesGrid");

articlesData.map(article => {
  // Card
  const card = document.createElement("article");
  card.className = "article-card";

  // Image wrapper
  const imageBox = document.createElement("div");
  imageBox.className = "article-card__image";

  const img = document.createElement("img");
  img.src = article.image;
  img.alt = article.title;

  imageBox.appendChild(img);

  // Title
  const title = document.createElement("h3");
  title.className = "article-card__heading";
  title.textContent = article.title;

  // Meta
  const meta = document.createElement("div");
  meta.className = "article-card__meta";

  // Author
  const authorBox = document.createElement("div");
  authorBox.className = "article-card__author";

  const avatar = document.createElement("img");
  avatar.src = article.avatar;
  avatar.alt = article.author;

  const name = document.createElement("span");
  name.textContent = article.author;

  authorBox.append(avatar, name);

  // Date
  const date = document.createElement("time");
  date.textContent = article.date;

  meta.append(authorBox, date);

  // Append all
  card.append(imageBox, title, meta);
  grid.appendChild(card);
});
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
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