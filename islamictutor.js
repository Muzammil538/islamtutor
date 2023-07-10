const menuIcon = document.querySelector("#menuIcon");
const headerLinks = document.querySelector(".header_links");

menuIcon.addEventListener("click", ()=>{
  headerLinks.classList.toggle("active")
})