// // const currentUser = 'Joshua';

// // const WelcomeMessage = `Welcome to Moringa, ${currentUser}!`;

// // console.log(WelcomeMessage)

// // // -------------------------------------------------------

// // function getName(person) {
// //     return person.occupation;
// // }

// // const person = {name: "Joshua Dev", occupation: "Developer", county: "Nairobi", height: 5.9}

// // console.log(getName(person))

// // // ------------------------------------------------------

// // function getCarDetails(car) {
// //     return [
// //         car.year, 
// //         car.color 
// //     ]
// // }

// // const car = {name: "BMW", color: "Black", engine_cap: 2000, year: 2018 }

// // console.log(getCarDetails(car))

// // const student = {name: "Jonte", room: 103, TM: "Albert", age: 22, class: "Software Engineer"}

// // console.log(student.name)
// // console.log(student.age)

// // console.log(typeof 4.5)

// // let debt = 50;

// // debt = debt - 30;

// // console.log(debt)

// // // function isRose(cat) {
// // //     if(cat === 'rose') {
// // //         return 'Hi Rose you are cute'
// // //     } else if (typeof cat === 'string'){
// // //         return `Hi ${cat}`
// // //     } else {
// // //         return 'Sorry, kindly pass in a cat name'
// // //     }
// // // }
// // // console.log(isRose(45))

// // // function isRose(cat) {
// // //     return cat === 'Rose'? 'Hi Rose you are cute' : `Hi ${cat}`
// // // }

// // // console.log(isRose("Rose"))

// // const numbers = [10, 20, 30, 40];
// // let number = numbers.filter(num => num > 24);
// // console.log(number)

// // const product = [
// //     {name: "Laptop", price: 500},
// //     {name: "Headphones", price: 600},
// //     {name: "Tablet", price: 700},
// //     {name: "Bluetooth", price: 500}
// // ]

// // let affordablePrice = product.filter(item => item.price <= 500)

// // console.log(affordablePrice)

// // // ---------------------

// // const newNumbers = [45, 86, 77, 90, 30, 11];

// // let sum = newNumbers.reduce((total, num) => total + num, 0);

// // console.log(sum)

// // function isRose(cat) {
// //     switch(cat) {
// //         case 'rose':
// //             return 'Hi rose you are cute'
// //         case 'ted' : 
// //             return 'Hi ted nice to see you'
// //         default :
// //             return `Hi ${cat}`
// //     } 
// // }

// // console.log(isRose('Rex'))

// // const age = 17;

// // let isAdult, canWork, canEnlist, canDrink;

// // if (age => 16) {
// //     canWork = true;

// //     if (age => 18) {
// //         isAdult = true;
// //         canEnlist = true;

// //         if (age => 21) {
// //             canDrink = true;
// //         }
// //     }
// // }

// // console.log(isAdult, canWork, canEnlist, canDrink)

// // const num = !1 || !0;

// // console.log(num)

// // function sayHi(){
// //     console.log('Hello World')
// // }
// // sayHi()

// // const hiJosh = function(){
// //     console.log('Hello Josh')
// // }

// // hiJosh()

// // const doMath = function (num1, num2) {
// //     console.log(num1 * num2)
// // }

// // doMath(3, 4)

// // function exerciseDog(dogName="Error the Broken Dog", dogBreed="Sick Puppy") {
    
// //     console.log(`Wake ${dogName} the ${dogBreed}`);
// //     console.log(`Leash ${dogName} the ${dogBreed}`);
// //     console.log(`walk to the park ${dogName} the ${dogBreed}`);
// //     console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
// //     console.log(`walk home with ${dogName} the ${dogBreed}`);
// //     console.log(`Unleash ${dogName} the ${dogBreed}`)
// // }

// // exerciseDog()
// // exerciseDog("Jojo", "mutt")
// // exerciseDog("Boo", "puggle")
// // exerciseDog("Emmeline", "bernedoodle")

// // const weatherToday = "Rainy";

// // function exerciseDog(dogName, dogBreed){
// //     if (weatherToday === "Rainy") {
// //         return `${dogName} did not exercise due to rain`;
// //     }

// //     console.log(`Wake ${dogName} the ${dogBreed}`);
// //     console.log(`Leash ${dogName} the ${dogBreed}`);
// //     console.log(`walk to the park ${dogName} the ${dogBreed}`);
// //     return `${dogName} is happy and tired!`;
// // }

// // const result = exerciseDog("Byron", "poodle");
// // console.log(result);

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the squareroot of " + (theNumber * theNumber));
// }

// Arrays ------------------------------------

// let person = {
//     name: 'Titus',
//     gender: 'Male',
//     address: {
//         zipCode: 00100,
//         city: 'Nairobi'
//     },
    
//     friends: ['Jackline', 'Omar', 'Brian', 'Doreen'],
    
//     greet: function () {
//         console.log("Hello Titus")
//     }
// }

// console.log(person.name);
// console.log(person.address.city);
// console.log(person.friends[2]);
// person.greet()

// const superHeroes = ["Catwoman", "Storm", "Jessica Jones"]

// superHeroes.push("Wonder Woman")

// console.log(superHeroes)

// const coolCities = ["New York", "San Francisco"];

// const copyOfCoolCities = [...coolCities]

// console.log(copyOfCoolCities)

// const cards = [
//     "Ace of Spades",
//     "Jack of Clubs",
//     "Nine of Clubs",
//     "Nine of Diamonds",
//     "Three of Hearts",
// ];

// cards.splice(2, 0, "Ace of Clubs", "Trade of Tycoons")

// console.log(cards)

// const menu = [
//     "Jalapeno Poppers",
//     "Cheeseburger",
//     "Fish and chips",
//     "French Fries",
//     "Onion Rings",
// ];

// const newMenu = [
//     ...menu.slice(0, 1),
//     "Veggie Burger",
//     "House Salad",
//     "Teriyaki Tofu",
//     ...menu.slice(3),
// ]

// console.log(menu)
// console.log(newMenu)

// for loops ------------------------------

// let books = ['Eloquent JavaScript', 'JavaScript: The Good Parts', 'Learn JavaScript Visually', 'You don\'t know js', 'JavaScript: The difinitive Guide']

// let oneBook = {
//     title: 'Eloquent JavaScript',
//     author: 'Marjin Havabeke',
//     publisher: 'No Starch Press',
// }

// function loopThroughBooks(books) {
//     for(let i = 0; i < books.length; i++){
//         console.log(books[i]);
//     }
// }

// loopThroughBooks(books)

// function loopThroughObj(obj){
//     for(let key in obj) {
//         console.log(key)
//         console.log(obj[key])
//     }
        
// }

// loopThroughObj(oneBook)

// const gifts = ["teddy bear", "drone", "doll"]

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`wraped ${gifts} and added a bow`)
//         debugger;
//     }
//     return gifts
// }

// wrapGifts(gifts)

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
//     debugger;
// }

// const cards = ["Josh", "Erasmus", "Jiancla"]

// function writeCards(names, event) {

//     const messages = [];

//     for(let i = 0; i <names.length; i++) {
//         const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
//         debugger

//         messages.push(message)
//     }

//     return messages
// }

// console.log(writeCards(["Josh", "Erasmus", "Macline"], "birthday"))

// let countup = 0;

// while (countup < 10) {
//     console.log(countup++);

// }

// let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }

// for (const element of myArray) {
//     console.log(element)
// }

// for (const char of 'Hello, World') {
//     console.log(char)
// }

// const address = {
//     street1: '11 Broadway',
//     street2: '2nd Floor',
//     city: 'New York',
//     state: 'NY',
//     zipcode: '10004',
// }

// for (const key in address) {
//     console.log(address[key])
// }

// const userInfo = {
//   firstName: "Avi",
//   lastName: "Flombaum",
//   company: {
//     name: "Flatbook Labs",
//     jobTitle: "Developer Apprentice",
//   },
//   friends: [
//     {
//       firstName: "Nancy",
//       lastName: "Burgess",
//       company: {
//         name: "Flatbook Labs",
//         jobTitle: "Developer Apprentice",
//       },
//     },
//     {
//       firstName: "Corinna",
//       lastName: "Jackson",
//       company: {
//         name: "Flatbook Labs",
//         jobTitle: "Lead Developer",
//       },
//     },
//   ],
//   projects: [
//     {
//       title: "Flatbook",
//       description:
//         "The premier Flatiron School-based social network in the world.",
//     },
//     {
//       title: "Scuber",
//       description:
//         "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
//     },
//   ],
// };

// console.log(userInfo.friends[1].lastName)

// const userInfo = {
//   firstName: "Avi",
//   lastName: "Flombaum",
//   companyName: "Flatbook Labs",
//   jobTitle: "Developer Apprentice",
//   friend1firstName: "Nancy",
//   friend1lastName: "Burgess",
//   friend1companyName: "Flatbook Labs",
//   friend1jobTitle: "Developer Apprentice",
//   friend2firstName: "Corinna",
//   friend2lastName: "Jackson",
//   friend2companyName: "Flatbook Labs",
//   friend2jobTitle: "Senior Developer",
//   project1title: "Flatbook",
//   project1description:
//     "The premier Flatiron School-based social network in the world.",
//   project2title: "Scuber",
//   project2description:
//     "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
// };

// const primes = [2, 3, 5, 7, 11]

// function shallowIterator(target) {
//     for (const key in target) {
//         console.log(target[key])
//     }
// }

// shallowIterator(userInfo)
// shallowIterator(primes)

// const numbers = [1, [2, [4, [5, [6]], 3]]];

// function deepIterator(target) {
//     if (typeof target === "object") {
//         for (const key in target) {
//             deepIterator(target[key])
//         }
//     } else {
//         console.log(target)
//     }
// }

// deepIterator(numbers)

// const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades']

// console.log(cards.indexOf('ace of spades', 2))

// function isOdd(element, index, array) {
//     return (element % 2 === 1)
// }

// console.log([4, 6, 8, 10].find(isOdd))

// const users = [
//   {
//     firstName: "Niky",
//     lastName: "Morgan",
//     favoriteColor: "Blue",
//     favoriteAnimal: "Jaguar",
//     personalQuote: "You're never too old to learn something new",
//   },
//   {
//     firstName: "Tracy",
//     lastName: "Lum",
//     favoriteColor: "Yellow",
//     favoriteAnimal: "Penguin",
//     personalQuote: "I just got lost in thought - it was unfamiliar territory",
//   },
//   {
//     firstName: "Josh",
//     lastName: "Rowley",
//     favoriteColor: "Blue",
//     favoriteAnimal: "Penguin",
//     personalQuote: "Always remember you’re unique, just like everyone else",
//   },
//   {
//     firstName: "Kate",
//     lastName: "Travers",
//     favoriteColor: "Red",
//     favoriteAnimal: "Jaguar",
//     personalQuote: "Behind every great man is a woman rolling her eyes",
//   },
//   {
//     firstName: "Avidor",
//     lastName: "Turkewitz",
//     favoriteColor: "Blue",
//     favoriteAnimal: "Penguin",
//     personalQuote:
//       "You don’t have to see the whole staircase, just take the first step",
//   },
//   {
//     firstName: "Drew",
//     lastName: "Price",
//     favoriteColor: "Yellow",
//     favoriteAnimal: "Elephant",
//     personalQuote:
//       "Failure is not the opposite of success: it’s part of success",
//   },
// ];

// function firstNamePrinter(collection) {
//     for (const user of collection) {
//         if (user.favoriteColor )
//         console.log(user.firstName)
//     }
// }

// // firstNamePrinter(users)

// function blueFilter(collection) {
//     for (const user of collection) {
//         if (user.favoriteColor === "Blue") {
//             console.log(user.firstName)
//         }
//     }
// }

// // blueFilter(users)

// function colorFilter(collection, color) {
//     for (const user of collection) {
//         if (user.favoriteColor === color) {
//             console.log(user.firstName)
//         }
//     }
// }

// colorFilter(users, "Red")

// function filter(collection, cb) {
//     for (const user of collection) {
//         if (cb(user)) {
//             console.log(user.firstName)
//         }
//     }
// }

// filter(users, function (user) {
//     return user.favoriteColor === "Yellow"
// })

// function map(array, callback) {
//     const newArr = []

//     for (const element of array) {
//         newArr.push(callback(element))
//     }
//     return newArr;
// }

// const originalNumbers = [1, 2, 3, 4, 5];

// const squaredNumbers = map(originalNumbers, function (num) {
//     return num * num;
// })

// console.log(originalNumbers)
// console.log(squaredNumbers)

// const oldAccounts = [
//   { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
//   { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
//   { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
//   { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
//   { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
// ];

// const newEngineers = map(oldAccounts, function(account) {
//     return Object.assign({}, account, {accessLevel: "admin"})
// })

// console.log(oldAccounts)
// console.log(newEngineers)

// const userIDs = map(newEngineers, function (eng) {
//     return eng.userID
// })

// console.log(userIDs)

// const skiSchool = ["aki", "Santa", "lei", "aalam"]

// const rollCall = skiSchool.map((student) => student + " the skier")

// console.log(rollCall)

// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];

// const activateRobots = robots.map((robot) => {
//     return Object.assign({}, robot, {
//         modes: robot.modes * 2,
//         isActivated: true,
//     })
// })

// console.log(activateRobots)


// Map method ------------------------------------

// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// const titleCased = () => {
//   return tutorials.map(setenceCased => {
//     return setenceCased
//       .split(" ")
//       .map(word => word[0].toUpperCase() + word.slice(1))
//       .join(" ")
//   })
// }

// console.log(titleCased())

// forEach ---------------------------

// oppressedWorkers = [
//     "Dopey",
//     "Sneezy",
//     "Happy",
//     "Angry",
//     "Doc",
//     "Lemonjello",
//     "Sleepy",
// ]

// oppressedWorkers.forEach(function (oppressedWorkers) {
//     console.log(`${oppressedWorkers} wants to form a union!`)
// })

// const phrases = {
//     greeting: "Hello there!",
//     time: () => {
//         const currentTime = new Date()
//         return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`
//     }
// }

// console.log(phrases.greeting)
// console.log(phrases.time())

// function PhraseObjectConstructor(name) {
//     this.greeting = `Hello there ${name}!`
//     this.time = () => {
//         const currentTime = new Date()
//         return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`
//     }
// }

// const phrases = new PhraseObjectConstructor("Josh")
// console.log(phrases.greeting)
// console.log(phrases.time())

// function customGreeting(greeting, name, adjective, occassion) {
//     return `${greeting}, ${name}! Have a ${adjective} ${occassion}`
// }

// console.log(customGreeting("Good, morning", "Pouja", "fantastic", "Tuesday"))

// Form event
// document.querySelector('form').
//     addEventListener('mouseover', (e) => console.log('Hello Josh'))

// // Alert Button
// document.querySelector('#alert').addEventListener
//     ('click', () => alert('Hello, I was Clicked!'))

// // Logging in
// document.querySelector('#log').addEventListener
//     ('click', () => console.log('I\'ve been logged'))

// // Delete handler
// function handleDelete(e) {
//     e.target.parentNode.remove()
// }
//     // Grabs button and deletes parent node
// function addEventListenerToDeleteButtons() {
//     let buttons = document.getElementsByClassName
//     ('delete-btn')
//     for (let btn of buttons) {
//         btn.addEventListener('click', handleDelete)
//     }
// }

// addEventListenerToDeleteButtons()

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        handleInput(e.target.newInput.value)
        form.reset()
    })
})

function handleInput(input) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    p.textContent = `${input} `
    btn.textContent = 'x'
    p.appendChild(btn)
    console.log(p)
    document.querySelector('#container').appendChild(p)
}

function handleDelete(e) {
    e.target.parentNode.remove()
}