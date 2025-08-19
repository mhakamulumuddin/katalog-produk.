// Toggle Menu (Hamburger)
const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
  });

  window.onscroll = () => {
    menu.classList.remove("menu-active");
  };
}

// Filter Produk
const btnFilter = document.querySelectorAll(".produk-box ul li");
const imgItem = document.querySelectorAll(".produk-list img");

btnFilter.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Hapus class active dari semua tombol
    btnFilter.forEach((b) => b.classList.remove("active"));

    // Tambahkan class active ke tombol yang diklik
    btn.classList.add("active");

    // Ambil teks tombol yang diklik
    const btnText = btn.textContent.trim().toLowerCase();

    // Filter gambar
    imgItem.forEach((img) => {
      img.style.display = "none";
      if (btnText === "all produk" || img.dataset.filter === btnText) {
        img.style.display = "block";
      }
    });
  });
});