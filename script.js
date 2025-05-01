const mobileMenuOpen = document.querySelector(".fa-bars");
const mobileMenuOpenBtn = document.getElementById("openMenu");
const showNav = document.getElementById("nav-ul-show");

const mobileMenuClose = document.querySelector(".fa-xmark");
const mobileMenuCloseBtn = document.getElementById("closeMenu");
const hideNav = document.getElementById("nav-ul-show");

function openBtn() {
  mobileMenuOpen.addEventListener("click", () => {
    showNav.style.display = "block";
    mobileMenuOpen.style.display = "none";
    mobileMenuClose.style.display = "block";
  });
}

function closeBtn() {
  mobileMenuClose.addEventListener("click", () => {
    showNav.style.display = "none";
    mobileMenuClose.style.display = "none";
    mobileMenuOpen.style.display = "block";
  });
}

if (mobileMenuOpen) {
  openBtn();
}
if (mobileMenuClose) {
  closeBtn();
}

// Load more news feeds
const loadMoreBtn = document.querySelector(".load-news-cta");
const hiddenNewsCard = document.querySelectorAll(".loadNews");

loadMoreBtn.addEventListener("click", () => {
  hiddenNewsCard.forEach((loadNews) => loadNews.classList.remove("loadNews"));
  loadMoreBtn.style.display = "none"; // hide button after all items are shown
});
