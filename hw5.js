//класс для товара

class basketItem{
    constructor(itemName, itemCost, itemWeight) {
        this.itemName = itemName;
        this.itemCost = itemCost;
        this.itemWeight = itemWeight;
    }
}

const item = new basketItem(`Иммуностимулирующий`, 150, 300,);

console.log(item);