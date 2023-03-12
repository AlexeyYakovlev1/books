const $mobileMenuIcon = document.querySelector(".mobile__menu--icon");
const $mobileMenuNav = document.querySelector(".mobile__menu--nav");
const $mobileMenuClose = document.querySelector(".mobile__menu--close");

$mobileMenuIcon.addEventListener("click", () => {
	$mobileMenuNav.classList.remove("hidden");
	$mobileMenuClose.classList.remove("hidden");
	$mobileMenuIcon.classList.add("hidden");
});

$mobileMenuClose.addEventListener("click", () => {
	$mobileMenuNav.classList.add("hidden");
	$mobileMenuClose.classList.add("hidden");
	$mobileMenuIcon.classList.remove("hidden");
});