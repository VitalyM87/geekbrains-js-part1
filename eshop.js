//класс для корзины
class basket {
    constructor(totalPositions, totalCost, totalWeight) {
        this.totalPositions = totalPositions;
        this.totalCost = totalCost;
        this.totalWeight = totalWeight;
    }
}
//класс для товара
class tea {
    constructor(itemName, itemCost, itemWeight) {
        this.itemName = itemName;
        this.itemCost = itemCost;
        this.itemWeight = itemWeight;
    }
    render() { //рендер товара в блок каталога
        const renderTea = document.createElement('div');
        renderTea.classList.add('teaContainer');
        renderTea.innerHTML = this.itemName;
        const place = document.querySelector('#main');
        place.appendChild(renderTea);
        renderTea.appendChild(this.addToBasketButton());
    }
    addToBasketButton() { //добавляет товару кнопку "в корзину"
        const addToBasketButton = document.createElement('button');
        addToBasketButton.classList.add('addToBasketButton');
        addToBasketButton.innerHTML = 'В корзину';
        addToBasketButton.addEventListener('click', this.onButtonClicked.bind(this));
        return addToBasketButton;
    }
    onButtonClicked() { //при нажатии на кнопу "в корзину" добавляет товар в корзину с кнопкой "удалить" из корзины
        const renderTeaInBasket = document.createElement('div');
        renderTeaInBasket.classList.add('teaBasket');
        renderTeaInBasket.innerHTML = this.itemName;
        const place = document.querySelector('#basket');
        place.appendChild(renderTeaInBasket);
        renderTeaInBasket.appendChild(this.removeFromBasketButton.bind(this)());
    }
    removeFromBasketButton() { //кнопка удаления из корзины
        const removeFromBasketButton = document.createElement('button');
        removeFromBasketButton.classList.add('removeFromBasketButton');
        removeFromBasketButton.innerHTML = 'Удалить';
        removeFromBasketButton.addEventListener('click', this.onRemoveButtonClicked);
        return removeFromBasketButton;
    }
    onRemoveButtonClicked() {
        this.parentNode.remove();
    }
}

const tea1 = new tea(`Иммуностимулирующий`, 150, 300, );
const tea2 = new tea(`Антистрессовый`, 250, 300, );
const tea3 = new tea(`Антиоксидант`, 350, 400, );
const tea4 = new tea(`Сердце Байкала`, 400, 450, );

// let totalPrice = items.reduce(function(accum, items) {
//     return accum + items.itemCost;
// },0);

// console.log(totalPrice);

tea1.render();
tea2.render();
tea3.render();
tea4.render();

//function onloadTest(){
//    console.log("Загрузка завершена");
// } 

// window.onload = onloadTest;