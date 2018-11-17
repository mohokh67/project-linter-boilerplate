export function formatPrice(penses) {
  return (penses / 100).toLocaleString('en-UK', {
    style: 'currency',
    currency: 'GBP'
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
