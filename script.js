const spinner = document.getElementById("loader");
spinner.style.display = "none";
function timeout_trigger() {
  location.href = "https://www.google.com";
}

function timeout_init() {
  spinner.style.display = "block";
  setTimeout(() => {
    spinner.style.display = "none";
    location.href = "https://www.google.com";
  }, 5000);
}
