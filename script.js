// Add your code to this file
document.body.style.backgroundColor = "blue";

b = document.querySelector("#starters_image_div img");
b.style.border = "5px dotted white"


let b_2 = document.querySelectorAll(".pokemon_images");
for(let pos = 0; pos <b_2.length; pos++) {
    b_2[pos].style.border = "5px dotted white";
}

let end = document.querySelector("footer");
end.style.textDecoration= "overline underline";
//end.style.textDecoration= "underline";
