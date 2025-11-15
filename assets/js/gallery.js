document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const itemWidth = 160 + 24; // width + gap
  let totalImages = 0;
  let loadedImages = 0;

  // Fungsi untuk memuat gambar
  function loadGalleryImages() {
    let i = 1;
    const checkImage = () => {
      const img = new Image();
      img.src = `/assets/images/gallery/${i}.jpg`;

      img.onload = () => {
        // Jika gambar ada, tambahkan ke galeri
        const galleryItem = document.createElement("div");
        galleryItem.className = "flex-none snap-center w-full max-w-[160px]";
        galleryItem.innerHTML = `
          <img alt="Kegiatan kepolisian ${i}" 
               class="rounded-lg w-full h-[120px] object-cover" 
               src="/assets/images/gallery/${i}.jpg" />
        `;
        galleryContainer.appendChild(galleryItem);
        totalImages++;
        i++;
        checkImage(); // Cek gambar berikutnya
      };

      img.onerror = () => {
        // Jika gambar tidak ditemukan, hentikan loop
        console.log(`Total ${totalImages} gambar dimuat`);
        updateNavButtons();
      };
    };

    checkImage();
  }

  // Fungsi untuk update tombol navigasi
  function updateNavButtons() {
    const isStart = galleryContainer.scrollLeft < 10;
    const isEnd = galleryContainer.scrollLeft > galleryContainer.scrollWidth - galleryContainer.clientWidth - 10;

    prevBtn.style.display = isStart ? "none" : "flex";
    nextBtn.style.display = isEnd ? "none" : "flex";
  }

  // Event listeners
  prevBtn.addEventListener("click", () => {
    galleryContainer.scrollBy({ left: -itemWidth, behavior: "smooth" });
    setTimeout(updateNavButtons, 300); // Update setelah animasi selesai
  });

  nextBtn.addEventListener("click", () => {
    galleryContainer.scrollBy({ left: itemWidth, behavior: "smooth" });
    setTimeout(updateNavButtons, 300);
  });

  galleryContainer.addEventListener("scroll", updateNavButtons);

  // Inisialisasi
  loadGalleryImages();
  prevBtn.style.display = "none"; // Sembunyikan tombol prev awal
});
