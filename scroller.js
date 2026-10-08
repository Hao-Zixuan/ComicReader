console.log("Script loaded successfully.");

let comicChoose = new URLSearchParams(window.location.search);
let comic = comicChoose.get("comic");
let totalPages = Number(comicChoose.get("pages"));
let readerLink = document.getElementById("reader-link");
readerLink.href = "reader.html?comic=" + comic + "&pages=" + totalPages;
let scroller = document.getElementById("comic-scroller");

console.log(comic);
console.log(totalPages);

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

    let image = document.createElement("img");

    image.src = "https://pub-85ba040220b84456a6f9053e874047b6.r2.dev/Images/" + comic + "/" + comic + "_" + String(currentPage).padStart(5, "0") + ".jpg";

    image.classList.add("comic-page");

    scroller.appendChild(image);
}

