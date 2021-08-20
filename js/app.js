/*============================================
              total price
=============================================*/

function totalPrice(){
    const memoryPrice = parseInt(document.getElementById('memory-price').innerText);
    const storagePrice = parseInt(document.getElementById('storage-price').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalPrice = document.getElementById('total-price');
    const totalCost = document.getElementById('total-cost');

    totalPrice.innerText = 1299 + memoryPrice + storagePrice + deliveryCost;
    totalCost.innerText = 1299 + memoryPrice + storagePrice + deliveryCost;
}

/*=============================================
               initial price set
============================================== */

function initialValue(id){
    document.getElementById(id).innerText = 0;
    
}

document.getElementById('memory-button1').addEventListener('click', function(){
    initialValue('memory-price');
    totalPrice();
})
document.getElementById('storage-button1').addEventListener('click', function(){
    initialValue('storage-price');
    totalPrice();
})
document.getElementById('delivery-button1').addEventListener('click', function(){
    initialValue('delivery-cost');
    totalPrice();
})

/*=============================================
               extra charges adding
============================================== */

function extraPrice(id,price){
    document.getElementById(id).innerText = price;
}

document.getElementById('memory-button2').addEventListener('click', function(){
    extraPrice('memory-price','180');
    totalPrice();
})
document.getElementById('storage-button2').addEventListener('click', function(){
    extraPrice('storage-price','100');
    totalPrice();
})
document.getElementById('storage-button3').addEventListener('click', function(){
    extraPrice('storage-price','180');
    totalPrice();
})
document.getElementById('delivery-button2').addEventListener('click', function(){
    extraPrice('delivery-cost','20');
    totalPrice();
})

/*================================================
                 promo code apply
================================================*/

document.getElementById('apply-button').addEventListener('click',function(){
    const totalPrice = parseInt(document.getElementById('total-price').innerText);
    const totalCost = document.getElementById('total-cost');
    const promoCode = document.getElementById('promo-code').value;
    if(promoCode == 'stevekaku'){    
        const totalCostWithPromoCode = (totalPrice/100) * 80;
        const totalCostSort = totalCostWithPromoCode.toFixed(2);
        totalCost.innerText = totalCostSort;
    }
    document.getElementById('promo-code').value = '';
})