 //Click Event To Open Menu On Mobile Devices

let button = document.querySelector(".icon");
let lock = document.body;
let mobile = document.querySelector(".mobile-menu");
let mobMenu = document.querySelector(".mobile-list");
button.addEventListener("click", () => {
  if (button.className === "icon") {
    button.className += " active";
    lock.className = "lock";
    mobile.className += " show";
    mobMenu.className += " show";
  } else {
    button.className = "icon";
    lock.className = "";
    mobile.className = "mobile-menu";
    mobMenu.className = "mobile-list";
  }
});
