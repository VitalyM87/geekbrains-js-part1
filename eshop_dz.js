class GoodItem {
    name = ''
    price = 0
    img = ''
    count = 1

    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img
    }

    inc() {
        this.count++
    }

    dec() {
        this.count--
    }

    getAddInCartBtn() {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = 'Купить'

        btn.addEventListener('click', () => {
            const CartInstance = new Cart()
            CartInstance.add(this)
            console.log(CartInstance)
        })

        return btn
    }

    getMainTemplate() {
        const {
            name,
            price,
            img
        } = this
        const wrapper = document.createElement('div')
        wrapper.classList.add('good')
        wrapper.innerHTML = `
        <div>
            <img class="good__image" src="${img}" />
            <div class="good__meta">Чай: <span>${name}</span></div>
            <div class="good__meta">Цена: <span>${price}</span></div>
        </div>
      `

        wrapper.appendChild(this.getAddInCartBtn())

        return wrapper
    }

    getMinusBtn() {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = '-'

        btn.addEventListener('click', () => {
            const CartInstance = new Cart()
            CartInstance.remove(this)
            console.log(CartInstance)
        })

        return btn
    }

    getCartTemplate() {
        const {
            name,
            price,
            count
        } = this
        const wrapper = document.createElement('div')
        wrapper.classList.add('cart__item')
        wrapper.innerHTML = `
        <span>${name}: ${price} x <input value="${count}" /> = ${price * count}</span>
      `

        const input = wrapper.querySelector('input')
        input.addEventListener('input', event => {
            const value = event.target.value
            if (value) {
                this.count = +value
                const CartInstance = new Cart()
                if (this.count) {
                    CartInstance.render()
                } else {
                    CartInstance.remove(this)
                }
            }
        })

        wrapper.appendChild(this.getMinusBtn())

        return wrapper
    }
}

class List {
    items = []

    constructor(items = []) {
        this.items = items
    }

    findGood(good) {
        return this.items.filter(item => item.name === good.name)[0]
    }

    add(item) {
        const exists = this.findGood(item)
        if (exists) {
            exists.inc()
        } else {
            this.items.push(item)
        }
        this.render()
    }

    remove(item) {
        const exists = this.findGood(item)
        if (!exists) {
            return
        }

        if (exists.count > 1) {
            exists.dec()
        } else {
            this.items = this.items.filter(good => item.name !== good.name)
        }
        this.render()
    }

    render() {}
}

class Cart extends List {
    constructor(items) {
        if (Cart._instance) {
            return Cart._instance
        }

        super(items)
        this.init()

        Cart._instance = this
    }

    init() {
        const block = document.createElement('div')
        block.classList.add('cart')

        const btn = document.createElement('div')
        btn.innerHTML = 'Корзина'
        btn.classList.add('btn')

        const list = document.createElement('div')
        list.classList.add('cart__list')

        btn.addEventListener('click', () => {
            list.classList.toggle('shown')
        })

        block.appendChild(btn)
        block.appendChild(list)


        const placeToRender = document.querySelector('main')
        if (placeToRender) {
            placeToRender.appendChild(block)
        }

        this.render()
    }

    getSumTemplate() {
        const sum = this.items.reduce((sum, good) => {
            return sum + good.price * good.count
        }, 0)

        const block = document.createElement('div')
        block.classList.add('cart__sum')
        block.innerHTML = `Суммарная цена: ${sum}`

        return block
    }

    getEmptyTemplate() {
        const block = document.createElement('div')
        block.classList.add('cart__empty')
        block.innerHTML = `Корзина пуста`

        return block
    }

    render() {
        const placeToRender = document.querySelector('.cart__list')
        if (!placeToRender) {
            return
        }

        placeToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getCartTemplate()
            placeToRender.appendChild(template)
        })

        if (this.items.length) {
            placeToRender.appendChild(this.getSumTemplate())
        } else {
            placeToRender.appendChild(this.getEmptyTemplate())
        }
    }
}

class GoodsList extends List {
    constructor(items) {
        super(items)
    }

    render() {
        const placeToRender = document.querySelector('.goods-list')
        if (!placeToRender) {
            return
        }

        placeToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getMainTemplate()
            placeToRender.appendChild(template)
        })
    }
}

const Good1 = new GoodItem(`Здоровье с берегов Байкала`, 250, `img/zdorovie.jpeg`)
const Good2 = new GoodItem(`Чабрец`, 120, `img/chabrets.jpeg`)
const Good3 = new GoodItem(`Дар Тайги`, 250, `img/dar_taigi.jpeg`)
const Good4 = new GoodItem(`Тайны Ольхона`, 250, `img/taini_olhona.jpeg`)
const Good5 = new GoodItem(`Антистресс`, 250, `img/antistress.jpeg`)
const Good6 = new GoodItem(`Иммуностимулирующий`, 250, `img/immuno.jpeg`)
const Good7 = new GoodItem(`Саган-Дайля`, 120, `img/sagan_dailya.jpeg`)


const GoodsListInstance = new GoodsList()
GoodsListInstance.add(Good1)
GoodsListInstance.add(Good2)
GoodsListInstance.add(Good3)
GoodsListInstance.add(Good4)
GoodsListInstance.add(Good5)
GoodsListInstance.add(Good6)
GoodsListInstance.add(Good7)
GoodsListInstance.render()

const CartInstance = new Cart()