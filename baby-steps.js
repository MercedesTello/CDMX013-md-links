let total = 0
process.argv.slice(2).forEach(arg =>{
total+=Number(arg)
})
console.log(total)
