let divEl = document.getElementById('data');
let h1 = document.getElementById('h1');
let btn = document.getElementById('btn');
async function fetchData() {
    let url = 'https://fakestoreapi.com/products';
    try {
        let response = await fetch(url);
        if (!response.ok) {
            h1.textContent = 'Invalid Url';
        }
        let data = await response.json();

        data.forEach((item) => {
                let id = document.createElement('p');
                let title = document.createElement('h3');
                let category = document.createElement('h4');
                let price = document.createElement('h3');
                let image = document.createElement('img');

                id.textContent = item.id;
                title.textContent = item.title;
                category.textContent = item.category;
                price.textContent = item.price;
                image.src = item.image;
                image.classList.add('image-class');

                divEl.append(id, title, category, price, image);
            }
        ) 
        // divEl.textContent = JSON.stringify(data);
    } catch {
        h1.textContent = 'Error in the data';
    }
}
