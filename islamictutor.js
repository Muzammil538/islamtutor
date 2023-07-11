const menuIcon = document.querySelector("#menuIcon");
const headerLinks = document.querySelector(".header_links");
const headerForm = document.querySelector(".header_form");
const searchIcon = document.querySelector("#searchBtn");
const searchFormBtn = document.querySelector("#searchFormBtn");
const headerSearch = document.querySelector("#headerSearch");
const cardTitles = document.querySelectorAll(".card-title");


searchFormBtn.addEventListener("submit", findTab)

toggler(menuIcon, headerLinks, "bi-list", "bi-x-lg");
toggler(searchIcon, headerForm, "bi-search", "bi-x-lg");

function findTab(e) {
  e.preventDefault();
  let inputVal = headerSearch.value;
  
}


function toggler(btnEle, divEle, pClass, nClass) {
  if (btnEle && divEle) {
    btnEle.addEventListener("click", () => {
      divEle.classList.toggle("active");
      if (btnEle.classList.contains(pClass)) {
        btnEle.classList.remove(pClass);
        btnEle.classList.add(nClass);
      } else if (btnEle.classList.contains(nClass)) {
        btnEle.classList.remove(nClass);
        btnEle.classList.add(pClass);
      }
    });
  }
}
