function toggleDarkMode() {
  let val = !localStorage.getItem("lightmode");
  localStorage.setItem("lightmode", val);
  document.body.classList.toggle("light");
}
document.addEventListener("ready", () => {
  if (localStorage.lightmode) {
    document.body.classList.add("light");
    document.getElementById("dlswitch").checked = false;
  } else {
    document.getElementById("dlswitch").checked = true;
  }
});
function updateSwitch(self) {
  let lightmode = localStorage.getItem("lightmode");
  if (lightmode === undefined) {
    localStorage.setItem("lightmode", false);
  } else if (lightmode === true) {
    document.body.classList.add("light");
    self.checked = false;
  } else {
    self.checked = true;
  }
}
window.addEventListener("load", () => {
  var dlswitch = document.getElementById("dlswitch");
  updateSwitch(dlswitch);
  dlswitch.addEventListener("click", toggleDarkMode);
  document.getElementById("logo").addEventListener("click", () => {
    window.scrollTo(0, 0);
    window.location.href = "https://ohsey.me/";
  });
});
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      (window.scrollY / window.innerHeight) * 3
    );
  },
  false
);
