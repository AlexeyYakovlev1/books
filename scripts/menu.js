const $mobileMenuIcon = document.querySelector(".mobile__menu--icon");
const $mobileMenuNav = document.querySelector(".mobile__menu--nav");

$mobileMenuIcon.addEventListener("click", () => {
	$mobileMenuNav.classList.toggle("hidden");
});