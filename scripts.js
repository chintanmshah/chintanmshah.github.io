var arr = [
	"Hello from the other side :)",
	"My name is Chintan",
	"",
	"",
	"There isn't much to see here now :(",
	"But you can find me on these social media platforms",
	"",
	"LinkedIn|https://www.linkedin.com/in/chintan08/",
	"Instagram|https://www.instagram.com/chin._.tan/",
	"Facebook|https://www.facebook.com/i.am.chintan.shah",
	"",
	"That's All Folks!",
];

var container = document.getElementById("container");
var cursor = document.getElementById("cursor");

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function addLineToScreen() {
	for (let line of arr) {
		const txt = document.createElement("span");
		const link = document.createElement("a");
		txt.innerHTML = `C:\\Home> `;
		container.insertBefore(txt, cursor);

		let isLink = line.indexOf("https") >= 0 ? true : false;

		if (isLink) {
			let href = line.split("|")[1];
            link.setAttribute("href", href);
            link.setAttribute("target", "_blank");
			txt.appendChild(link);
		}

		for (let i of line) {
			if (i == "|") break;

			await delay(100);

			isLink ? (link.innerHTML += i) : (txt.innerHTML += i);
		}
		await delay(1000);

		const lb = document.createElement("br");
		container.insertBefore(lb, cursor);
	}
}
addLineToScreen();
