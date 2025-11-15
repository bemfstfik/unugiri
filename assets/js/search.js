document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  // Daftar layanan yang bisa dicari
  const services = [
    {
      name: "BPKB/STNK",
      description: "Dokumen kendaraan bermotor yang wajib dimiliki oleh setiap pemilik kendaraan.",
      url: "/layanan/bpkb-stnk",
    },
    {
      name: "SIM",
      description: "Surat Izin Mengemudi yang wajib dimiliki oleh pengemudi kendaraan bermotor.",
      url: "/layanan/sim",
    },
    {
      name: "SKCK",
      description: "Surat Keterangan Catatan Kepolisian yang digunakan untuk berbagai keperluan administrasi.",
      url: "/layanan/skck",
    },
    {
      name: "Pengawalan",
      description: "Layanan pengamanan untuk acara resmi, kunjungan VIP, dan transportasi khusus.",
      url: "/layanan/pengawalan",
    },
    {
      name: "Izin Keramaian",
      description: "Perizinan penyelenggaraan acara masyarakat.",
      url: "/layanan/izin-keramaian",
    },
    {
      name: "Besuk Tahanan",
      description: "Layanan untuk membesuk tahanan di rumah tahanan Polri.",
      url: "/layanan/besuk-tahanan",
    },
    {
      name: "SPKT",
      description: "Sentra Pelayanan Kepolisian Terpadu untuk laporan masyarakat.",
      url: "/layanan/spkt",
    },
    {
      name: "SKCK Online",
      description: "Layanan pembuatan SKCK secara daring.",
      url: "/layanan/skck-online",
    },
    {
      name: "TACS",
      description: "Teknologi Audio Call System inovasi layanan berbasis suara.",
      url: "/layanan/tacs",
    },
    {
      name: "ANTRIAN ONLINE",
      description: "Layanan antrian berbasis online.",
      url: "/antrian-online",
    },
  ];

  function showResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
      searchResults.innerHTML = '<p class="text-gray-600">Layanan tidak ditemukan</p>';
    } else {
      results.forEach((service) => {
        const resultItem = document.createElement("a");
        resultItem.href = service.url;
        resultItem.className = "block p-3 hover:bg-gray-50 rounded transition";
        resultItem.innerHTML = `
          <h4 class="font-semibold text-[#f9a14a]">${service.name}</h4>
          <p class="text-sm text-gray-600">${service.description}</p>
        `;
        searchResults.appendChild(resultItem);
      });
    }

    searchResults.classList.remove("hidden");
  }

  // Live search ketika user mengetik
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
      searchResults.classList.add("hidden");
      return;
    }

    const filteredServices = services.filter((service) => service.name.toLowerCase().includes(query) || service.description.toLowerCase().includes(query));

    showResults(filteredServices);
  });

  // Sembunyikan hasil ketika klik di luar form
  document.addEventListener("click", function (e) {
    if (!searchForm.contains(e.target)) {
      searchResults.classList.add("hidden");
    }
  });
});
