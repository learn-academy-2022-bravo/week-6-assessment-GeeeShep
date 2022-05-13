// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// describe("coolPeeps", () => {
//   it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
//     const people = [
//       { name: "ford prefect", occupation: "a hitchhiker" },
//       { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//       { name: "arthur dent", occupation: "a radio employee" }
//     ]
//     expect(coolPeeps(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy", "Arthur Dent is a radio employee"])
//   })
// })
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



// ● coolPeeps › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

// ReferenceError: coolPeeps is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.174 s
// b) Create the function that makes the test pass.

//use filter to get an array of first and last name
// ****PSEUDO CODE
// create a function 
// input is array of strings
// need to create a method that will give me just the strings...split(?)
// use another function to capitalize the first letters 
// need to join the strings for name/occupation output




// const coolPeeps  = (array) => {
//   return array.map((value) => {
//     let splitArr = value.name.split(' ')
//     let name = splitArr[0][0].toUpperCase() + splitArr[0].substring(1) + " "
//     + splitArr[1][0].toUpperCase() + splitArr[1].substring(1)
//     return `${name} is ${value.occupation}`
//   })
// }

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Expected output: [ 2, 0, -1, 0 ]

// Expected output: [ 2, 1, -1 ]

// describe("daWhat", () => {
//   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
//    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//       expect(daWhat(hodgepodge1)).toEqual([2, 0, -1, 0])
//       expect(daWhat(hodgepodge2)).toEqual([2, 1, -1])
//    })
// })

// ● daWhat › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ReferenceError: daWhat is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.15 s
// // // // b) Create the function that makes the test pass.

// ****PSEUDO CODE
// create a function with array as param
// input is array of numbers and strings
// need to create a method that will filter out the numbers 
// return an array of numbers
// return using .map to go thru the array and divide by 3 to get remaining numbers

// 
//   daWhat = (array) => {
//    let numArry = array.filter(value => {
//      return typeof value === 'number'
//     })
//   return  numArry.map(value => value % 3)
//     }
    
//    

//  console.log(daWhat(hodgepodge1))





// // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// // a) Create a test with an expect statement using the variables provided.

// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125

describe("thriceNums", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
   const cubeAndSum1 = [2, 3, 4]
   const cubeAndSum2 = [0, 5, 10]
      expect(thriceNums(cubeAndSum1)).toEqual(99)
      expect(thriceNums(cubeAndSum2)).toEqual(1125)
   })
})

// ● thriceNums › takes in an array of numbers and returns the sum of all the numbers cubed

// ReferenceError: thriceNums is not defined
// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 total
// Snapshots:   0 total
// Time:        0.176 s, estimated 1 s
// b) Create the function that makes the test pass.

// ****PSEUDO CODE
// create a function thriceNums
// input is array of numbers 
// need to create a method that will give me the value of numbers cubed
// using .map will give me a new array with the same length of cubed numbers
// use a method that will give the sum of the cube numbers
// 



const thriceNums = (array) => {
   let cubeArry = array.map(value => value ** 3)
   return cubeArry.reduce((a, b) => a + b)
}
  // console.log(thriceNums(cubeAndSum1))


