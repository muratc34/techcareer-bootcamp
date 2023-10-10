
const productUl = document.querySelector(".products");

axios.get("https://northwind.vercel.app/api/products")
.then(response => {
    const products = response.data;
    
    products.forEach(item => {
        const li = document.createElement("li")
        li.innerText = item.name;
        productUl.appendChild(li);
    });
})

const postProduct = () => {
    const productName = document.querySelector(".productName").value;
    const unitPrice = document.querySelector(".unitPrice").value;
    const unitsInStock = document.querySelector(".unitsInStock").value;
    const unitsOnOrder = document.querySelector(".unitsOnOrder").value;

    axios.post("https://northwind.vercel.app/api/products", {
        name: productName,
        unitPrice: unitPrice,
        unitsInStock: unitsInStock,
        unitsOnOrder: unitsOnOrder
    }).then(response => {
        alert("Product Created! " + response.status)
    })
}

const deleteProduct = () => {
    const productId = document.querySelector(".productId").value;

    axios.delete("https://northwind.vercel.app/api/products/" + productId)
    .then(response =>{
        alert("Product Deleted! " + response.status)
    })
}