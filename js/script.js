const link = document.querySelectorAll(".list-item-link");
const icon = document.querySelectorAll(".list-item-icon");
const text = document.querySelectorAll(".list-item-text");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(event) {
    if (text[i].style.display == "none" || text[i].style.display == "") {
      link[i].setAttribute("style", "font-weight:700");
      icon[i].setAttribute("style", "transition:transform 0.2s linear;transform:rotate(180deg)");
      text[i].setAttribute("style", "display:block");
    } else {
      link[i].setAttribute("style", "font-weight:400");
      icon[i].setAttribute("style", "transition:all 0.2s linear;transform:rotate(0deg)");
      text[i].setAttribute("style", "display:none");
    };
  });
};