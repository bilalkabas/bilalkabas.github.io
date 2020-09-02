let elements = document.querySelectorAll("nav a");
for (let i = 0; i < elements.length; i++) {
	elements[i].style.paddingTop = `${
		window.innerHeight / 10 - ((window.innerHeight / 10) % 1)
	}px`;
}

window.addEventListener("resize", () => {
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.paddingTop = `${
			window.innerHeight / 10 - ((window.innerHeight / 10) % 1)
		}px`;
	}
});
