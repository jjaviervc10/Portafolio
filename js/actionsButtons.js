document.querySelectorAll(".nav-item[data-dialog]").forEach(button => {
  const dialogId = button.getAttribute("data-dialog");
  const dialog = document.getElementById(dialogId);

  button.addEventListener("click", () => dialog.showModal());

  dialog.querySelector(".close").addEventListener("click", () => dialog.close());
});
