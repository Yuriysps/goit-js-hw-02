console.log('task-1.js');

function makeTransaction(quantity, pricePerDroid,  customerCredits) {
    const totalPrice = pricePerDroid * quantity;
    if (totalPrice > customerCredits ) {
        return "Insufficient funds!"
    }
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}


console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// document.getElementById(task_1).innerHTML  = 'Price';
{/* <button type="button" onclick="document.getElementById('task_1').innerHTML = 'Hello JavaScript!'">Click Me!</button> */}

// document.getElementById("demo").innerHTML = 5 + 6;
// innerHTML = 5 + 6; document.write(5 + 6)
// function myFunction() {
//     document.getElementById("task_1").innerHTML = "Paragraph changed.";
//   }
//   function myFunction() {
//     document.getElementById("demo").innerHTML="Paragraph changed.";
// }
// function myFunction() {
//     document.getElementById("demo").innerHTML= makeTransaction(5, 3000, 23000);
// }
// window.alert( makeTransaction(5, 3000, 23000));
// window.alert(makeTransaction(3, 1000, 15000));
// window.alert( makeTransaction(10, 5000, 8000));
// window.alert( makeTransaction(8, 2000, 10000));
// window.alert( makeTransaction(10, 500, 5000))
document.getElementById("task-1/1").innerHTML= makeTransaction(5, 3000, 23000);
document.getElementById("task-1/2").innerHTML= makeTransaction(3, 1000, 15000);
document.getElementById("task-1/3").innerHTML= makeTransaction(10, 5000, 8000);
document.getElementById("task-1/4").innerHTML= makeTransaction(8, 2000, 10000);
document.getElementById("task-1/5").innerHTML= makeTransaction(10, 500, 5000);