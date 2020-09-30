/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function togglenav() {
    let el = document.getElementById("mobile-nav-links");
    let menuIcon = document.getElementById("menu-icon");
    let exitIcon = document.getElementById("exit-icon");
    if (el.style.height === "0px" || el.style.height === "") {
		el.style.height = "103px";
		menuIcon.style.display = "none";
		exitIcon.style.display = "block";
    } else {
		el.style.height = "0px";
		menuIcon.style.display = "block";
		exitIcon.style.display = "none";
    }
  }