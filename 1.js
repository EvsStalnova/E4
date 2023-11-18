// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все 
// включи и значения только собственных свойств. Данная функция не должна возвращать значение.

function Func1(obj) {
  for (let item in obj){
    if (obj.hasOwnProperty(item)){
      console.log(item, obj[item])
    }
  }
}

const city = {
  city: 'Moscow'
}

const objTest = Object.create(city);

objTest.name = 'Eva'
objTest.address = 'Piter'

Func1(objTest)