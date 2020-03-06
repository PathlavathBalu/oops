// //Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

// //Constructor Function 
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }
// }
// const another = new Circle(1);


//
// let x ={value:10};
// let y = x;

//  x.value =20;

//
// let obj = {value:10};
// function increase(obj) {
//     obj.value++;
// }
// increase(obj);
// console.log(obj);
 



//
const movieList = document.getElementById('movie-list');
movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';
let person = {
    name: 'max',
    age : 30,
    hobbies: ['sports', 'Cooking'],
    greet : function  () {
        alert('Hi There!');
    }
};
delete person.age;
// person.age = null;
person.isAdmin = true;
console.log(person);