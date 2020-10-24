//класс для товара

class basketItem{
    constructor(itemName, itemCost, itemWeight) {
       this.itemName = itemName;
       this.itemCost = itemCost;
       this.itemWeight = itemWeight;
    }
}

//класс для корзины
class basket{
    constructor(totalPositions, totalCost, totalWeight){
        this.totalPositions = totalPositions;
        this.totalCost = totalCost;
        this.totalWeight = totalWeight;
    }
}



const item = [
    new basketItem(`Иммуностимулирующий`, 150, 300,), 
    new basketItem(`Антистрессовый`, 250, 300,), 
    new basketItem(`Антиоксидант`, 350, 400,), 
    new basketItem(`Сердце Байкала`, 400, 450,),
]

let totalPrice = item.reduce(function(accum, item) {
    return accum + item.itemCost;
},0);

console.log(totalPrice);