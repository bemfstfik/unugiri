document.addEventListener("DOMContentLoaded", function () {
  const imageEl = document.getElementById("officerImage");
  const nameEl = document.getElementById("officerName");
  const titleEl = document.getElementById("officerTitle");

  const officers = [
    {
      img: "/assets/images/Gubernur-removebg-preview.png",
      name: "Ragil Susilo Utomo",
      title: "Gubernur BEM FST & FIK",
    },
    {
      img: "/assets/images/wagub-removebg-preview.png",
      name: "Putri Vatria Febriani",
      title: "Wakil Gubernur BEM FST & FIK",
    },
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % officers.length;
    const { img, name, title } = officers[index];

    // Fade out
    imageEl.classList.add("opacity-0");
    setTimeout(() => {
      imageEl.src = img;
      nameEl.textContent = name;
      titleEl.textContent = title;
      imageEl.classList.remove("opacity-0");
    }, 500); // Delay to allow opacity transition
  }, 4000);
});
