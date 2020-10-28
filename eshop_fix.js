class items {
    constructor(itemName, itemCost, itemWeight) {
        this.itemName = itemName;
        this.itemCost = itemCost;
        this.itemWeight = itemWeight;
    }
    renderItem() { //рендер товара в блок каталога
        const renderItem = document.createElement('div');
        renderItem.classList.add('itemContainer');
        renderItem.innerHTML = 'Чай '+this.itemName+', стоимость '+this.itemCost;
        document.querySelector('.itemsList').appendChild(renderItem);
        renderItem.appendChild(this.addToBasketButton());
    }
    addToBasketButton() { //добавляет товару кнопку "в корзину"
        const addToBasketButton = document.createElement('button');
        addToBasketButton.classList.add('addToBasketButton');
        addToBasketButton.innerHTML = 'В корзину';
    //    addToBasketButton.addEventListener('click', this.onButtonClicked.bind(this));
        return addToBasketButton;
    }
}

const tea1 = new items(`Иммуностимулирующий`, 150, 300, );
const tea2 = new items(`Антистрессовый`, 250, 300, );
const tea3 = new items(`Антиоксидант`, 350, 400, );
const tea4 = new items(`Сердце Байкала`, 400, 450, );

tea1.renderItem();
tea2.renderItem();
tea3.renderItem();
tea4.renderItem();