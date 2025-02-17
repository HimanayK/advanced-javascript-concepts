let body = document.getElementById("body");
let table = document.getElementById("table");
let tableBody = document.getElementById("table-body");

async function fetchData() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            let newElement = document.createElement("h1");
            newElement.textContent = "error in the api";
            body.appendChild(newElement);
        }
        let data = await response.json();

        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            //create & append <tr> inside <tbody>
            let tableRow = document.createElement("tr");
            tableBody.appendChild(tableRow);

             //create <td> for id
            let idCell = document.createElement("td");
            idCell.textContent = item.id;

            //create <td> for title
            let titleCell = document.createElement("td");
            titleCell.textContent = item.title;

            //create <td> for price
            let price = document.createElement("td");
            price.textContent = item.price;

            //create <td> for category
            let category = document.createElement("td");
            category.textContent = item.category;
            console.log(category);

            //create <td> for image, create <img> inside <td>
            let image = document.createElement("td");
              image.innerHTML = `<img src=${item.image} style="width: 30px; height: 30px">`;

              //append all <td> inside <tr>
            tableRow.append(idCell, titleCell, price, category, image);

        }
    } catch {
        let newElement1 = document.createElement("h1");
        newElement1.textContent = "No data available";
        body.append(newElement1);
    }
}