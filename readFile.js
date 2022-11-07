const fs = require('fs');

//TODO: JSDOC
/**
 * This function receives a file and gets the links contained
 * @param {string} archive
 * @return an array of objects containing link information
 */
function getLinks(archive) {// 
   // arrayLinks = fs.readFileSync(pathInput, 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
    //leer un archivo
    const content = fs.readFileSync(archive, 'utf-8');
    let arrayLinks = [];
    let regex = /\[(.+)\]\((https?:\/\/.+)\)/gi;

    const matches = content.match(regex) //un array de strings [texto(link)]
    

    matches.forEach((element) => {

        linkReplace = element.replace("](", "%");
        linkReplace = linkReplace.replace("[", "");
        linkReplace = linkReplace.replace(")", "");
        
        //creo aquí va la promesa
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

//(getLinks('prueba.md'));

module.exports = { getLinks }


