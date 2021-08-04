
const form = document.querySelector("#createProduct")
const submit = document.querySelector("#update");
const image = document.querySelector('input[type="file"]');
submit.addEventListener("click", (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("storeId", `60e727bd355d4f003518324a`)
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
    // data.append("thumbnail",image.files[0])
    // data.append("thumbnail",form.imageurl.value)


    fetch('https://dev-computerhp6hm.microgen.id/api/products/',{
        method: 'POST',
        body: data,
    })
        .then(response => response.json())
        .then(result => console.log('Success',result))
        .catch(error => {
            console.error('error :',error);
        })
    })

// formData.append('name', 'hp dm1 4000au');
// formData.append('description', 'ini adalah deskripsi laptrop')
// formData.append('price', 950000)
// formData.append('stock', 10)
// var payload = {
//     "name": "LAPTOP LENOVO IP 3-14ITL6 MXID",
//     "description": "<p><span style=\"color: rgba(0,0,0,0.8);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, 文泉驛正黑, \"WenQuanYi Zen Hei\", \"Hiragino Sans GB\", \"儷黑 Pro\", \"LiHei Pro\", \"Heiti TC\", 微軟正黑體, \"Microsoft JhengHei UI\", \"Microsoft JhengHei\", sans-serif;\">Intel Core i5-1135G7, Integrated Intel Iris Xe Graphics, 512GB SSD M.2 2280 PCIe 3.0x4 NVMe, 8 GB (4GB Soldered DDR4-3200 + 4GB SO-DIMM DDR4-3200)</span></p>\n",
//     "price": 950,
//     "category": "LAPTOP",
//     "stock": 10,
//     "thumbnail": "https://file.mejik.id/microgen-computerhp6hm/product/lqde9lenovo.jpeg",
//     "sold": 10,
// }

// console.log(payload)



// const data = new FormData();
// data.append("name", "LAPTOP LENOVO IP 3-14ITL6 MXID");
// data.append("description", "<p><span style=\"color: rgba(0,0,0,0.8);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, \"Helvetica Neue\", Helvetica, Arial, 文泉驛正黑, \"WenQuanYi Zen Hei\", \"Hiragino Sans GB\", \"儷黑 Pro\", \"LiHei Pro\", \"Heiti TC\", 微軟正黑體, \"Microsoft JhengHei UI\", \"Microsoft JhengHei\", sans-serif;\">Intel Core i5-1135G7, Integrated Intel Iris Xe Graphics, 512GB SSD M.2 2280 PCIe 3.0x4 NVMe, 8 GB (4GB Soldered DDR4-3200 + 4GB SO-DIMM DDR4-3200)</span></p>\n");
// data.append("price",950)
// data.append("category","LAPTOP")
// data.append("stock",10)
// data.append("thumbnail","https://file.mejik.id/microgen-computerhp6hm/product/lqde9lenovo.jpeg")


// fetch('https://dev-computerhp6hm.microgen.id/api/products/',{
//     method: 'POST',
//     body: data,
// })
//     .then(response => response.json())
//     .then(result => console.log('Success',result))
//     .catch(error => {
//         console.error('error :',error);
//     })