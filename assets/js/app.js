// MULTIPLE HEADER TITLE

function multiTitle(pageTitle, newPageTitle) {
  document.title == pageTitle
    ? (document.title = newPageTitle)
    : (document.title = pageTitle);
}
setInterval("multiTitle('HWAN JR. | VIETNAM', 'HWAN JR. | WEB DEVELOPER')", 5000);

// NAVBAR
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

const navList = document.querySelectorAll(".nav-list");
function activeNav() {
  navList.forEach((listItem) => 
  listItem.classList.remove("active"));
  this.classList.add("active");
}
navList.forEach((listItem) => listItem.addEventListener("click", activeNav));