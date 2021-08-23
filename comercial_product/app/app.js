let alert = document.getElementById('alert')
function conseguirdatos(){
    let email = document.getElementById('email').value
    let country = document.getElementById('select_country').value
    let direction = document.getElementById('direction').value
    if(email === "" || country === "" || direction === ""){
        alert.innerHTML = 
        `
        <div class="notification has-text-black">
            <button class="delete" onclick="borrarAlert()"></button>
            The fields are not valid, please try again
        </div>  
        `
    }
    else{
        alert.innerHTML = `
        <div class="notification has-text-black">
            <button class="delete" onclick="borrarAlert()"></button>
            <strong>Congratulations</strong><br>
            Our logistics operator will send the product to the address: ${direction}<br>
            Which is in: ${country}<br>
            Check the span area in your mail ${email} to know the details of your product.
        </div>  
        `
    }
}

function borrarAlert(){
    alert.innerHTML =''
}

document.querySelector('#btn_buy_top').addEventListener('click', conseguirdatos)