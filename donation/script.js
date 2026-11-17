const UPI_ID = '8669774172-2@ybl';
const qrImg = document.getElementById('qrCode');
const upiLink = document.getElementById('upiLink');
const amountButtons = document.querySelectorAll('.amount-btn');

function buildUpiLink(amount = '') {
  const params = new URLSearchParams({ pa: UPI_ID, cu: 'INR' });
  if (amount) params.set('am', amount);
  return `upi://pay?${params.toString()}`;
}

function updateQr(amount = '') {
  const payload = buildUpiLink(amount);
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=520x520&margin=12&data=${encodeURIComponent(payload)}`;
}

amountButtons.forEach((button) => {
  button.addEventListener('click', () => {
    amountButtons.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');

    const amount = button.dataset.amount || '';
    upiLink.href = buildUpiLink(amount);
    updateQr(amount);
  });
});

updateQr('101');
document.getElementById('year').textContent = new Date().getFullYear();
