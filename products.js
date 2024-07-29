
// Products 
let iconDesign = document.querySelectorAll('.products .container .top .design i');
let product = document.querySelectorAll('.products .container .product');
let box = document.querySelectorAll('.products .container .product .box');
let imgItem = document.querySelectorAll('.products .container .product .box img');
let h3Element = document.querySelectorAll('.products .container .product .box h3');

iconDesign.forEach((element,index) => {
    element.onclick = (ele) =>{
        iconDesign.forEach(element => {
            element.classList.remove('active')
        });
        element.classList.add('active')
        if (index) {
            product.forEach(element => {
                element.classList.add('active')
            });

            for (let index = 0; index < box.length; index++) {
                box[index].classList.add('active')
                imgItem[index].classList.add('active')
                h3Element[index].classList.add('active')
                
            }

            }else {
                product.forEach(element => {
                    element.classList.remove('active')
                });
    
                for (let index = 0; index < box.length; index++) {
                    box[index].classList.remove('active')
                    imgItem[index].classList.remove('active')
                    h3Element[index].classList.remove('active')
                    
                }
            }
        }
});

// Slider 

let sliderItems = document.querySelectorAll('.products .container .slider .num li');
let prevItem = document.querySelector('.products .container .slider .prev');
let nextItem = document.querySelector('.products .container .slider .next');

sliderItems.forEach((element ,index) => {
    element.onclick = ( ) => {
        sliderItems.forEach(element => {
            element.classList.remove('active')
        })
        element.classList.add('active');
        
        product.forEach(element => {
            element.classList.remove('show')
        });

        product[index].classList.add('show');
    }
});

// Prev
prevItem.onclick = (ele) => {
    let inx ;
    sliderItems.forEach((element,index) => {
        
        if(element.classList.contains('active')){
            inx = index;
        }
        element.classList.remove('active');
    });
    
    if (!inx) {
        inx = 3;
    }
    sliderItems[inx-1].classList.add('active');

    product.forEach(element => {
        element.classList.remove('show')
    });

    product[inx-1].classList.add('show');
}

// Next
nextItem.onclick = (ele) => {
    let inx ;
    sliderItems.forEach((element,index) => {
        
        if(element.classList.contains('active')){
            inx = index;
        }
        element.classList.remove('active');
    });
    
    if (inx === 2) {
        inx = -1;
    }
    sliderItems[inx+1].classList.add('active');

    product.forEach(element => {
        element.classList.remove('show')
    });

    product[inx+1].classList.add('show');
}

// Add Products To Cart
let addProduct = document.querySelectorAll('.products .container .product .box a');

let products = document.createElement('div');
        products.className = 'products';

addProduct.forEach((element ,index )=> {
    element.onclick = (params) => {

        // Count number of products
        let count = 0;

        let ckeck = false;

        let updateTotalProducts = 0;

        if (!window.localStorage.getItem(index)) {
            count = 1;
            localStorage.setItem(index,count);
            ckeck = true;

            updateTotalProducts = (Number(localStorage.getItem('totalProducts'))) + 1;
                localStorage.setItem('totalProducts',updateTotalProducts);
            
        }else {
            count = (+(window.localStorage.getItem(index))) + 1;

            localStorage.setItem(index,count);

            updateTotalProducts = (Number(localStorage.getItem('totalProducts'))) + 1;
                localStorage.setItem('totalProducts',updateTotalProducts);
        }
        let box = document.createElement('div');
        box.className = 'box';
        box.id = index;

        let img = document.createElement('div');
        img.className = 'img';

        let image = document.createElement('img');
        image.src = document.querySelectorAll('.products .container .product .box img')[index].src;

        img.appendChild(image);
        box.appendChild(img);

        let h3 = document.createElement('h3');
        h3.innerHTML = document.querySelectorAll('.products .container .product .box h3')[index].innerHTML;

        box.appendChild(h3);

        let span = document.createElement('span');
        span.id = 'price';
        span.innerHTML = document.querySelectorAll('.products .container .product .box #price')[index].innerHTML;
        box.appendChild(span);

        let amount = document.createElement('div');
        amount.className = 'amount';
        
        let label = document.createElement('label');
        label.setAttribute('for','amount');
        label.innerHTML = 'Amount';
        amount.appendChild(label);

        let select = document.createElement('select');
        select.name = 'amount'
        select.id = index;


        for (let index = 1; index <= 8; index++) {
            let option = document.createElement('option');
            option.value = index;
            option.innerHTML = index;

            select.appendChild(option);
        }

        amount.appendChild(select);

        box.appendChild(amount);

        let link = document.createElement('a');

        link.innerHTML = 'Remove';

        box.appendChild(link);
        

        if (ckeck === true) {
            products.appendChild(box);
        }
        setValue.innerHTML = localStorage.getItem('totalProducts') || '0';
        localStorage.setItem('products',products.innerHTML);
    }
});

products.innerHTML = localStorage.getItem('products');

// localStorage.clear()