const UPI_ID = '8669774172-2@ybl';
const qrImage = document.getElementById('donationQr');
const upiButton = document.getElementById('upiButton');
const amountButtons = document.querySelectorAll('.amount-button');

function makeUpiLink(amount = '') {
  const params = new URLSearchParams({ pa: UPI_ID, cu: 'INR' });
  if (amount) params.set('am', amount);
  return `upi://pay?${params.toString()}`;
}

// QR contains only the supplied UPI ID; no amount is forced.
const qrPayload = makeUpiLink();
qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=520x520&margin=12&data=${encodeURIComponent(qrPayload)}`;

amountButtons.forEach((button) => {
  button.addEventListener('click', () => {
    amountButtons.forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
    upiButton.href = makeUpiLink(button.dataset.amount);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
