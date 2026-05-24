function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "block";
  modal.style.animation = "fadeIn 0.5s ease forwards";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.animation = "fadeOut 0.5s ease forwards";
  setTimeout(() => { modal.style.display = "none"; }, 500);
}


