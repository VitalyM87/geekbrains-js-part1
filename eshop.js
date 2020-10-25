
//класс для корзины
class basket{
    constructor(totalPositions, totalCost, totalWeight){
        this.totalPositions = totalPositions;
        this.totalCost = totalCost;
        this.totalWeight = totalWeight;
    }
}

//класс для товара
class tea{
    
    constructor(itemName, itemCost, itemWeight) {
       this.itemName = itemName;
       this.itemCost = itemCost;
       this.itemWeight = itemWeight;
    }
    
    render(){
        const renderTea = document.createElement('div');
        renderTea.setAttribute("class", "link");
        renderTea.innerHTML = this.itemName;
        const place = document.querySelector('#main');
        place.appendChild(renderTea);
    }
}

//document.getElementById('addnew').onclick = function(){
//    var parent = document.getElementById('parent'); 
//    var newGroup = document.createElement("div"); 
//    newGroup.setAttribute("id", "newGroup"); 
//    newGroup.setAttribute("class", "inner");
//    parent.appendChild(newGroup); 
//};

const tea1 = new tea(`Иммуностимулирующий`, 150, 300,) ;
const tea2 = new tea(`Антистрессовый`, 250, 300,) ;
const tea3 = new tea(`Антиоксидант`, 350, 400,) ;
const tea4 = new tea(`Сердце Байкала`, 400, 450,);

// let totalPrice = items.reduce(function(accum, items) {
//     return accum + items.itemCost;
// },0);

// console.log(totalPrice);

function onLoadTeaRender(){
    tea1.render();
    tea2.render();
    tea3.render();
    tea4.render();
}
window.onload = onLoadTeaRender;

//function onloadTest(){
//    console.log("Загрузка завершена");
// } 

// window.onload = onloadTest;