"use strict";

let tabs = document.querySelectorAll(".tabs button");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		tabContents.forEach((content) => {
			content.classList.remove("active");
		});

		tabs.forEach((tab) => {
			tab.classList.remove("active");
			console.log(tab);
		});

		tabContents[index].classList.add("active");
		tabs[index].classList.add("active");
	});
});
