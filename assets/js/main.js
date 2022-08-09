function openMenu() {
  var x = document.getElementById("nav-parent");
  if (x.className === "nav-parent") {
    x.className += " open-menu";
  } else {
    x.className = "nav-parent";
  }
}

function loadMoreReview() {
  var x = document.getElementById("review-parent");
  if (x.className === "review-parent") {
    x.className += " load-review";
  } else {
    x.className = "review-parent";
  }
}
