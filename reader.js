console.log("Script loaded successfully.");

let comicChoose = new URLSearchParams(window.location.search);
let comic = comicChoose.get("comic");
let totalPages = Number(comicChoose.get("pages"));
let currentPage = 1;
let image = document.getElementById("comic-image");
image.src = "https://pub-85ba040220b84456a6f9053e874047b6.r2.dev/Images/" + comic + "/" + comic + "_" + String(currentPage).padStart(5, "0") + ".jpg";

console.log(image);
console.log(image.src);


let pageNumber = document.getElementById("page-number");
let nextButton = document.getElementById("next-button");
let previousButton = document.getElementById("previous-button");

nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
        currentPage++;
        image.src = "https://pub-85ba040220b84456a6f9053e874047b6.r2.dev/Images/" + comic + "/" + comic + "_" + String(currentPage).padStart(5, "0") + ".jpg";
        pageNumber.textContent = currentPage + " / " + totalPages;
    }
});

previousButton.addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage--;
        image.src = "Images/" + comic + "/" + comic + "_" + String(currentPage).padStart(5, "0") + ".jpg";
        pageNumber.textContent = currentPage + " / " + totalPages;
    }
});
