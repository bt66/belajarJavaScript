const nextButton = document.querySelector("#next");
const backButton = document.querySelector("#back");
let page = 0;
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// const url = "https://dev-computerhp6hm.microgen.id/api/products?skip="+page;

// nextButton.addEventListener("click", (element) => {
//     page += 20;
//     console.log("page ke :" +page);
//     console.log(url)

// })
// backButton.addEventListener("click", (element) => {
//     page -= 20;
//     console.log("page ke :" +page);
//     console.log(url)
// })




// for (let page=0; page < 100; page+=20){
//     nextButton.addEventListener("click", (element) => {
//         element.preventDefault();
//         console.log("page ke :" +page);
//         const url = "https://dev-computerhp6hm.microgen.id/api/products?skip="+page;
//         console.log(url)
//     })
// }


// const url = "https://dev-computerhp6hm.microgen.id/api/products?skip=20";
// let barang = [];

// function getData() {
//     console.log("ini get data")
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data)
//             // barang = data;
//             // console.log(barang)
//             console.log(data.length)
//         })
// }
// getData();



