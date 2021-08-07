function getPriceWithDiscount(){
    const priceInput = document.getElementById('price').value;
    const discountInput = document.getElementById('discount').value;
    const select = document.getElementById('coupon').value;
    let toSub = priceInput * ((parseInt(discountInput)   + parseInt(select) )/100)
    let finalPrice = priceInput - toSub;
    let finalPriceLabel = document.getElementById('finalPrice');
    finalPriceLabel.innerHTML = finalPrice;
    
}
