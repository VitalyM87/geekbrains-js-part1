class items {
    itemName = ''
    itemCost = 0
    itemImg = ''
    itemCount = 0

    constructor(itemName, itemCost) {
        this.itemName = itemName
        this.itemCost = itemCost
    }

    getAddToCartBtn() {
        const button = document.createElement('button')
        button.innerHTML = 'В корзину'

        button.addEventListener('click', () => {
            const CartInstance = new Cart()
            CartInstance.add(this)
            console.log(CartInstance)
        })

        return button

    }

    renderItemInList() { //рендер товара в блок каталога
        const {
            itemName,
            itemCost,
            itemImg
        } = this

        const renderItem = document.createElement('div')
        renderItem.classList.add('itemContainer')
        renderItem.innerHTML = `
        <div>
            <div class="itemImg">
                <img src="${itemImg}" />
            </div>
            <div class="itemContent">Чай <span>${itemName}</span></div>
            <div class="itemContent">Соимость: <span>${itemCost}</span> рублей</div>
        </div>`

        renderItem.appendChild(this.getAddToCartBtn())
        return renderItem
    }
    //addToCartButton() { //добавляет товару кнопку "в корзину"
    //    const addToCartButton = document.createElement('button')
    //    addToCartButton.classList.add('addToCartButton')
    //    addToCartButton.innerHTML = 'В корзину'
    //    addToCartButton.addEventListener('click', this.onButtonClicked.bind(this));
    //    return addToCartButton
    //}
}

class List {
    itemsArr = []

    constructor(itemsArr = []) {
        this.itemsArr = itemsArr
    }

    add(item) {
        this.itemsArr.push(item)
        this.render()
    }
    render() {

    }
}

class Cart extends List {
    constructor(itemsArr) {
        if (Cart._instance) {
            return Cart._instance
        }
        super(itemsArr)
        this.init()

        Cart._instance = this
    }

    init() {
        const block = document.querySelector('.cart')

        const list = document.createElement('div')
        list.classList.add('cart__list')

        //block.appendChild(button)
        block.appendChild(list)

        const placeToRender = document.querySelector('.cart')
        if (placeToRender) {
            placeToRender.appendChild(block)
        }
    }
    render() {
        const placeToRender = document.querySelector('.cart__list')
        if (!placeToRender) {
            return
        }

        //this.itemsArr.forEach(item => {
        //    const itemTemplate = item.renderItemInList()
        //    placeToRender.appendChild(itemTemplate)
        //})
    }



}

class itemsList extends List {
    constructor(itemsArr) {
        super(itemsArr)
    }

    render() {
        const placeToRender = document.querySelector('.itemsList')
        if (!placeToRender) {
            return
        }

        this.itemsArr.forEach(item => {
            const itemTemplate = item.renderItemInList()
            placeToRender.appendChild(itemTemplate)
        })
    }
}


const tea1 = new items(`Иммуностимулирующий`, 150)
const tea2 = new items(`Антистрессовый`, 250)
const tea3 = new items(`Антиоксидант`, 350)
const tea4 = new items(`Сердце Байкала`, 400)

const itemsListInstance = new itemsList()
itemsListInstance.add(tea1)
itemsListInstance.add(tea2)
itemsListInstance.add(tea3)
itemsListInstance.add(tea4)
itemsListInstance.render()

const cartInstance = new Cart()

//tea1.renderItemInList()
//tea2.renderItemInList()
//tea3.renderItemInList()
//tea4.renderItemInList()