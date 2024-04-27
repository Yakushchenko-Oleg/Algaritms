const capacity = 50;
const items = [
    {
    weight: 10,
    value: 60,
    price: function(){
       return this.value / this.weight
    } 

  },
  {
    weight: 30,
    value: 120,
    price: function(){
        return this.value / this.weight
     } 
  },
  {
    weight: 20,
    value: 100,
    price: function(){
        return this.value / this.weight
     } 
  },
];

function backPack(items, capacity) {
    let count = 0
    let restSpace = capacity
    let totalPrice = 0
    items.sort((a, b) => b.price() - a.price())

    for (let i = 0; i < items.length; i++) {
        if (restSpace >= items[i].weight) {
           count = count +items[i].weight
           restSpace = restSpace - items[i].weight
           totalPrice  +=items[i].value
        }  else{
            count += restSpace
            totalPrice += items[i].price() * restSpace
            restSpace = 0
            break
        }          
    }
return `В нашем рюкзаке ${count} кг. золота стоимостью ${totalPrice} сказочных гривен`
}
console.log(backPack(items, capacity)); 

let current = [2,3,4,5]
let target  = [5,4,3,2] 

function turnsCounter(current, target) {
    let counter = 0
    
    if (current.length != target.length) { return console.log('Количество символов на двух барабанах не совпадают');
    } else{
            for (let i = 0; i < current.length; i++) {
            // if (Math.abs(current[i] -target[i]) <= 5) {
            //     counter += Math.abs(current[i] -target[i])
            // } else{ counter +=  (10 - Math.abs(current[i] -target[i]))
            // }
            counter += Math.min (Math.abs(current[i] -target[i]),(10 - Math.abs(current[i] -target[i])))
    }
}return console.log(`Нам понадобится ${counter} оборотов`);
}

turnsCounter(current, target)