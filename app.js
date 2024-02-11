let mac = 2000;
let creditMoney;


let credit = function(age, work = false) {
    if (age > 24 && work == true) {
        return 500
    } else if (age > 24 && work == false) {
        return 100
    } else {
        return 0
    }
}

function canBuy(productPrice, age, money, work = false) {
    let creditmoney = credit(age, work)
    return productPrice <= money + creditmoney;
}

console.log(canBuy(2000, 22, 1900))