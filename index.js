const elementDuvida = document.querySelectorAll(".duvida");

elementDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("active");
  });
});
