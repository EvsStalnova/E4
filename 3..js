// Написать функцию, которая создает пустой объект, но без прототипа.

function NoProto() {
    const empty = Object.create(null);
    console.log(empty.constructor);
    console.log(empty.getPrototypeOf);
   }

NoProto()