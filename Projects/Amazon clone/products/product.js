const products = [
    {id: "1", name: "Baskets and hampers", desc: "Awesome product 1", price: "$19.99", img: "../amzone clone/media/hero section media/easy update/2023Q2_GW_EE_LaundryLuxe_D_Quad_186x116._SY116_CB594237035_.jpg"},
    {id: "2", name: "Product 2", desc: "Awesome product 2", price: "$29.99", img: "img/product2.jpg"},
];

function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

const productId = getProductId();
const product = products.find(p => p.id === productId);

if(product){
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-image').src = product.img;
    document.getElementById('product-desc').innerText = product.desc;
    document.getElementById('product-price').innerText = product.price;
}
