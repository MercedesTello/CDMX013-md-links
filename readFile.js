const fs = require('fs');

//TODO: JSDOC
/**
 * This function receives a file and gets the links contained
 * @param {string} archive
 * @return an array of objects containing link information
 */
function getLinks(archive) {// 
    //leer un archivo
    const content = fs.readFileSync(archive, 'utf-8');
    let arrayLinks = [];
    let regex = /\[.*\]\(.*\)/ig;

    const matches = content.match(regex) //un array de strings [texto(link)]

    matches.forEach((element) => {
        /* let regexText = element.match(/\[.*\]/ig);
         let regexHref = element.match(/\(.*\)/ig);*/

        linkReplace = element.replace("](", "%");
        linkReplace = linkReplace.replace("[", "");
        linkReplace = linkReplace.replace(")", "");
        //console.log(linkReplace);

        let limit = linkReplace.indexOf("%");
        let object = {
            href: linkReplace.slice(limit + 1),
            text: linkReplace.slice(0, limit).slice(0, 49),//recorta el texto a 50 caracteres
            file: archive,
        };
        arrayLinks.push(object);
    

    });
    return arrayLinks;
}

getLinks('prueba.md');

module.exports = { getLinks }


