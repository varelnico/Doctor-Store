// Ambil data produk dari localStorage
const products = JSON.parse(localStorage.getItem("products")) || [];

// Ambil elemen tempat produk ditampilkan
const productList = document.getElementById("product-list");

// Fungsi bantu buat format harga
function formatRupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

// Render produk ke halaman
function renderProducts() {
  

  productList.innerHTML = products
    .map(
      (p) => `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}" class="product-img" />
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price">${formatRupiah(p.price)}</div>
        <a href="#" class="detail-btn">Detail</a>
      </div>
    `
    )
    .join("");
}

// Jalankan fungsi render
renderProducts();
