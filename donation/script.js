const UPI_ID = '8669774172-2@ybl';
const qrImage = document.getElementById('donationQr');
const upiButton = document.getElementById('upiButton');
const amountButtons = document.querySelectorAll('.amount-button');

function makeUpiLink(amount = '') {
  const params = new URLSearchParams({ pa: UPI_ID, cu: 'INR' });
  if (amount) params.set('am', amount);
  return `upi://pay?${params.toString()}`;
}

function makeQrData(amount = '') {
  return makeUpiLink(amount);
}

const initialQr = makeQrData('101');
qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=520x520&margin=12&data=${encodeURIComponent(initialQr)}`;

amountButtons.forEach((button) => {
  button.addEventListener('click', () => {
    amountButtons.forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');

    const amount = button.dataset.amount || '';
    upiButton.href = makeUpiLink(amount);
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=520x520&margin=12&data=${encodeURIComponent(makeQrData(amount))}`;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
