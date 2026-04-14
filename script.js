// Login modal
document.getElementById('loginBtn').onclick = () => {
  document.getElementById('loginModal').style.display = 'block';
};

// Keranjang modal
document.getElementById('cartBtn').onclick = () => {
  document.getElementById('cartModal').style.display = 'block';
};

// Notifikasi modal
document.getElementById('notifBtn').onclick = () => {
  document.getElementById('notifModal').style.display = 'block';
};

// Tambah ke keranjang
document.querySelector('.addCart').onclick = () => {
  alert('Produk ditambah ke keranjang!');
};
  
