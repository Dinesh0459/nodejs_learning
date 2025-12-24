const fs = require('fs')
const yargs = require('yargs')
const {title, introduction} = require('./util.js')
const {hideBin} = require('yargs/helpers')

console.log(`The title of the Book is noted as ${title}`);
console.log(introduction())
console.log("These arguments are given process.argv")
console.log(process.argv)
console.log("The arguments are given yargs.argv")
userInput = yargs(hideBin(process.argv)).parse()
console.log(userInput)
/*

JavaScript Asynchronous Patterns
1. Callback

A function passed as an argument to another function.

Called later when the async task finishes.

Oldest async pattern in JS/Node.js.

👉 Example:

fs.readFile("file.txt", (err, data) => {
  if (err) console.error("Error:", err);
  else console.log("Data:", data.toString());
});


⚠️ Problem: Callback Hell (deep nesting), hard error handling.

2. Promise

An object representing a future value (success or failure).

Has 3 states: pending → fulfilled → rejected.

Handles async tasks in a clean, chainable way.

👉 Example:

readFile("file.txt")
  .then(data => console.log("Data:", data))
  .catch(err => console.error("Error:", err));


⭐ Advantages:

Cleaner than callbacks.

Centralized error handling (.catch).

Supports parallel async (Promise.all).

3. Async / Await

Built on Promises.

Makes async code look synchronous.

Use async keyword before function.

Use await to pause until Promise resolves.

👉 Example:

async function run() {
  try {
    const data = await readFile("file.txt");
    console.log("Data:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}
run();


⭐ Advantages:

Most readable & modern way.

Easy error handling with try/catch.

Preferred in modern JavaScript.

*/

const obj = {
    1:'first',
    2:'second',
    3:'three',
    4:'four',
    5:'five'
}
fs.rm('C:\\Users\\gdine\\OneDrive\\Desktop\\nodejs\\notes_app\\notes_app.txt',{recursive:true, force:true}, (err)=>{
    if(err){
        console.log(`There is a problem deleting the file:`)}
    else{
        console.log("Deleted successfully")
        fs.writeFileSync('C:\\Users\\gdine\\OneDrive\\Desktop\\nodejs\\notes_app\\notes_app.txt', "The file is created successfully\n");

        for(let i=0;i<5;i++){
            
            fs.appendFileSync('C:\\Users\\gdine\\OneDrive\\Desktop\\nodejs\\notes_app\\notes_app.txt', `This is the ${obj[i+1]} line in the program`)
            fs.appendFileSync('C:\\Users\\gdine\\OneDrive\\Desktop\\nodejs\\notes_app\\notes_app.txt','\n')
        }
        console.log("the five line are written to the notes")
    }
    })

