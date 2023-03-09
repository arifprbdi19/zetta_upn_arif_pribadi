//arifpribadi nim 123190019

function countDiscount(price, percent) {
  percent /= 100; // division assignment
  return (price -= price * percent); // subtraction assignment
}

function countTax(price, tax) {
  return (price *= 1 + tax / 100); // multiplication assignment
}

function showData(
  title = "Sebuah Seni untuk Bersikap Bodo Amat",
  writer = "Mark Manson ",
  edition = "1st",
  isbn = "978-602-452-698-6",
  price = 80000,
  discount = "30",
  publisher = "Elex Media Komputindo"
)  {
  const tax = 10;
  var tempPrice = 0
  tempPrice += countDiscount(price, discount); // addition assignment

  console.log(`Tittle\t\t\t: ${title}`);
  console.log(`Writer\t\t\t: ${writer}`);
  console.log(`Edition\t\t\t: ${edition}`);
  console.log(`Price\t\t\t: ${price}`);
  console.log(`ISBN\t\t\t: ${isbn}`);
  console.log(`Publisher\t\t: ${publisher}\n`);
  console.log(`Discount\t\t\t: ${discount}%`);
  console.log(`Discount Price\t\t: ${tempPrice}\n`);
  console.log(`Price Before VAT\t: ${tempPrice}`);
  console.log(`VAT\t\t\t: ${tax}%`);
  console.log(`Total Price\t\t: ${countTax(tempPrice, tax)}`);
}

showData()