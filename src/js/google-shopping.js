var data = require('../products.json');

var counter = 0;

// Write your solutions below

//#1 - this function finds shopping products

/*
for (var i = 0; i < data.items.length; i++) {
  console.log(data.items[i].kind.includes("shopping#product"));
  if (data.items[i].kind.includes("shopping#product")) {
      counter++;
  }
  console.log(counter);
}

//#2 this shows the title of items on backorder

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.inventories[0].availability.includes("backorder")) {
    console.log(data.items[i].product.title);
  }
}


// #3 - print titles of items with more than one image

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.images.length > 1) {
    console.log(data.items[i].product.title);
  }
}


//#4  all Canon items


for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand.includes("Canon")) {
    console.log(data.items[i].product.title);
  }
}


//#5  Canon items from eBay

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand.includes("Canon")) {
    if (data.items[i].product.author.name.includes("eBay")){
          console.log(data.items[i].product.title);
    }
  }
}

//#6  Brand price and image link
*/


for (var i = 0; i < data.items.length; i++) {
  console.log(data.items[i].product.brand) + " $" +
  console.log(data.items[i].product.inventories[0].price) +
  console.log(data.items[i].product.images[0].link)
  }

