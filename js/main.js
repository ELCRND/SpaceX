document.querySelectorAll(".question-wrap").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("open");
  })
);
