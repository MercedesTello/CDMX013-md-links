const fs= require ('fs');


const content = fs.readFileSync('README.md','utf-8')
console.log(Array.from((content.matchAll)(/\[.*\]\(.*\)/ig)));