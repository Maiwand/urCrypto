function openMenu() {
  var x = document.getElementById("nav-parent");
  if (x.className === "nav-parent") {
    x.className += " open-menu";
  } else {
    x.className = "nav-parent";
  }
}
