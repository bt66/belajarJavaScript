let cardContainer = document.querySelector(".cardContainer")
const nextButton = document.querySelector("#next");
const backButton = document.querySelector("#back");
let page = 20;

if (page == 20){
    backButton.style.display = "none";
}

// pagination
nextButton.addEventListener("click", (element) => {
    page += 20;
    if (page >= 20){
        backButton.style.display = "block";
    }
    console.log("page ke :" +page);
    console.log("https://dev-computerhp6hm.microgen.id/api/products?skip="+page)
    fetch("https://dev-computerhp6hm.microgen.id/api/products?skip="+page)
  .then(response => response.json())
  .then(response => {
      console.log("total data :"+response.length);
      if (response.length < 20){
        nextButton.style.display = "none";
      }else {
        nextButton.style.display = "block"; 
      }
    cardContainer.innerHTML = ``;
      response.map((value) => {
          const card = `
                <div class="card">
                    <div>
                        <img src="${value.thumbnail}" alt="foto_produk" width="150" height="150">
                    </div>
                    <div class="detailProduct">
                        <p>${value.name}</p>
                        <p>Harga Produk : ${value.price}</p>
                        <p>Stock : ${value.stock}</p>
                        <p>Product ID : <span id="productID">${value.id}</span></p>
                    </div>
                    <div class="icon">
                        <div class="editButton">
                            <button type="submit" class="buttonEdit" value="${value.id}"><img src="./assets/edit/1x/outline_edit_white_24dp.png" alt="editicon"></button>
                        </div>
                        <div class="deleteButton">
                            <button type="submit" class="buttonDelete" value="${value.id}"><img src="./assets/delete/1x/outline_delete_white_24dp.png" alt="deleteicon"></button>
                        </div>
                    </div>
                </div>
        `
        cardContainer.innerHTML += card;

      })
      let deleteButton = document.getElementsByClassName("buttonDelete")
      let editButton = document.getElementsByClassName("buttonEdit")
      let productID = document.querySelectorAll("#productID")
      let cards = document.querySelectorAll(".card")
      let modalBox = document.querySelector(".modalContainer")
      let isi = document.querySelector(".isi")
      const closeModalBox = document.querySelector(".close")
      for (let a = 0; a < deleteButton.length; a++) {
          deleteButton[a].addEventListener("click", event => {
              console.log(deleteButton[a].value)
              console.log('https://dev-computerhp6hm.microgen.id/api/products/'+deleteButton[a].value);
              fetch('https://dev-computerhp6hm.microgen.id/api/products/'+deleteButton[a].value, {method: 'DELETE',})
                .then(result => console.log(result));
              cards[a].style.display = "none";
          })
          editButton[a].addEventListener("click", event => {
              console.log(editButton[a].value)
            console.log('https://dev-computerhp6hm.microgen.id/api/products/'+editButton[a].value);
            modalBox.style.display = "block";
            fetch('https://dev-computerhp6hm.microgen.id/api/products/'+editButton[a].value)
                .then(result => result.json())
                .then(result => {
                    isi.innerHTML = `
                    <!-- The Modal -->
                    <div id="myModal" class="modal">
                    <!-- Modal content -->
                        <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Some text in the Modal..</p>
                        </div>
                    </div>
                    `
                    let form = document.querySelector("#updateForm");
                    const submit = document.querySelector("#update");
                    
                    submit.addEventListener("click", (event) => {
                        event.preventDefault();
                        console.log("https://dev-computerhp6hm.microgen.id/api/products/"+editButton[a].value)
                        let form = document.querySelector("#updateForm");
                        const data = new FormData();
                        data.append("name", `${form.name.value}`);
                        data.append("description", `${form.description.value}`);
                        data.append("price",form.harga.value)
                        data.append("category","LAPTOP")
                        data.append("stock",form.stock.value)
                        if (image.files[0] == undefined){
                            data.append("thumbnail",form.imageurl.value)
                        }else {
                            data.append("thumbnail",image.files[0])
                        }
                        fetch('https://dev-computerhp6hm.microgen.id/api/products/'+editButton[a].value,{
                            method: 'PATCH',
                            body: data,
                        })
                            .then(response => response.json())
                            .then(response => console.log("Sukses :" + response))

                    })

                });
                
          })
      }

      closeModalBox.addEventListener("click", closemodalbox => {
        modalBox.style.display = "none";
      })     
  });

})

// pagination back
backButton.addEventListener("click", (element) => {
    page -= 20;
    if (page == 0){
        backButton.style.display = "none";
    }
    
    console.log("page ke :" +page);
    console.log("https://dev-computerhp6hm.microgen.id/api/products?skip="+page)
    fetch("https://dev-computerhp6hm.microgen.id/api/products?skip="+page)
  .then(response => response.json())
  .then(response => {
    if (response.length < 20){
        nextButton.style.display = "none";
      }else {
        nextButton.style.display = "block"; 
      }
    cardContainer.innerHTML = ``;
      response.map((value) => {
          const card = `
                <div class="card">
                    <div>
                        <img src="${value.thumbnail}" alt="foto_produk" width="150" height="150">
                    </div>
                    <div class="detailProduct">
                        <p>${value.name}</p>
                        <p>Harga Produk : ${value.price}</p>
                        <p>Stock : ${value.stock}</p>
                        <p>Product ID : <span id="productID">${value.id}</span></p>
                    </div>
                    <div class="icon">
                        <div class="editButton">
                            <button type="submit" class="buttonEdit" value="${value.id}"><img src="./assets/edit/1x/outline_edit_white_24dp.png" alt="editicon"></button>
                        </div>
                        <div class="deleteButton">
                            <button type="submit" class="buttonDelete" value="${value.id}"><img src="./assets/delete/1x/outline_delete_white_24dp.png" alt="deleteicon"></button>
                        </div>
                    </div>
                </div>
        `
        cardContainer.innerHTML += card;

      })
      let deleteButton = document.getElementsByClassName("buttonDelete")
      let editButton = document.getElementsByClassName("buttonEdit")
      let productID = document.querySelectorAll("#productID")
      let cards = document.querySelectorAll(".card")
      let modalBox = document.querySelector("#myModal")
      let isi = document.querySelector(".isi")
      const closeModalBox = document.querySelector(".close")
      for (let a = 0; a < deleteButton.length; a++) {
          deleteButton[a].addEventListener("click", event => {
              console.log(deleteButton[a].value)
              console.log('https://dev-computerhp6hm.microgen.id/api/products/'+deleteButton[a].value);
              fetch('https://dev-computerhp6hm.microgen.id/api/products/'+deleteButton[a].value, {method: 'DELETE',})
                .then(result => console.log(result));
              cards[a].style.display = "none";
          })
          editButton[a].addEventListener("click", event => {
              console.log(editButton[a].value)
            console.log('https://dev-computerhp6hm.microgen.id/api/products/'+editButton[a].value);
            modalBox.style.display = "block";
            fetch('https://dev-computerhp6hm.microgen.id/api/products/'+editButton[a].value)
                .then(result => result.json())
                .then(result => {
                    isi.innerHTML = `
                    <!-- The Modal -->
                    <div id="myModal" class="modal">
                    <!-- Modal content -->
                        <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Some text in the Modal..</p>
                        </div>
                    </div>
                    `
                    // <p>Judul barang : ${result.name}</p>
                    // <img src="${result.thumbnail}" alt="foto produk" width="150" height="150">
                    // <p>category : ${result.category}</p>
                    // <p>harga : ${result.price}</p>
                    // <p>stock : ${result.stock}</p>
                    // <p>deskripsi : ${result.description}</p>
                    // <form action="./editProducts.js" method="POST" id="updateForm">
                    //             <label for="name">Name : </label>
                    //             <input type="text" name="name" id="name" placeholder="Name" value="${result.name}">
                    //             <br>
                    //             <label for="image">Image : </label>
                    //             <input type="file" name="image" id="image">
                    //             <br>
                    //             <label for="image">Image : </label>
                    //             <input type="text" name="imageurl" id="imageurl" value="${result.thumbnail}">
                    //             <br>
                    //             <label for="harga">Harga : </label>
                    //             <input type="text" name="harga" id="harga" value="${result.price}">
                    //             <br>
                    //             <label for="stock">Stock : </label>
                    //             <input type="text" name="stock" id="stock" value="${result.stock}">
                    //             <br>
                    //             <label for="description">Description : </label>
                    //             <input type="text" name="description" id="description" value="${result.description}">
                    //             <br>
                    //             <input type="submit" name="Update" id="update" value="Update">
                    //         </form>
                    let form = document.querySelector("#updateForm");
                    const submit = document.querySelector("#update");
                    
                    submit.addEventListener("click", (event) => {
                        event.preventDefault();
                        console.log("https://dev-computerhp6hm.microgen.id/api/products/"+editButton[a].value)
                        let form = document.querySelector("#updateForm");
                        const data = new FormData();
                        data.append("name", `${form.name.value}`);
                        data.append("description", `${form.description.value}`);
                        data.append("price",form.harga.value)
                        data.append("category","LAPTOP")
                        data.append("stock",form.stock.value)
                        if (image.files[0] == undefined){
                            data.append("thumbnail",form.imageurl.value)
                        }else {
                            data.append("thumbnail",image.files[0])
                        }
                        fetch('https://dev-computerhp6hm.microgen.id/api/products/'+editButton[a].value,{
                            method: 'PATCH',
                            body: data,
                        })
                            .then(response => response.json())
                            .then(response => console.log("Sukses :" + response))

                    })

                });
                
          })
      }

      closeModalBox.addEventListener("click", closemodalbox => {
        modalBox.style.display = "none";
      })     
  });
})
// search 
const searchForm = document.querySelector("#searchForm");
const searchButton = document.querySelector("#searchButton")
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  fetch('https://dev-computerhp6hm.microgen.id/api/products?where[name_contains]='+ searchForm.searchInput.value)
    .then(response => response.json())
    .then(data => {
        if (data.length < 20){
            nextButton.style.display = "none";
          }else {
            nextButton.style.display = "block"; 
          }
      console.log("Sucess : "+ data );
      cardContainer.innerHTML = ``;
      data.map((value) => {
        const isi = `
        <div class="card">
                    <div>
                        <img src="${value.thumbnail}" alt="foto_produk" width="150" height="150">
                    </div>
                    <div class="detailProduct">
                        <p>${value.name}</p>
                        <p>Harga Produk : ${value.price}</p>
                        <p>Stock : ${value.stock}</p>
                        <p>Product ID : <span id="productID">${value.id}</span></p>
                    </div>
                    <div class="icon">
                        <div class="editButton">
                            <button type="submit" class="buttonEdit" value="${value.id}"><img src="./assets/edit/1x/outline_edit_white_24dp.png" alt="editicon"></button>
                        </div>
                        <div class="deleteButton">
                            <button type="submit" class="buttonDelete" value="${value.id}"><img src="./assets/delete/1x/outline_delete_white_24dp.png" alt="deleteicon"></button>
                        </div>
                    </div>
                </div>
        `;
        cardContainer.innerHTML += isi;
      })
    })
})


// default action
fetch('https://dev-computerhp6hm.microgen.id/api/products')
  .then(response => response.json())
  .then(response => {
      response.map((value) => {
          const card = `
                <div class="card">
                    <div>
                        <img src="${value.thumbnail}" alt="foto_produk" width="150" height="150">
                    </div>
                    <div class="detailProduct">
                        <p>${value.name}</p>
                        <p>Harga Produk : ${value.price}</p>
                        <p>Stock : ${value.stock}</p>
                        <p>Product ID : <span id="productID">${value.id}</span></p>
                    </div>
                    <div class="icon">
                        <div class="editButton">
                            <button type="submit" class="buttonEdit" value="${value.id}"><img src="./assets/edit/1x/outline_edit_white_24dp.png" alt="editicon"></button>
                        </div>
                        <div class="deleteButton">
                            <button type="submit" class="buttonDelete" value="${value.id}"><img src="./assets/delete/1x/outline_delete_white_24dp.png" alt="deleteicon"></button>
                        </div>
                    </div>
                </div>
        `
        cardContainer.innerHTML += card;

      })
      let deleteButton = document.getElementsByClassName("buttonDelete")
      let editButton = document.getElementsByClassName("buttonEdit")
      let productID = document.querySelectorAll("#productID")
      let cards = document.querySelectorAll(".card")
      let modalBox = document.querySelector(".modal")
      let isi = document.querySelector(".isi")
      const closeModalBox = document.querySelector(".close")
      for (let a = 0; a < deleteButton.length; a++) {
          deleteButton[a].addEventListener("click", event => {
              console.log(deleteButton[a].value)
              console.log('https://dev-computerhp6hm.microgen.id/api/products/'+deleteButton[a].value);
              fetch('https://dev-computerhp6hm.microgen.id/api/products/'+deleteButton[a].value, {method: 'DELETE',})
                .then(result => console.log(result));
              cards[a].style.display = "none";
          })
          editButton[a].addEventListener("click", event => {
              console.log(editButton[a].value)
            console.log('https://dev-computerhp6hm.microgen.id/api/products/'+editButton[a].value);
            modalBox.style.display = "block";
            fetch('https://dev-computerhp6hm.microgen.id/api/products/'+editButton[a].value)
                .then(result => result.json())
                .then(result => {
                    isi.innerHTML = `
                    <div class="Judul">
                        <p>${result.name}</p>
                    </div>
                    <div class="tumbnail">
                        <img src="${result.thumbnail}" alt="foto produk" width="150" height="150" id="tumbnail">
                    </div>
                    <p class="detail">category : <span>${result.category}</span></p>
                    <p class="detail">harga : <span>${result.price}</span></p>
                    <p class="detail">stock : <span>${result.stock}</span></p>
                    <p class="detail">deskripsi : </p>
                    <p>${result.description}<p>
                    <form action="./editProducts.js" method="POST" id="updateForm">
                                <label for="name">Name : </label>
                                <br>
                                <input type="text" name="name" id="name" placeholder="Name" value="${result.name}">
                                <br>
                                <label for="image">Image : </label>
                                <br>
                                <input type="file" name="image" id="image">
                                <br>
                                <label for="image">Image : </label>
                                <br>
                                <input type="text" name="imageurl" id="imageurl" value="${result.thumbnail}">
                                <br>
                                <label for="harga">Harga : </label>
                                <br>
                                <input type="text" name="harga" id="harga" value="${result.price}">
                                <br>
                                <label for="stock">Stock : </label>
                                <br>
                                <input type="text" name="stock" id="stock" value="${result.stock}">
                                <br>
                                <label for="description">Description : </label>
                                <br>
                                <textarea id="description" name="description"></textarea>
                                <br>
                                <input type="submit" name="Update" id="update" value="Update">
                            </form>
                    `
                    document.getElementById("description").value = `${result.description}`;
                    // <input type="text" name="description" id="description" value="${result.description}">
                    let form = document.querySelector("#updateForm");
                    const submit = document.querySelector("#update");
                    
                    submit.addEventListener("click", (event) => {
                        event.preventDefault();
                        console.log("https://dev-computerhp6hm.microgen.id/api/products/"+editButton[a].value)
                        let form = document.querySelector("#updateForm");
                        const data = new FormData();
                        data.append("name", `${form.name.value}`);
                        data.append("description", document.getElementById("description").value);
                        data.append("price",form.harga.value)
                        data.append("category","LAPTOP")
                        data.append("stock",form.stock.value)
                        if (image.files[0] == undefined){
                            data.append("thumbnail",form.imageurl.value)
                        }else {
                            data.append("thumbnail",image.files[0])
                        }
                        fetch('https://dev-computerhp6hm.microgen.id/api/products/'+editButton[a].value,{
                            method: 'PATCH',
                            body: data,
                        })
                            .then(response => response.json())
                            .then(response => console.log("Sukses :" + response))

                    })

                });
                
          })
      }

      closeModalBox.addEventListener("click", closemodalbox => {
        modalBox.style.display = "none";
      })     
      window.onclick = function(event) {
        if (event.target == modalBox) {
            modalBox.style.display = "none";
        }
      }
  });


// backup
//   <p>Judul barang : ${result.name}</p>
//                     <img src="${result.thumbnail}" alt="foto produk" width="150" height="150">
//                     <p>category : ${result.category}</p>
//                     <p>harga : ${result.price}</p>
//                     <p>stock : ${result.stock}</p>
//                     <p>deskripsi : ${result.description}</p>
                    // <form action="./editProducts.js" method="POST" id="updateForm">
                    //             <label for="name">Name : </label>
                    //             <input type="text" name="name" id="name" placeholder="Name" value="${result.name}">
                    //             <br>
                    //             <label for="image">Image : </label>
                    //             <input type="file" name="image" id="image">
                    //             <br>
                    //             <label for="image">Image : </label>
                    //             <input type="text" name="imageurl" id="imageurl" value="${result.thumbnail}">
                    //             <br>
                    //             <label for="harga">Harga : </label>
                    //             <input type="text" name="harga" id="harga" value="${result.price}">
                    //             <br>
                    //             <label for="stock">Stock : </label>
                    //             <input type="text" name="stock" id="stock" value="${result.stock}">
                    //             <br>
                    //             <label for="description">Description : </label>
                    //             <input type="text" name="description" id="description" value="${result.description}">
                    //             <br>
                    //             <input type="submit" name="Update" id="update" value="Update">
                    //         </form>