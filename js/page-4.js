const delivery = 3.59;
const items = document.querySelectorAll('.cart-item');
const subtotalEl = document.getElementById('subtotal');
const totalEl = document.getElementById('total');

function updateTotals() {
  let subtotal = 0;

  items.forEach(item => {
    const price = parseFloat(item.dataset.price);
    const qty = parseInt(item.querySelector('.qty').textContent);
    const itemTotal = price * qty;

    item.querySelector('.item-total').textContent =
      `$${itemTotal.toFixed(2)}`;

    subtotal += itemTotal;
  });

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  totalEl.textContent = `$${(subtotal + delivery).toFixed(2)}`;
}

items.forEach(item => {
  const minus = item.querySelector('.minus');
  const plus = item.querySelector('.plus');
  const qtyEl = item.querySelector('.qty');

  minus.onclick = () => {
    let qty = parseInt(qtyEl.textContent);
    if (qty > 1) {
      qtyEl.textContent = qty - 1;
      updateTotals();
    }
  };

  plus.onclick = () => {
    let qty = parseInt(qtyEl.textContent);
    qtyEl.textContent = qty + 1;
    updateTotals();
  };
});

updateTotals();