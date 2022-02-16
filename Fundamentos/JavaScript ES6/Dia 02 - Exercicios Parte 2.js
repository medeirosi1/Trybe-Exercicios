const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let ana =  order.order.delivery.deliveryPerson; 
  let rafael = order.name;
  let phoneNumber = order.phoneNumber;
  let rua = order.address.street
  let number = order.address.number
  let ap = order.address.apartment

  console.log(`Olá ${ana}, entrega para: ${rafael}, telefone: ${phoneNumber}, R. ${rua}, Nº: ${number}, AP: ${ap}`)
}

customerInfo(order);

const orderModifier = (order) => {

let priceCoca = order.order.drinks.coke.price = 5;
let pricePeperoni = order.order.pizza.pepperoni.price = 20;
let priceMarguerita = order.order.pizza.marguerita.price;
let somaProdutos = priceCoca + pricePeperoni + priceMarguerita;
// let pizzas = Object.getOwnPropertyNames(order.order.pizza);
let pizzas = Object.keys(order.order.pizza)
let typeCoca = order.order.drinks.coke.type;
let newName = order.name = 'Luiz Silva';

console.log(`Olá ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${typeCoca} é R$ ${somaProdutos},00`)
}

orderModifier(order);