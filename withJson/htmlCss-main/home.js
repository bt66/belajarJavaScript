// const addToCart = document.querySelectorAll("button");
// let barangDiKeranjang = document.querySelector("p");
// let stockSepatu = document.getElementsByClassName("stock");

// for (let a = 1; a < addToCart.length; a++) {
//   addToCart[a].addEventListener("click", function (event) {
//     barangDiKeranjang.innerText++;
//     stockSepatu[a - 1].innerText--;
//     if (stockSepatu[a - 1].innerText == "0") {
//       addToCart[a].disabled = true;
//       addToCart[a].innerHTML = "Out of Stock";
//       addToCart[a].style.backgroundColor = "rgb(85, 85, 85)";
//     }
//   });
// }

// console.log("perulangan selesaI");

const products = [
  {
    name: "Sepatu Vans BW Old School",
    stock: 23,
    price: 23000,
  },
  {
    name: "Tas Vans ",
    stock: 12,
    price: 13000,
  },
  {
    name: "Kaos biasa",
    stock: 33,
    price: 33000,
  },
  {
    name: "Sepatu Vans BW Old School mengagumkan",
    stock: 23,
    price: 23000,
  },
  {
    name: "Tas Vans agak biasa",
    stock: 12,
    price: 13000,
  },
  {
    name: "Kaos Premium",
    stock: 33,
    price: 33000,
  },
  {
    name: "Sepatu Vans BW Old School bekas like new",
    stock: 23,
    price: 23000,
  },
  {
    name: "Tas Vans Limited Edition",
    stock: 12,
    price: 13000,
  },
  {
    name: "Kaos Mahal",
    stock: 33,
    price: 33000,
  },
  {
    name: "Sepatu Vans BW Old School Hilang sebelah",
    stock: 23,
    price: 23000,
  },
  {
    name: "Tas Vans Istimewa",
    stock: 12,
    price: 13000,
  },
  {
    name: "Kaos Bekas",
    stock: 33,
    price: 33000,
  },
  {
    name: "Sepatu Vans BW Old School tali hilang",
    stock: 23,
    price: 23000,
  },
  {
    name: "Tas Vans rit dol",
    stock: 12,
    price: 13000,
  },
  {
    name: "Kaos Tidak layak pakai",
    stock: 33,
    price: 33000,
  },
  {
    name: "Sepatu Vans BW Old School jebol",
    stock: 23,
    price: 23000,
  },
  {
    name: "Tas Vans hampir jebol",
    stock: 12,
    price: 13000,
  },
  {
    name: "Kaos Terlalu murah",
    stock: 33,
    price: 33000,
  },
  {
    name: "Sepatu Vans BW Old School belubang",
    stock: 23,
    price: 23000,
  },
  {
    name: "Tas Vans Biasa Saja",
    stock: 12,
    price: 13000,
  },
];

const app = document.querySelector('.card');
status = true;
const getData = new Promise((resolve,reject) => {
  if (status = true){
    setTimeout(()=> {
        resolve(products)
    }, 4000);
  }else{
    setTimeout(()=> {
      reject(console.log(`Failed to get Data`))
    }, 4000);
  }
})

console.log(getData);
let cards = '';
const content = document.querySelector(".content")
getData
  .finally(()=> {
    document.createElement
  })
  .then(isiData => {
    isiData.map((value) => {
      const isi = `
      <div class="luar">
                <img src="./fns.jpg" alt="gambarsepatu">
                <p>${value.name}</p>
                <div class="hargaTerjual">
                    <div>
                        <p>${value.price}</p>
                    </div>
                    <div>
                        <p id="stck">stock: </p>
                        <p class="stock">${value.stock} </p>
                    </div>
                </div>
                <div class="addToCard">
                    <button type="submit" class="btn"><a href="#">Tambah Ke Keranjang</a></button>
                </div>
            </div>
      `;
      app.innerHTML += isi;
      console.log(value.name);
    })

    let addToCart = document.querySelectorAll(".btn");
    let barangDiKeranjang = document.querySelector("p");
    let stockSepatu = document.getElementsByClassName("stock");

    for (let a = 0; a < addToCart.length; a++) {
      addToCart[a].addEventListener("click", function (event) {
        barangDiKeranjang.innerText++;
        stockSepatu[a].innerText--;
        if (stockSepatu[a].innerText == "0") {
          addToCart[a].disabled = true;
          addToCart[a].innerHTML = "Out of Stock";
          addToCart[a].style.backgroundColor = "rgb(85, 85, 85)";
        }
      })
    }
      
  })
  .catch(response => console.log("data notOK : " + response));

  

// const addToCart = document.querySelectorAll("button");
// let barangDiKeranjang = document.querySelector("p");
// let stockSepatu = document.getElementsByClassName("stock");

// for (let a = 1; a < addToCart.length; a++) {
//   addToCart[a].addEventListener("click", function (event) {
//     barangDiKeranjang.innerText++;
//     stockSepatu[a - 1].innerText--;
    // if (stockSepatu[a - 1].innerText == "0") {
    //   addToCart[a].disabled = true;
    //   addToCart[a].innerHTML = "Out of Stock";
    //   addToCart[a].style.backgroundColor = "rgb(85, 85, 85)";
//     }
//   });
// }


