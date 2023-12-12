const burgarEl = document.getElementById("burgar");
console.log(burgarEl);
const navEl = document.querySelector(".nav");
console.log(navEl);

burgarEl.addEventListener("click", function () {
  navEl.style.display = "block";
});
