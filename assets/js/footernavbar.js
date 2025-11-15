function includeHTML(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

includeHTML("navbar", "/navbar.html");
includeHTML("footer", "/footer.html");
