const openModalBtnEl = document.getElementById("open-modal-btn");
const accessibleModalEl = document.getElementById("accessibleModal");
const closeModalBtnEl = document.getElementById("closeModalBtn");

function openModal() {
  accessibleModalEl.style.display = "block";
  accessibleModalEl.focus();
}

function closeModal() {
  accessibleModalEl.style.display = "none";
  openModalBtnEl.focus();
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && accessibleModalEl.style.display === "block") {
    closeModal();
  }
});
