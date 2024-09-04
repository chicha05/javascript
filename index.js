// 1
// function one() {
// let a = prompt('введите число')
// let b = prompt('введите число')
// let c = alert(a*b)
// console.log(c)
// }
// one()

// 2
// function two() {
//     let name = prompt('введите имя')
// let surname = prompt('введите фамилию')
// let age = prompt('введите возраст')
// let isReal = alert('Привет ' + ' ' + name + ' ' + surname + ' ' + 'с возрастом ' + age + ' лет')
// }
// two()

// 3
// function tree() {
// let gen= prompt('введите ваш пол(M, F)')
// if(gen== 'm' || gen== 'M') {
//     alert('Ваш пол мужской')
// }
// else if(gen== 'f' || gen== 'F') {
//     alert('Ваш пол женский')
// }
// else{
//     alert('Ваш пол не определен')
// } 
// }
// tree()

// 4
// function four(day) {
//     switch(day) {
//         case 1 : 
//             return 'понедельник'
           
//         case 2 : 
//             return 'вторник';
            
//         case 3 : 
//             return 'среда';
            
//         case 4 : 
//             return 'четверг';
            
//         case 5 : 
//         return 'пятница';
          
//         case 6 : 
//         return 'суббота';
           
//         case 7 : 
//         return'воскресенье';
            
//         default: 
//         return'некорректно'
       
//     }
// }
// let day = Number(prompt('введите число от 1 до 7'))
// alert(four(day))

// 5

// function five(age) {
//     let status = "ребенок";
//     if (age >= 1 && age < 18) {
//         status = " ребенок";
//     } else if (age > 17 && age < 31) {
//         status = " молодой";
//     } else if (age > 30 && age < 56) {
//         status = " зрелый";
//     } else {
//         status = " старый";
//     }
  
//     document.write(age + '-' + status);

//   }
//      for (let index = 1; index < 101; index++) {
//     five(index);
//  }

// 6
// function five(age) {
//     let status = "ребенок";
//     if (age >= 1 && age < 18) {
//         status = " ребенок";
//     } else if (age > 17 && age < 31) {
//         status = " молодой";
//     } else if (age > 30 && age < 56) {
//         status = " зрелый";
//     } else {
//         status = " старый";
//     }
//     return status
// }
//     for (let index = 1; index < 101; index++) {
//         five(index);
// }

// function six(name, age){
//     return name+ ' ' + 'имеет возраст ' + age + ' ' + 'и он' + five(age)
// }    
//     let name = prompt('введите имя')
//     let age = prompt('введите возраст')
//     alert(six(name, age))

// 7 в index.html

// 8
// function fillInput() {
//     document.getElementById("emailInput").value = "test@email.ru";
// }

// 9
// function checkInput() {
//     const userInput = document.getElementById("userInput").value;
//     if (userInput.trim() === "") {
//         alert("Вы ничего не ввели в поле");
//     } else {
//         alert("Вы ввели '" + userInput + "'");
//     }
// }

// 10
// function disableInput() {
//     document.getElementById("userInput").disabled = true;
// }

// function enableInput() {
//     document.getElementById("userInput").disabled = false;
// }

// 11
// function toggleSquare() {
//     const square = document.getElementById("square");
//     const button = document.getElementById("toggleButton");
//     if (square.style.display === "none") {
//         square.style.display = "block";
//         button.innerText = "Скрыть квадрат";
//     } else {
//         square.style.display = "none";
//         button.innerText = "Показать квадрат";
//     }
// }

// 12
// const square = document.getElementById("mySquare");

//   square.addEventListener("mouseover", function() {
//     square.style.backgroundColor = "green";
//   });

//   square.addEventListener("mouseout", function() {
//     square.style.backgroundColor = "red";
//   });
