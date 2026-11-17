const tabButtons = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.product-card');

const filterProducts = (category) => {
  cards.forEach((card) => {
    const shouldShow = category === 'all' || card.dataset.category === category;
    card.style.display = shouldShow ? 'block' : 'none';
  });
};

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    filterProducts(button.dataset.category);
  });
});

const orderForm = document.getElementById('orderForm');

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('customerName').value.trim();
    const item = document.getElementById('orderItem').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const message = `Namaste Shri Ram Store, mujhe ye saman chahiye:\nNaam: ${name}\nSaman: ${item}\nMatr: ${quantity}\nPhone: ${phone}`;

    const waLink = `https://wa.me/918669770000?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  });
}
