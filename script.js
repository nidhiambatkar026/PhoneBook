const contacts = {
    nidhi: "9846537829",
    bhoomika: "8769835678",
    komal: "7986535675",
    maithili: "9124567894",
    aryan: "8745356098",
    kunal: "8560923457",
    tejas: "9675904325",
};
function search(){
    const inputelement = document.getElementById('input');
    const change = inputelement.value.toLowerCase();

    const mobile = contacts[change];
    const phone_card = document.getElementById('phone_card');
    if(mobile){
        phone_card.innerText= `Mobile no of ${change} is ${mobile}`;
    }
    else{
        phone_card.innerText = 'Contact not Found';
    }
}