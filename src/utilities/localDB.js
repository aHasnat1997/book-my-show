// use local storage to manage booking data
const addToDb = info => {
  let bookingCart = getBookingCart();

  const newCart = bookingCart.concat(info);

  localStorage.setItem('booking-cart', JSON.stringify(newCart));
}

const removeFromDb = i => {
  const bookingCart = getBookingCart();
  const restCart = bookingCart.filter(cart => cart.id !== i);
  localStorage.setItem('booking-cart', JSON.stringify(restCart));
}

const getBookingCart = () => {
  let bookingCart = [];

  //get the booking cart from local storage
  const storedCart = localStorage.getItem('booking-cart');
  if (storedCart) {
    bookingCart = JSON.parse(storedCart);
  }
  return bookingCart;
}


export {
  addToDb,
  removeFromDb,
  getBookingCart
}
