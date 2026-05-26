//.checked = property that determines the checked state of an 
//           HTML textbox or radio button element

const mySubmit = document.getElementById("mySubmit");
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const PayPalBtn = document.getElementById("PayPalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed to me`;
    }
    else{
        subResult.textContent = `You are NOT subscribed to me`;
    }


    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`
    }
    else if(MasterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`
    }
    else if(PayPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`
    }
    else{
        paymentResult.textContent = `You need to choose a payment method`
    }
}

