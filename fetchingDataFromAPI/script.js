//1. new Promise() EXAMPLE -------------------------------
let promise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("Promise is fulfilled");
  } else {
    reject("Promise is failed");
  }
});
promise
  .then((result) => {
    console.log("Success!🔵 ", result);
  })
  .catch((result) => {
    console.log("Error!🛑 ", result);
  })
  .finally(() => {
    console.log("Code is executed whether the status is success or failed");
  });
/* OUTPUT: -------------
e fetchingDataFromAPI/script.js
Success!🔵  Promise is fulfilled */


//2. fetch()  EXAMPLE -----------------------------------
fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      console.log("Invalid API ❌");
    }
    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("Error in the URL 🛑");
  });

//3. async await  EXAMPLE ----------------------------
async function fetchData() {
  let url = "https://fakestoreapi.com/products/1";
  try {
    let response = await fetch(url);
    if (!response.ok) {
      console.log("Invalid URL ❌");
    }
    let data = await response.json();
    console.log("DATA--> ", data);
  } catch (error) {
    console.log(error, " Error in the data");
  }
}
fetchData();
/* OUTPUT:
DATA-->  {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: { rate: 3.9, count: 120 }
} */
