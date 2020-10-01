/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function togglenav() {
    let el = document.getElementById("mobile-nav-links");
    let menuIcon = document.getElementById("menu-icon");
    let exitIcon = document.getElementById("exit-icon");
    let width = window.innerWidth;

    if (el.style.height === "0px" || el.style.height === "") {
        if (width > 600) {
            el.style.height = "148px";
        } else {
            el.style.height = "103px";
        }
		menuIcon.style.display = "none";
		exitIcon.style.display = "block";
    } else {
		el.style.height = "0px";
		menuIcon.style.display = "block";
		exitIcon.style.display = "none";
    }
  }

window.onscroll = function() {navchange()};

function navchange() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("full-nav").className = "full-nav nav-onscroll";
  } else {
    document.getElementById("full-nav").className = "full-nav";
  }
}