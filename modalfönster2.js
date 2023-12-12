const openDialogBtnEl = document.getElementById("open-dialog-btn");
const accessibleDialogEl = document.getElementById("accessibleDialog");
const closeDialogBtnEl = document.getElementById("closeDialogBtn");

function openDialog() {
  accessibleDialogEl.style.display = "block";
  accessibleDialogEl.focus();
}

function closeDialog() {
  accessibleDialogEl.style.display = "none";
  openDialogBtnEl.focus();
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && accessibleDialogEl.style.display === "block") {
    closeDialog();
  }
});
