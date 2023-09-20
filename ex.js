let button = document.querySelector(".mBtn");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let mContainer = document.querySelector(".mobile-menu-container");
let features = document.querySelector("#features");
let featuresMenu = document.querySelector(".mobile-features-menu");
let company = document.querySelector("#company");
let companyMenu = document.querySelector(".mobile-company-menu");
let arrowImg1 = document.querySelector("#arrow-image1");
let arrowImg2 = document.querySelector("#arrow-image2");
let sidebar = document.querySelector(".sidebar-menu");

arrowImg1.style.transform = "rotate(0deg)";
arrowImg1.style.webkitTransform = "rotate(0deg)";
arrowImg2.style.transform = "rotate(0deg)";
arrowImg2.style.webkitTransform = "rotate(0deg)";

button.addEventListener("click", () => {
	span2.classList.toggle("line2");
	span1.classList.toggle("line1");
	span3.classList.toggle("line3");
	mContainer.classList.toggle("open");
	sidebar.classList.toggle("sidebar-menu-open");
});

features.addEventListener("click", () => {
	featuresMenu.classList.toggle("features-open");
	if(arrowImg1.style.transform == "rotate(0deg)" || arrowImg1.style.webkitTransform == "rotate(0deg)") {
		arrowImg1.style.transform = "rotate(180deg)";
		arrowImg1.style.webkitTransform = "rotate(180deg)";
	} else {
		arrowImg1.style.transform = "rotate(0deg)";
		arrowImg1.style.webkitTransform = "rotate(0deg)";
	}
});

company.addEventListener("click", () => {
	companyMenu.classList.toggle("company-open");
	if(arrowImg2.style.transform == "rotate(0deg)" || arrowImg2.style.webkitTransform == "rotate(0deg)") {
		arrowImg2.style.transform = "rotate(180deg)";
		arrowImg2.style.webkitTransform = "rotate(180deg)";
	} else {
		arrowImg2.style.transform = "rotate(0deg)";
		arrowImg2.style.webkitTransform = "rotate(0deg)";
	}
});