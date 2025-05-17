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

// Load more news feeds and jobs
const loadMoreBtn = document.querySelector(".load-news-cta");
const hiddenNewsCard = document.querySelectorAll(".loadNews");

loadMoreBtn.addEventListener("click", () => {
  hiddenNewsCard.forEach((loadNews) => loadNews.classList.remove("loadNews"));
  loadMoreBtn.style.display = "none"; // hide button after all items are shown
});

//show Job Description
const btnShowJob = document.querySelector(".showJob-cta");
const btnCloseJob = document.querySelector(".closeJob-btn");
const btnOpenJob = document.querySelector(".openJob-btn");
const jobCard = document.querySelectorAll(".jobs-flex-container");
// const btnHideJob = document.querySelector(".apply-now-cta");
const ShowJob = document.querySelector(".job-card-description");

function showJobBtn() {
  btnShowJob.addEventListener("click", () => {
    ShowJob.style.display = "block";
    btnOpenJob.style.display = "none";
    btnCloseJob.style.display = "block";
  });
}
if (btnShowJob) {
  showJobBtn();
}

function closeJobBtn() {
  btnCloseJob.addEventListener("click", () => {
    ShowJob.style.display = "none";
    btnOpenJob.style.display = "block";
    btnCloseJob.style.display = "none";
  });
}
if (btnCloseJob) {
  closeJobBtn();
}
