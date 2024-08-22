console.log('task-3.js');
//todo Функція    checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.



//todo Доповни код функції таким чином, що:

//todo Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
//todo Якщо в рядку відсутні заборонені слова, функція повертає буль false


function checkForSpam(message) {
    if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
        return true;
        
    }   
    else {
        return false;
    }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

document.getElementById("task-3/1").innerHTML= formatMessage("Latest technology news"); // false
document.getElementById("task-3/2").innerHTML= formatMessage("JavaScript weekly newsletter"); // false
document.getElementById("task-3/3").innerHTML= formatMessage("Get best sale offers now!"); // true
document.getElementById("task-3/4").innerHTML= formatMessage("Amazing SalE, only tonight!"); // true
document.getElementById("task-3/5").innerHTML= formatMessage("Trust me, this is not a spam message"); // true
document.getElementById("task-3/6").innerHTML= formatMessage("Get rid of sPaM emails. Our book in on sale!"); // true
document.getElementById("task-3/7").innerHTML= formatMessage("[SPAM] How to earn fast money?"); // true
