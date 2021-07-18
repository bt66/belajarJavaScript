const addToCart = document.querySelectorAll("button");
let barangDiKeranjang = document.querySelector("p");
let stockSepatu = document.getElementsByClassName("stock");

for (let a = 1; a < addToCart.length; a++){
    addToCart[a].addEventListener("click", function(event){
        barangDiKeranjang.innerText++;
        stockSepatu[a-1].innerText--;
        if (stockSepatu[a-1].innerText == "0"){
            addToCart[a].disabled = true;
            addToCart[a].innerHTML = "Out of Stock";
            addToCart[a].style.backgroundColor = "rgb(85, 85, 85)";
        }
    })
}

console.log("perulangan selesaI");






