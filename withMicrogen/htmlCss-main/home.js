const app = document.querySelector('.card');

const halaman = document.querySelectorAll("#products ul li a");
halaman[1].style.color = "#585555"


const searchForm = document.querySelector("#searchForm");
const searchButton = document.querySelector("#searchButton")
searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  fetch('https://dev-computerhp6hm.microgen.id/api/products?where[name_contains]='+ searchForm.searchInput.value)
    .then(response => response.json())
    .then(data => {
      console.log("Sucess : "+ data );
      app.innerHTML = ``;
      data.map((value) => {
        const isi = `
        <div class="luar">
                  <img src="${value.thumbnail}" alt="gambarProduk">
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
      })
    })
})

fetch('https://dev-computerhp6hm.microgen.id/api/products')
  .then(response => response.json())
  .then(data => {
    data.map((value) => {
      const isi = `
      <div class="luar">
                <img src="${value.thumbnail}" alt="gambarProduk">
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



