const path = require('path');
const fs = require('fs');
const { getLinks } = require('./readFile.js');


//validar si el archivo que recibo si existe ese archivo
//console.log(getLinks('./prueba.md'));

const mdLinks = (route, option) => {
  return new Promise((resolve) => {

    //evaluar si es absoluta o no la ruta
    let routeNew

    if (path.isAbsolute(route)) {
      routeNew = route
    } else {
      routeNew = path.resolve(route)
    }

    //comprobar si existe la ruta y enseguida ver la extensión
    if (fs.existsSync(route)) {
      let exist = fs.statSync(route);


      if (exist.isDirectory()) {
        throw TypeError('Esto no es un archivo');
      }

      if (path.extname(routeNew) === '.md') {
        const arrLink = getLinks(routeNew)

        resolve(arrLink);
      } else {
        //console.log('no es md ', (path.extname(routeNew)));
      }

    } else {
      //console.log('no existe la ruta');

    }
  })

};

mdLinks(process.argv[2]).then (console.log)
