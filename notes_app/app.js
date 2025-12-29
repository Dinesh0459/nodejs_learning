const fs = require(`fs`)
const yargs = require(`yargs`)
const process = require(`process`)

const { hideBin } = require(`yargs/helpers`)

function taking_user_input(){
  // Difference between process and yargs 
  // This is simple process arguement vector which treats everything as string but yargs after takes this cli command 
  // treats it as js object 

  /*console.log(process.argv)
  var command = process.argv[2]
  console.log(`This is a new process ${command}`)

  // How the yargs helper function is useful: hidebin
  const argument = yargs(hideBin(process.argv)).argv
  console.log(argument)*/

  yargs(hideBin(process.argv))
    .command({
      command: `add`,
      describe: `adding a new note`,
      builder:(yargs) => {
        return yargs.options(`note`,{
          type: `string`,
          demandOption: true,
          describe:`adding a new note`
        })
      },
      handler: (argv)=>{
        fs.appendFileSync(`C:\\Users\\gdine\\OneDrive\\Desktop\\nodejs\\notes_app\\notes_app.txt`, argv.note)
        console.log(`note successfully added`)
        }
    })
    .command({
      command:`empty`,
      describe:`emptying notebook`,
      builder: ()=>{},
      handler: (argv)=>{
        fs.writeFileSync(`C:\\Users\\gdine\\OneDrive\\Desktop\\nodejs\\notes_app\\notes_app.txt`,``)
      }
    })
    .command({
      command:`print`,
      describe:`print the entire notebook`,
      builder:()=>{},
      handler:(argv)=>{
        const data = fs.readFileSync(`C:\\Users\\gdine\\OneDrive\\Desktop\\nodejs\\notes_app\\notes_app.txt`,`utf-8`)
        console.log(data)
    }
  })
    .parse()
      
}
taking_user_input()