//global variable
const btnMobileMenu = document.querySelector('.js-mobile-menu__btn');
const btnCloseMobileMenu = document.querySelector('.js-mobile-menu__btn-close');
const mobileMenuContainer = document.querySelector('.js-mobile-menu__container');
const modal = document.querySelector('.js-modal');
const btnSignIn = document.querySelectorAll('.js-sign-in__btn');
const btnSignUp = document.querySelectorAll('.js-sign-up__btn');
const signInForm = document.querySelector('.js-sign-in');
const signUpForm = document.querySelector('.js-sign-up');
const listItemMobi = document.querySelectorAll('.js-mobile-menu__container li');
// mobi men
function showMobileMenu(){
    modal.style.display = "block";
    mobileMenuContainer.style.display = "block";
}
function hideModal() {
    modal.style.display = "none";
}
btnMobileMenu.addEventListener('click', showMobileMenu);
btnCloseMobileMenu.addEventListener('click', hideModal);
modal.addEventListener('click', hideModal);
mobileMenuContainer.addEventListener('click', function(e){
    e.stopPropagation();
})
signInForm.addEventListener('click', function(e){
    e.stopPropagation();
})
signUpForm.addEventListener('click', function(e){
    e.stopPropagation();
})
document.onkeyup = function(e){
    switch(e.which){
        case 27:
            hideModal();
            break;
    }
}
listItemMobi.forEach(item => {
    item.onclick = hideModal;
});
function showSignIn(){
    modal.style.display = "flex";
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
}
function showSignuP(){
    modal.style.display = "flex";
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
}
btnSignIn.forEach(item => {
    item.addEventListener('click', showSignIn);
});
btnSignUp.forEach(item => {
    item.addEventListener('click', showSignuP);
});
// regex
const accountUser = [
    {
        id: 1,
        acc: "Admin123@",
        pass: "Admin123@"
    }
];
let accountSi = passwordSi = accountSu = passwordSu = rePassword = false;
const errorMessage = document.querySelectorAll('.error-messages');
const typeAccount = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const regexInput = document.querySelectorAll('.auth-form__input');
function regexSignIn(e){
    e.preventDefault();
    if(!regexInput[0].value.match(typeAccount)){
        errorMessage[0].innerHTML = "Account must include at least 1 number 1 uppercase 1 special character, length over 8 characte";
        errorMessage[0].style.fontSize = "12px";
        errorMessage[0].style.marginBottom = "10px";
        errorMessage[0].style.color = "var(--primary-color)";
    } else {
        accountSi = true;
        errorMessage[0].innerHTML == "";
        errorMessage[0].style.fontSize = "0px";
        errorMessage[0].style.marginBottom = "0px";
        errorMessage[0].style.color = "transparent";
    }
    if(!regexInput[1].value.match(typeAccount)){
        errorMessage[1].innerHTML = "Password must include at least 1 number 1 uppercase 1 special character, length over 8 characte";
        errorMessage[1].style.fontSize = "12px";
        errorMessage[1].style.marginBottom = "10px";
        errorMessage[1].style.color = "var(--primary-color)";
    } else {
        passwordSi = true;
        errorMessage[1].innerHTML == "";
        errorMessage[1].style.fontSize = "0px";
        errorMessage[1].style.marginBottom = "0px";
        errorMessage[1].style.color = "transparent";
    }
    if(accountSi && passwordSi){
        accountUser.forEach(item => {
            if(item.acc == regexInput[0].value && item.pass == regexInput[1].value) {
                hideModal();
                btnSignIn.forEach(item => {
                    item.style.display = "none";
                });
                btnSignUp.forEach(item => {
                    item.style.display = "none";
                });
            }
        });
        
        
    }
}
function regexSignUp(e){
    e.preventDefault();
    if(!regexInput[2].value.match(typeAccount)){
        errorMessage[2].innerHTML = "Account must include at least 1 number 1 uppercase 1 special character, length over 8 characte";
        errorMessage[2].style.fontSize = "12px";
        errorMessage[2].style.marginBottom = "10px";
        errorMessage[2].style.color = "var(--primary-color)";
    } else {
        accountSu = true;
        errorMessage[2].innerHTML == "";
        errorMessage[2].style.fontSize = "0px";
        errorMessage[2].style.marginBottom = "0px";
        errorMessage[2].style.color = "transparent";
    }
    if(!regexInput[3].value.match(typeAccount)){
        errorMessage[3].innerHTML = "Password must include at least 1 number 1 uppercase 1 special character, length over 8 characte";
        errorMessage[3].style.fontSize = "12px";
        errorMessage[3].style.marginBottom = "10px";
        errorMessage[3].style.color = "var(--primary-color)";
    } else {
        passwordSu = true;
        errorMessage[3].innerHTML == "";
        errorMessage[3].style.fontSize = "0px";
        errorMessage[3].style.marginBottom = "0px";
        errorMessage[3].style.color = "transparent";
        if(regexInput[4].value != regexInput[3].value){
            errorMessage[4].innerHTML = "Password does not match";
            errorMessage[4].style.fontSize = "12px";
            errorMessage[4].style.marginBottom = "10px";
            errorMessage[4].style.color = "var(--primary-color)";
        } else {
            rePassword = true;
            errorMessage[4].innerHTML == "";
            errorMessage[4].style.fontSize = "0px";
            errorMessage[4].style.marginBottom = "0px";
            errorMessage[4].style.color = "transparent";
        }
    }
    if(accountSu && passwordSu && rePassword){
        showSignIn();
        let accountTemp = {
            id: accountUser.length + 1,
            acc: regexInput[2].value,
            pass: regexInput[3].value
        }
        accountUser.push(accountTemp);
        regexInput[2].value = "";
        regexInput[3].value = "";  
        regexInput[4].value = "";  
    }
}
// show password
const iconEye1 = document.querySelector('.auth-form__icon-eye1');
const iconEye2 = document.querySelector('.auth-form__icon-eye2');
const iconEye3 = document.querySelector('.auth-form__icon-eye3');
iconEye1.addEventListener("click",function(){
    if(regexInput[1].type == "password") {
        regexInput[1].type = "text";
    } else {
        regexInput[1].type = "password";
    }
})
iconEye2.addEventListener("click",function(){
    if(regexInput[3].type == "password") {
        regexInput[3].type = "text";
    } else {
        regexInput[3].type = "password";
    }
})
iconEye3.addEventListener("click",function(){
    if(regexInput[4].type == "password") {
        regexInput[4].type = "text";
    } else {
        regexInput[4].type = "password";
    }
})
// array object
const ListProduct = [
    {
        id: 1,
        name:"Big and Juicy Wagyu Beef Cheeseburger",
        price:  30,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./images/base/image 26.png",
        category:  "main"
    },
    {
        id: 2,
        name:"Fresh Lime Roasted Salmon",
        price: 10,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./images/base/image 26 (1).png",
        category:  "main"
    },
    {
        id: 3,
        name:"The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./images/base/image 26 (2).png",
        category: "main"
    },
    {
        id: 4,
        name:"Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./images/base/image 26 (3).png",
        category: "vegetable"
    },
    {
        id: 5,
        name:"The Creamiest Creamy Chicken",
        price: 60,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./images/base/image 26 (4).png",
        category: "sweet"
    },
    {
        id: 6,
        name:"Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./images/base/image 26 (5).png",
        category: "sweet"
    }
]
// product
const popularProducts = document.querySelector('.js-products__list-item');
const filterPrice = document.querySelector('#filter-price');
const over30 = ListProduct.filter(
    function(item){
       return item.price > 30;
    }
)
const under30 = ListProduct.filter(
    function(item){
        return item.price <= 30;
    }
)
// 1) show sản phẩm
function showProducts(data){
    if(popularProducts){
        popularProducts.innerHTML = "";
        data.forEach(item => {
            popularProducts.innerHTML += 
            `
            <div class="products__item col l-4 m-6 c-12">    
                <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt="" class="products__item-img"></a>
                <a href="./detail.html?id=${item.id}" class="products__item-name"><h4>${item.name}</h4></a>
                <p class="product__item-paragraph">
                    <i class="fa-solid fa-stopwatch"></i>
                    <span>30 Minutes</span>
                    <i class="fa-solid fa-utensils"></i>
                    <span>Snack</span>
                </p>
            </div>
            `
        });
    }
}
showProducts(ListProduct);
// 2) lọc giá
function filterProducts(){
    if(filterPrice.value == "under30"){
        showProducts(under30);
    }
    if(filterPrice.value == "over30"){
        showProducts(over30);
    }
    if(filterPrice.value == "all"){
        showProducts(ListProduct);
    }
}
if(filterPrice){
    filterPrice.addEventListener('change', filterProducts);
}
// detail
const idProduct = new URLSearchParams(window.location.search).get("id");
const product =  ListProduct.find(
    function(item){
        return item.id == idProduct;
    }
)
const productDetail = document.querySelector('.product-details');
function detailProduct(){
    if(productDetail){
        productDetail.innerHTML = 
        `
        <div class="product-details__info col l-6 m-12 c-12">
            <h3 class="product-details__name">${product.name}</h3>
            <h4 class="product-details__price">$${product.price}</h4>
            <p class="product-details__desc">${product.desc}</p>
            <div class="product-details__amount">
                <input type="number" min="1" placeholder="Quantity">
                <button class="js-btn-add-detail">Add To Cart</button>
            </div>
        </div>
        <div class="product-details__img col l-6 m-12 c-12">
            <img src="${product.image}" alt="">
        </div>
        `
    }
}
detailProduct();
// random array number
var randomRelatedProducts = [];
const arrayRelatedProducts = [];
const relatedProducts = document.querySelector('.related-products__list-item');
function randomId(){
    while(true){
        var x = Math.floor(Math.random() * 6) + 1;
        function checkRandomId(){
            for(i = 0; i < (randomRelatedProducts.length + 1); i++){
                if(randomRelatedProducts[i] == x || product.id == x){
                    return false;
                }
            }
            randomRelatedProducts.push(x);    
        }
        checkRandomId();
        if(randomRelatedProducts.length == 3) {
            break;
        }
    }
   
}
function showRelatedProducts(){
    if(relatedProducts){
        arrayRelatedProducts.forEach(item => {
            relatedProducts.innerHTML +=
            `
            <div class="related-products__item col l-4 m-6 c-12">    
                <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt="" class="related-products__item-img"></a>
                <a href="./detail.html?id=${item.id}" class="related-products__item-name"><h4>${item.name}</h4></a>
                <p class="related-products__item-price">$${item.price}</p>
                <button class="related-products__item-btn js-btn-add">Add To Cart</button>
            </div>
            `
        });
    }
}
if(idProduct){
    randomId();
    ListProduct.filter(
        function(item){
            for(j = 0; j < randomRelatedProducts.length; j++){
                if(randomRelatedProducts[j] == item.id){
                    arrayRelatedProducts.push(item) ;
                }
            }
            return arrayRelatedProducts;
        }
    )
    showRelatedProducts();
}
// array object
const ListCategory = [
    {
        id: 1,
        name:"breakfast",
        image:"./images/home/Group 890.png",
        kindOf: "main"
    },
    {
        id: 2,
        name:"vegan",
        image:"./images/home/Group 879.png",
        kindOf: "vegetable"
    },
    {
        id: 3,
        name:"meat",
        image:"./images/home/Group 891.png",
        kindOf: "main"
    },
    {
        id: 4,
        name:"dessert",
        image:"./images/home/Group 892.png",
        kindOf: "sweet"
    },
    {
        id: 5,
        name:"lunch",
        image:"./images/home/Group 893.png",
        kindOf: "main"
    },
    {
        id: 6,
        name:"chocolate",
        image:"./images/home/Group 894.png",
        kindOf: "sweet"
    }
]
// categories
const categoriesListItem = document.querySelector('.js-category__list-item');
const filterCategories = document.querySelector('#filter-categories');
const sweetFood = ListCategory.filter(
    function(item){
        return item.kindOf == "sweet";
    }
)
const mainFood = ListCategory.filter(
    function(item){
        return item.kindOf == "main";
    }
)
const vegetableFood = ListCategory.filter(
    function(item){
        return item.kindOf == "vegetable";
    }
)
function showCategories(data){
    if(categoriesListItem){
        categoriesListItem.innerHTML = '';
        data.forEach(item => {
                categoriesListItem.innerHTML += 
                `
                <div class="category__item col l-2 m-3 c-6">
                    <a href="./products.html?cateId=${item.kindOf}#main" class="category__item-img">
                        <img src="${item.image}" alt="">
                    </a>
                    <a href="" class="category__item-name">
                        <h5>${item.name}</h5>
                    </a>
                </div>
                `
            }
        );
    }
}
showCategories(ListCategory);
function filtertCategory(){
    if(filterCategories.value == 'all'){
        showCategories(ListCategory);
    } else if(filterCategories.value == 'vegetable'){
        showCategories(vegetableFood);
    } else if(filterCategories.value == 'main'){
        showCategories(mainFood);
    } else if(filterCategories.value == 'sweet'){
        showCategories(sweetFood);
    }
}
if(filterCategories){
    filterCategories.addEventListener('change', filtertCategory);
}
//aside
const aside = document.querySelector('.js-menu__list-item');
const asideProducts = document.querySelector('.js-products');
function showAside(data){
    if(aside){
        data.forEach(item => {
            aside.innerHTML +=
            `
            <li class="menu__item">
                <a href="./products.html?cateId=${item.kindOf}#main">${item.name}</a>
            </li>
            `
        });
    }
}
showAside(ListCategory);
function showAsideProducts(data){
    if(asideProducts){
        asideProducts.innerHTML = '';
        data.forEach(item => {
            asideProducts.innerHTML +=
            `
            <div class="products__item col l-4 m-6 c-12">    
                <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt="" class="products__item-img"></a>
                <a href="./detail.html?id=${item.id}" class="products__item-name"><h4>${item.name}</h4></a>
                <p class="products__item-price">$${item.price}</p>
                <button class="products__item-btn js-btn-add">Add To Cart</button>
            </div>
            `
        });        
    }
}
showAsideProducts(ListProduct);
const filterAsideSearch = new URLSearchParams(window.location.search).get('cateId');
const filterAsideProduct = ListProduct.filter(
    function(item){
        return item.category == filterAsideSearch;
    }
)
function filterAside(e){
    if(filterAsideSearch){
        showAsideProducts(filterAsideProduct);
    }
}
filterAside();
// cart
const bodyCart = document.querySelector('.header__cart-tbody');
const btnAddToCart = document.querySelectorAll('.js-btn-add');
function addProtoCart(){
    for(let item of btnAddToCart){
        item.addEventListener('click',function(){
    
        let trTable = document.createElement('tr');
        let tdTable = 
            `
            <td>
                <img src="${item.parentElement.querySelector('img').src}" alt="">        
            </td>
            <td>
                <p>${item.parentElement.querySelector('h4').innerHTML}</p>       
            </td>
            <td>     
               <span class="js-price">${item.parentElement.querySelector('p').innerHTML}</span>
            </td>
            <td>
                <input type="number" value="1" min="1" step="1" class="js-quantity" onchange="fullMoney()">
                <button onclick="deleteProductInCart(this)">Delete</button>
            </td>
            `
        let identityInput = bodyCart.querySelectorAll('input');
        let checkName = bodyCart.querySelectorAll('p');  
        for(let i = 0; i < checkName.length; i++) {
            if(item.parentElement.querySelector('h4').innerText == checkName[i].innerText){
                identityInput[i].value++;
                fullMoney();       
            return;
            }
        }
        trTable.innerHTML = tdTable;
        bodyCart.appendChild(trTable);
        fullMoney();
        }) 
    }
}
addProtoCart();
function deleteProductInCart(btn){
    bodyCart.removeChild(btn.parentElement.parentElement);
    fullMoney();
}
// fullMoney
function fullMoney() {
    const totalMoney = document.querySelector(".header__cart-sumMoney span");
    const quantity= bodyCart.querySelectorAll(".js-quantity");
    const price = bodyCart.querySelectorAll(".js-price");
    let sum = 0;
    for(let i = 0; i < quantity.length; i++){
        sum += quantity[i].value * Number(price[i].innerText.substr(1, price[i].innerText.length))
    }
    totalMoney.innerHTML = `${sum}$`;
}
// continue cart but in detail
const addToCartDetail = document.querySelector('.js-btn-add-detail');
if(addToCartDetail){
    addToCartDetail.onclick = function(){
        let trTable = document.createElement('tr');
        let tdTable = 
            `
            <td>
                <img src="${addToCartDetail.parentElement.parentElement.parentElement.querySelector('img').src}" alt="">        
            </td>
            <td>
                <p>${addToCartDetail.parentElement.parentElement.querySelector('h3').innerHTML}</p>       
            </td>
            <td>     
               <span class="js-price">${addToCartDetail.parentElement.parentElement.querySelector('h4').innerHTML}</span>
            </td>
            <td>
                <input type="number" value="${addToCartDetail.parentElement.querySelector('input').value}" min="1" step="1" class="js-quantity" onchange="fullMoney()">
                <button onclick="deleteProductInCart(this)">Delete</button>
            </td>
            `
            
        let identityInput = bodyCart.querySelectorAll('input');
        let checkName = bodyCart.querySelectorAll('p');  
        for(let i = 0; i < checkName.length; i++) {
            if(addToCartDetail.parentElement.parentElement.querySelector('h3').innerHTML == checkName[i].innerText){
                identityInput[i].value  = Number(identityInput[i].value) + Number(addToCartDetail.parentElement.querySelector('input').value);
                fullMoney();       
            return;
            } 
        }
        if(addToCartDetail.parentElement.querySelector('input').value >= 1){
            trTable.innerHTML = tdTable;
            bodyCart.appendChild(trTable);
            fullMoney();
        } else {
            addToCartDetail.parentElement.querySelector('input').value = 1;
            let tdTable = 
            `
            <td>
                <img src="${addToCartDetail.parentElement.parentElement.parentElement.querySelector('img').src}" alt="">        
            </td>
            <td>
                <p>${addToCartDetail.parentElement.parentElement.querySelector('h3').innerHTML}</p>       
            </td>
            <td>     
               <span class="js-price">${addToCartDetail.parentElement.parentElement.querySelector('h4').innerHTML}</span>
            </td>
            <td>
                <input type="number" value="${addToCartDetail.parentElement.querySelector('input').value}" min="1" step="1" class="js-quantity" onchange="fullMoney()">
                <button onclick="deleteProductInCart(this)">Delete</button>
            </td>
            `
            trTable.innerHTML = tdTable;
            bodyCart.appendChild(trTable);
            fullMoney();
        }
       
    }
}


// api geolocation
// function getLocation() {
//     let confirmPosition =  confirm("Do you allow location access?")
//     if(confirmPosition){
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(function(position){
//                 console.log(position);
//             });
//         } 
//         else {
//             console.log("Geolocation is not supported by this browser")
//         }
//     }
// }
// getLocation();


