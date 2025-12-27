const loading=document.querySelector(".loading");
window.addEventListener("load", ()=>{
  loading.classList.add("loading-hidden")
})
const burger = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileDrop = document.querySelector(".mobile-drop");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-none");
});
////////////section////////////////////////
const dropdown = document.querySelector('.dropdown');
const dropdownBtn = dropdown.querySelector('.dropdown-btn');

dropdownBtn.addEventListener('click', (e) => {
  e.preventDefault(); // linkning default harakatini to‘xtatadi
  dropdown.classList.toggle('active'); // click bilan ochish/yopish
});

// Optional: klik qayerga bo‘lsa, dropdownni yopish
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});