let myCart = document.querySelector('.my-cart .container .products');

let h1Ele = document.querySelector('.my-cart .container .top h1');

myCart.innerHTML = localStorage.getItem('products') || '';

// Update Value
let selects = document.querySelectorAll('.my-cart .container .products .box .amount select');

function updateValue() {
    let totalProducts = 0;
    selects.forEach((element) => {
        let countProducts = Number(localStorage.getItem(element.id));
        let lastValueToOptions = Number(element.options[element.options.length - 1].value);
        if (countProducts > lastValueToOptions) {
            for (let index = lastValueToOptions +1; index <= countProducts +5; index++) {
                let option = document.createElement('option');
                option.value = index;
                option.innerHTML = index;
    
                element.appendChild(option);
            }
        }
    
        console.log(lastValueToOptions);
        element.value = countProducts;
        totalProducts +=Number(element.value);
        localStorage.setItem('totalProducts',totalProducts);
    });
}

updateValue();

// Delete Element
let deleteItem = document.querySelectorAll('.my-cart .container .products .box a');

let boxItem = document.querySelectorAll('.my-cart .container .products .box');

deleteItem.forEach((element ,index) => {
    element.onclick = ( ) =>{
        localStorage.removeItem(boxItem[index].id);
        boxItem[index].remove();
        localStorage.setItem('products',myCart.innerHTML);

        if (myCart.innerHTML === '') {
            h1Ele.innerHTML = 'Your Cart Is Empty'
        }

        updateValue();
        setValue.innerHTML = localStorage.getItem('totalProducts') || '0';
    }
});

// Set Count
selects.forEach(element => {
    element.onclick = (ele)=> {
        localStorage.setItem(element.id,element.value);

        updateValue();
        setValue.innerHTML = localStorage.getItem('totalProducts') || '0';
    }
});

// Ckeck Cart
if (myCart.innerHTML !== '') {
    h1Ele.innerHTML = 'Shopping Cart';
}
// localStorage.clear();