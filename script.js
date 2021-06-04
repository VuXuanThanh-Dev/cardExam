
let products = [
    {
        id: 1,
        name: "lamborgini",
        desc: "this is description",
        imageURL: "https://autopro8.mediacdn.vn/2021/3/25/ghost-2021-1616647581322995733345-crop-16166475964681567752232-crop-16166477270641900377336.jpg",
        quantity: 2,
        price: 100,
        discount: 10
    },
    {
        id: 2,
        name: "Farary",
        desc: "this is description",
        imageURL: "https://giaxeoto.vn/admin/webroot/img/upload2/ferrari-sf90-stradale-ve-viet-nam.jpg",
        quantity: 3,
        price:200,
        discount: 20
    },
    {
        id: 3,
        name: "bugatti",
        desc: "this is description",
        imageURL: "https://media.architecturaldigest.com/photos/5ced629704c41e1a9b9a8bcf/3:2/w_2532,h_1688,c_limit/Bugatti-LVN-7%20%5BBugatti%5D.jpg",
        quantity: 1,
        price: 300,
        discount: 30
    }
];

const table = document.querySelector('table');
const increase = document.querySelector('.btn-increase');
const decrease = document.querySelector('.btn-decrease');
let amount = document.querySelector('.amount');

loadData();

function loadData() { 
    let content = `
    <tr>
      <th>Name</th>
      <th>description</th>
      <th>image</th>
      <th>options</th>
      <th>delete</th>
      <th>price</th>
      <th>discount</th>
      <th>total money</th>
    </tr>`;
    let total = 0;
    products.forEach((product, idx) => {
        let intoMoney = totalMoneyOfProduct(product.price, product.discount, product.quantity);
        total += intoMoney;
        content += `
        <tr>
        <td>${product.name}</td>
        <td>This is a cars which I love most</td>
        <td>
          <img
            src="${product.imageURL}"
            alt="${product.name}"
          />
        </td>
        <td>
          <div class="group-btn">
            <button class="btn btn-increase" onclick="increaseFunc(${product.id}, ${product.amount})" >+</button>
            <input type="number" value="${product.quantity}" min="1" disabled class="amount" />
            <button class="btn btn-decrease" onclick="decreaseFunc(${product.id}, ${product.amount})">-</button>
          </div>
        </td>
        <td><button class="btn btn-delete" onclick="removeProduct(${product.id})">delete</button></td>
        <td>${product.price}$</td>
        <td>${product.discount}%</td>
        <td>${intoMoney}</td>
      </tr> 
        `;
    });
    content += `
    <tr>
        <td colspan="8" style="text-align:right; padding-right:10px">Total: ${total}</td>
    </tr>`;
    table.innerHTML = content;
}

// tinh thanh tien cua mot san pham
function totalMoneyOfProduct(price, discount, quantity) {
    return (price - (price * discount / 100) ) * quantity;
}



function decreaseFunc(id, amount) {
    

    products.forEach(product => {
        if(product.id === id) {
            if(product.quantity == 1) {
                return;
            }
            product.quantity = product.quantity - 1;
        }
    });
    loadData();
    
}
function increaseFunc(id, amount) {
    
    products.forEach(product => {
        if(product.id === id) {
            product.quantity = product.quantity  +1;
        }
    });
    loadData();
}


function removeProduct(id, name) {
    let isDelete = confirm(`do you want to delete?`);
    if(isDelete == true){
        alert('Delete successfully!');
        products =  products.filter(product => product.id != id);
        loadData();
    }
   
}
