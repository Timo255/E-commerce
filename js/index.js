// let auto = true;
// let intervalTime = 5000;
// let slideInterval;

class Product{
    constructor(img,name,price,variation,quantity,subtotal){
        this.img = img;
        this.name = name;
        this.price = price;
        this.variation = variation;
        this.quantity = quantity;
        this.subtotal = subtotal;
    }
}

// UI functions
class UI{
    static openCart(){
        const cartPage = document.querySelector('.cartContent');
        const bodyBg = document.querySelector('.body-background');
        const FilterSection = document.querySelector('.product-filter-btn')
        if(cartPage.classList.contains('hide')){
            cartPage.classList.remove('hide');
            FilterSection.style.zIndex = '-1';
        }
    }

    static closeCart(){
        const FilterSection = document.querySelector('.product-filter-btn')
        const cartPage = document.querySelector('.cartContent');
        cartPage.classList.add('hide');
        FilterSection.style.zIndex = '1';
    }

    static openMenu(){
        const navBlock = document.getElementById('nav-icons');
        navBlock.classList.toggle('show');
    }

    static closeMenu(){
        const navBlock = document.getElementById('nav-icons');
        navBlock.classList.remove('show');
    }

    static showActiveNavlink(n){
        const navBlock = document.getElementById('nav-icons');
        if(n.href === window.location.href){
            // n.setAttribute('aria-current', 'page');
            n.classList.add('active');
        }
    }

    
    static searchElement(e){
        const products = document.querySelectorAll('.product-img-details');
        const text = e.target.value.toLowerCase();
        for(let i = 0; i < products.length; i++){
            let prName = products[i].querySelectorAll('.product-name')[0];
            if(prName.innerHTML.toLowerCase().indexOf(text) > -1){
                products[i].style.display = 'flex';
            }else{
                products[i].style.display = 'none';
            }
        }
        
    }

    // static nextSlderImg(){
    //     const slide = document.querySelectorAll('.slide');
    //     const current = document.querySelector('.current');
        
    //     current.classList.remove('current')
    //     if(current.nextElementSibling){
    //         current.nextElementSibling.classList.add('current');
    //     }else{
    //         slide[0].classList.add('current');
    //     }
    //     setTimeout(() => current.classList.remove('current'));
    // }

    // static prevSliderImg(){
    //     const slide = document.querySelectorAll('.slide');
    //     const current = document.querySelector('.current');

    //     current.classList.remove('current')
    //     if(current.nextElementSibling){
    //         current.nextElementSiblingnextElementSibling.classList.add('current');
    //     }else{
    //         slide[slide.length - 1].classList.add('current');
    //     }
    //     setTimeout(() => current.classList.remove('current'));
    // }

    // static autoSlide(){
    //     if(auto){
    //         slideInterval = setInterval(UI.nextSlderImg, intervalTime);
    //     }
    // }

    static filterItems(el){
        let dataFilter = el.dataset.filter;
        let products = document.querySelectorAll('.product-img-details');

        products.forEach(product =>{
            if(dataFilter === 'All'){
                product.style.display = 'flex'
            }else if(product.classList.contains(dataFilter)){
                product.style.display = 'flex'
            }else{
                product.style.display = 'none';
            }
        })
    }

    static variationsChange(e){
        let vari = e.target;
        let variationClassName = vari.className;
        if(vari.classList.contains('Seater') && !vari.classList.contains('active-seater')){
            let variName = variationClassName.slice(variationClassName.indexOf('-') + 1, variationClassName.length)
            UI.resetActiveBtns();
            vari.classList.add('active-seater')
            UI.setNewSeater(variName);
        } else if(vari.classList.contains('color') && !vari.classList.contains('active-color')){
            let colorName = variationClassName.slice(variationClassName.indexOf('-') + 1, variationClassName.length)
            UI.resetActiveBtns();
            vari.classList.add('active-color')
            UI.setNewColor(colorName);
        }else if(vari.classList.contains('Shape') && !vari.classList.contains('active-shape')){
            let tableName = variationClassName.slice(variationClassName.indexOf('-') + 1, variationClassName.length)
            UI.resetActiveBtns();
            vari.classList.add('active-shape')
            UI.setNewTable(tableName);
        }
        else if(vari.classList.contains('Dimensions') && !vari.classList.contains('active-bed')){
            let dimName = variationClassName.slice(variationClassName.indexOf('-') + 1, variationClassName.length)
            UI.resetActiveBtns();
            vari.classList.add('active-bed')
            UI.setNewDimensions(dimName);
        }
    }

    static resetActiveBtns(){
        const variations = document.querySelectorAll('.variation');
        variations.forEach(variation =>{
            if(variation.classList.contains('active-seater')){
                variation.classList.remove('active-seater');
            }else if(variation.classList.contains('active-color')){
                variation.classList.remove('active-color');
            }else if(variation.classList.contains('active-shape')){
                variation.classList.remove('active-shape');
            }
            else if(variation.classList.contains('active-bed')){
                variation.classList.remove('active-bed');
            }
        })
    }

    static setNewSeater(seater){
        const variations = document.querySelectorAll('.variation');
        variations.forEach(vari =>{
            if(vari.classList.contains('brownSofa') && vari.classList.contains('active-seater')){
                let seaterName = seater.slice(seater.indexOf('-') + 1);
                document.querySelector('.name').innerHTML = `${seaterName} brown sofa`;
                document.querySelector('.bigImg img').src = `../images/${seaterName} brown sofa.png` 
            } else if(vari.classList.contains('whiteLeatherSofa') && vari.classList.contains('active-seater')){
                let seaterName = seater.slice(seater.indexOf('-') + 1);
                document.querySelector('.name').innerHTML = `${seaterName} white leather sofa`;
                document.querySelector('.bigImg img').src = `../images/${seaterName} white-sofa.png` 
            } else if(vari.classList.contains('purpleSofa') && vari.classList.contains('active-seater')){
                let seaterName = seater.slice(seater.indexOf('-') + 1);
                document.querySelector('.name').innerHTML = `Purple Sofa (${seaterName})`;
                document.querySelector('.bigImg img').src = `../images/${seaterName} purple sofa.png`
            }
        })                                  
    }

    static setNewColor(color){
        const variations = document.querySelectorAll('.variation');
        variations.forEach(vari =>{
            if(vari.classList.contains('wingChair') && vari.classList.contains('active-color')){
                let colorName = color.slice(color.indexOf('-') + 1);
                document.querySelector('.name').innerHTML = `${colorName} wing chair`;
                document.querySelector('.bigImg img').src = `../images/${colorName} wing chair.png`
            }
            else if(vari.classList.contains('cushion') && vari.classList.contains('active-color')){
                let colorName = color.slice(color.indexOf('-') + 1);
                document.querySelector('.name').innerHTML = `${colorName} cushion`;
                document.querySelector('.bigImg img').src = `../images/${colorName} cushion.png`
            }
            else if(vari.classList.contains('futon') && vari.classList.contains('active-color')){
                let colorName = color.slice(color.indexOf('-') + 1);
                document.querySelector('.name').innerHTML = `${colorName} futon`;
                document.querySelector('.bigImg img').src = `../images/${colorName} futon.png`
            }
        }) 
    }

    static setNewTable(tableName){
        const variations = document.querySelectorAll('.variation');
        variations.forEach(vari =>{
            if(vari.classList.contains('woodTable') && vari.classList.contains('active-shape')){
                let nameTable = tableName.slice(tableName.indexOf('-') + 1);
                document.querySelector('.name').innerHTML = `${nameTable} wooden table`;
                document.querySelector('.bigImg img').src = `../images/${nameTable} wooden table.png`
            }else if(vari.classList.contains('glassTable') && vari.classList.contains('active-shape')){
                let nameTable = tableName.slice(tableName.indexOf('-') + 1);
                document.querySelector('.name').innerHTML = `${nameTable} Glass table`;
                document.querySelector('.bigImg img').src = `../images/${nameTable} Glass table.png`
            }
        })
    }

    static setNewDimensions(dimName){
        const variations = document.querySelectorAll('.variation');
        variations.forEach(vari =>{
            if(vari.classList.contains('Bed') && vari.classList.contains('active-bed')){
                let dimeName = dimName.slice(dimName.indexOf('-') + 1);
                document.querySelector('.name').innerHTML = `Bed (${dimeName})`
                document.querySelector('.bigImg img').src = `../images/(${dimeName}) bed.png`
            }
        })
    }

    static cartNumberDiplay(pr){
        let cD = 0;
        let cdNo = parseFloat(document.getElementById('num').innerHTML)
        let prQty = parseInt(pr.quantity);
        cD = cdNo + prQty;
        // sbTotal += pr.price * prQty
        document.getElementById('num').innerHTML = cD
        // document.querySelectorAll('.subtotal').innerHTML =  sbTotal;
        // console.log(sb)
    }

    static displayItems(){
        const items = Store.getItemCart();
        items.forEach((item) => UI.addItemToCart(item));
    }

    static addItemToCart(product){
        const itemBox = document.querySelector('.cartItems');
        const item = document.createElement('div');
        item.className= 'item';

        item.innerHTML = `
        <div class="itemProduct">
            <div class="itemImg"><img src="${product.img}" alt=""></div>
            <div class="itemImgDetails">
                <p class="cName">${product.name}<br></p>
                <p class="cPrice"><span>price:</span>$${product.price}</p>
                <p class="vari"><span class="cvLabel">variation: </span>${product.variation}</p>
                <p class="del">remove</p>
            </div>     
        </div>
        <input class="quantity"  type="number" value="${product.quantity}" min="1">
        <div class="subtotal">${product.subtotal}</div>
        `

        itemBox.appendChild(item);

        
        item.querySelectorAll('.quantity').forEach(items =>{
            items.addEventListener('change', (e)=>{
                UI.totaQuantity(e.target)
                Store.qtiTotal(e);
                UI.updateCartTotal();
            })
        })
    }

    static totaQuantity(el){
        const ipT = el
        let total = 0
        const prs = parseInt(el.previousElementSibling.children[1].children[1].textContent.replace('price:$', ''))
            if (isNaN(ipT.value) || ipT.value <= 0) {
                ipT.value = 1   
            }else{
                total = prs * ipT.value
                el.nextElementSibling.innerHTML = total;  
                UI.updateItemsTotal()
            }   
    }

    static removeProduct(e){
        var cD = parseFloat(document.getElementById('num').innerHTML);
        let qtyV = parseInt(e.target.parentElement.parentElement.nextElementSibling.value);
        if(e.target.classList.contains('del')){
            e.target.parentElement.parentElement.parentElement.remove();
        }
    
    }

    static updateItemsTotal(){
        let cartBox = document.querySelector('.cartItems')
        let cartRows = cartBox.querySelectorAll('.item');
        let total = 0;
        for(let i = 0; i < cartRows.length; i++){
            let cartRow = cartRows[i];
            let quantityElement = cartRow.querySelectorAll('.quantity')[0]
            let quantity = quantityElement.value;
            total = total + parseInt(quantity);
            // console.log(quantityElement);
        }
        document.getElementById('num').innerText = total;
       
    }

    static updateCartTotal(){
        let cartBox = document.querySelector('.cartItems')
        let cartRows = cartBox.querySelectorAll('.item');
        let total = 0;
        let finalTotal = 0;
        let tax = 5;
        for(let i = 0; i < cartRows.length; i++){
            let cartRow = cartRows[i];
            let sbTtl = cartRow.querySelectorAll('.subtotal')[0];
            let sbTotal = parseFloat(sbTtl.textContent); 
            total = total + sbTotal;
            finalTotal = total + tax;
        }
        document.getElementById('sbtValue').innerText = `$${total}`
        document.querySelector('.taxValue').innerText = `$${tax}`
        document.querySelector('.ttlValue').innerText = `$${finalTotal}`

    }

}

// localStorage
class Store{
    static getItemCart(){
        let item;
        if(localStorage.getItem('item') == null){
            item = [];
        } else{
            item = JSON.parse(localStorage.getItem('item'));
        }
        return item
    }

    
    static addItem(items){
        const item = Store.getItemCart(items);

        item.push(items);

        // Store.updateCartItemsTotal();

        localStorage.setItem('item', JSON.stringify(item));
    }

    static qtiTotal(e){
        const item = Store.getItemCart();
        let nameItem = e.target.previousElementSibling.children[1].children[0].textContent
        // let count = 0
        item.forEach(itemms  =>{
            if(itemms.name == nameItem){
                itemms.quantity =  e.target.value;
                itemms.subtotal = itemms.price * itemms.quantity  
            }
        })   
        
        localStorage.setItem('item', JSON.stringify(item));
    }

    static updateCartItemsTotal(){
        const item = Store.getItemCart();
        let total = 0;
        item.map(itemms  =>{
           total = parseInt(itemms.quantity) + total;
           console.log(typeof itemms.quantity);
        })
       
        // localStorage.setItem('cartNo', JSON.stringify(total))
        document.getElementById('num').innerText = total
    }

    
    static totalStore(){
        let sbTT = 0;
        let tax = 5;
        let finalTotal = 0;
        const item = Store.getItemCart();
        item.map(itemmm =>{
            sbTT = itemmm.subtotal + sbTT;
            finalTotal = sbTT + tax
        }) 
        document.getElementById('sbtValue').innerText = `$${sbTT}`
        document.querySelector('.taxValue').innerText = `$${tax}`
        document.querySelector('.ttlValue').innerText = `$${finalTotal}`
        console.log(sbTT)
    }

    static deleteItem(itemName){
        const item = Store.getItemCart()
        item.forEach((itemm, index)  =>{
            if(itemm.name === itemName){
                item.splice(index, 1);
            }
        })
        localStorage.setItem('item', JSON.stringify(item));

    } 

}

// events
// document.addEventListener('DOMContentLoaded', UI.autoSlide);
document.addEventListener('DOMContentLoaded', UI.displayItems);
document.addEventListener('DOMContentLoaded', Store.updateCartItemsTotal);
document.addEventListener('DOMContentLoaded', Store.totalStore);

const cartOpen = document.getElementById('cartBtn');
cartOpen.addEventListener('click', UI.openCart)

const cartClose = document.getElementById('cartCloseBtn');
cartClose.addEventListener('click', UI.closeCart);

// const menu = document.getElementById('menu-bar');
// menu.addEventListener('click', () => {
//     UI.openMenu();
// });

// const closeMenu = document.getElementById('closeBtn');
// closeMenu.addEventListener('click', () => {
//     UI.closeMenu()
// });

const navItem = document.querySelectorAll('.nav-item');
navItem.forEach(n =>{
   UI.showActiveNavlink(n);
})

// const searchItem = document.getElementById('searchField');
// searchItem.addEventListener('keyup', (e)=>{
//     e.preventDefault();
//     UI.searchElement(e);
// })

// const prevSlider = document.querySelector('.left-arrow')
// prevSlider.addEventListener('click',(e)=>{
//     UI.prevSliderImg();
//     if(auto){
//         clearInterval(slideInterval);
//         slideInterval = setInterval(UI.nextSlderImg, intervalTime);
//     }
// })

// const nextSliders = document.querySelector('.right-arrow');
// nextSliders.addEventListener('click', (e)=>{
//     UI.nextSlderImg();
//     if(auto){
//         clearInterval(slideInterval);
//         slideInterval = setInterval(UI.nextSlderImg, intervalTime);
//     }
// });

const filterBtn = document.querySelectorAll('.filter-btn');
filterBtn.forEach(btnFilter =>{
    btnFilter.addEventListener('click', (e)=>{
        e.preventDefault();
        UI.filterItems(e.target);
        // console.log('clicking')
    })
})


const variations = document.querySelectorAll('.variation')
variations.forEach(variation =>{
    variation.addEventListener('click', (e)=>{
        UI.variationsChange(e);
    })
})

//add to cart
const btnAddToCart = document.querySelectorAll('.btnAdd');
for(let i = 0; i < btnAddToCart.length; i++){
    btnAddToCart[i].addEventListener('click', (e)=>{
        e.preventDefault();
        const img = e.target.parentElement.previousElementSibling.children[0].children[0].src;
        const name = e.target.parentElement.children[1].textContent;
        const price = parseFloat(e.target.parentElement.children[2].textContent.replace('$', ''))
        let variation;
        let categories = document.querySelectorAll('.variation');
        categories.forEach(category =>{
            if(category.classList.contains('Seater') && category.classList.contains('active-seater')){
                variation = category.textContent
            }else if(category.classList.contains('color') && category.classList.contains('active-color')){
                variation = category.dataset.color;
                // console.log(variation)
            }else if(category.classList.contains('Shape') && category.classList.contains('active-shape')){
                variation = category.textContent
            }else if(category.classList.contains('Bed') && category.classList.contains('active-bed')){
                variation = category.textContent
            }
        })
       const quantity = e.target.previousElementSibling.value
       const subtotal = parseFloat(e.target.parentElement.children[2].textContent.replace('$', '')) * quantity;
       
       const product = new Product(img,name,price,variation,quantity,subtotal);
       const cartItemNames = document.getElementsByClassName('cName')
       for (var i = 0; i < cartItemNames.length; i++) {
               if (cartItemNames[i].innerHTML == product.name) {
                   alert('This item is already added to the cart');
                   return;
               }
           }
        // UI.cartNumberDiplay(product);
        UI.addItemToCart(product) 
        Store.addItem(product);
        // Store.updateCartItemsTotal();
        UI.updateItemsTotal()
        UI.updateCartTotal();
    })
}

// const qtyBtn = document.querySelectorAll('.item .quantity');
// qtyBtn.forEach(btnQty =>{
//     btnQty.addEventListener('change', (e)=>{
//         UI.totaQuantity(e);
//     })
// })

const delBtn = document.querySelector('.cartItems');
delBtn.addEventListener('click',(e)=>{
    UI.removeProduct(e);
    Store.deleteItem(e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    UI.updateItemsTotal()
    // Store.updateCartItemsTotal()
    UI.updateCartTotal();
    
})








