function tambahKeranjang(nama, harga) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  keranjang.push({ nama, harga });
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  alert(nama + " ditambahkan ke keranjang!");
}
