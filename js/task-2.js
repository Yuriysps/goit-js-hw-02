console.log('task-2.js');
// todo Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

//todo Доповни код функції таким чином, що:

//todo Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
//todo Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message
    }
    else {
        return message.slice(0, maxLength )+ '...';
    }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

document.getElementById("task-2/1").innerHTML= formatMessage("Curabitur ligula sapien", 16);
document.getElementById("task-2/2").innerHTML= formatMessage("Curabitur ligula sapien", 23);
document.getElementById("task-2/3").innerHTML= formatMessage("Vestibulum facilisis purus nec", 20);
document.getElementById("task-2/4").innerHTML= formatMessage("Vestibulum facilisis purus nec", 30);
document.getElementById("task-2/5").innerHTML= formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
document.getElementById("task-2/6").innerHTML= formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);