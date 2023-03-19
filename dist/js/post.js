function PostShowMore() {
	console.log("PostShowMore");
}

function PostTextUp() {
	let fontSize = Number(localStorage.getItem("post-font-size"));
	if (fontSize < 2) {
		fontSize += 1;
		localStorage.setItem("post-font-size", fontSize);
	}

	SetFontSize(fontSize);
}

function PostTextDown() {
	let fontSize = Number(localStorage.getItem("post-font-size"));
	if (fontSize > -2) {
		fontSize -= 1;
		localStorage.setItem("post-font-size", fontSize);
	}

	SetFontSize(fontSize);
}

function PostTextDefault() {
	localStorage.getItem("post-font-size", 0);
	SetFontSize(0);
}

function SetFontSize(num) {
	let block = document.getElementById("post--main");

	if (num == 2) {
		console.log("2");
		block.classList.remove("post--font-size-u1");
		block.classList.remove("post--font-size-u2");
		block.classList.remove("post--font-size-d1");
		block.classList.remove("post--font-size-d2");
		block.classList.add("post--font-size-u2");
	} else if (num == 1) {
		console.log("1");
		block.classList.remove("post--font-size-u1");
		block.classList.remove("post--font-size-u2");
		block.classList.remove("post--font-size-d1");
		block.classList.remove("post--font-size-d2");
		block.classList.add("post--font-size-u1");
	} else if (num == -1) {
		console.log("-1");
		block.classList.remove("post--font-size-u1");
		block.classList.remove("post--font-size-u2");
		block.classList.remove("post--font-size-d1");
		block.classList.remove("post--font-size-d2");
		block.classList.add("post--font-size-d1");
	} else if (num == -2) {
		console.log("-2");
		block.classList.remove("post--font-size-u1");
		block.classList.remove("post--font-size-u2");
		block.classList.remove("post--font-size-d1");
		block.classList.remove("post--font-size-d2");
		block.classList.add("post--font-size-d2");
	} else {
		console.log("default");
		block.classList.remove("post--font-size-u1");
		block.classList.remove("post--font-size-u2");
		block.classList.remove("post--font-size-d1");
		block.classList.remove("post--font-size-d2");
	}
}

let fontSize = Number(localStorage.getItem("post-font-size"));
if (fontSize !== null) {
	SetFontSize(fontSize);
}
