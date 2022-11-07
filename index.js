const path = require('path');
const fs = require('fs');
const { getLinks } = require('./readFile.js');
const { linkValidate } = require('./linkValidate');


//validar si el archivo que recibo si existe ese archivo
//console.log(getLinks('./prueba.md'));

const mdLinks = (route, option) => {
  return new Promise((resolve, reject) => {

    //evaluar si es absoluta o no la ruta

    //comprobar si existe la ruta y enseguida ver la extensión
    if (fs.existsSync(route)) {
      let exist = fs.statSync(route);

      let routeNew

      if (path.isAbsolute(route)) {
        routeNew = route
      } else {
        routeNew = path.resolve(route)
      }

      if (exist.isDirectory()) {
        throw TypeError('Esto no es un archivo');
      }

      if (path.extname(routeNew) === '.md') {
        const arrLink = getLinks(routeNew)
        if (option.validate) {
          const arrResult = arrLink.map(linkValidate)
          resolve(Promise.all(arrResult))
        } else {

          resolve(arrLink);
        }
      } else {
        return 'no es md ', (path.extname(routeNew));
      }

    } else {
      reject('no existe la ruta');
    }
    //})

  })
};

/*const getLinks2 = (ruta) => {
  return new Promise((resolve, reject) => {
    resolve([
      {a: 1, b: 2},
      {a: 1, b: 2},
      {a: 1, b: 2},
    ])
  })
}


const validateLinks2 = (arrObj) => {
  return new Promise((resolve, reject) => {
    resolve([
      {validated: true},
      {validated: true},
      {validated: false},
    ])
  })
}

const mdLinks2 = (ruta) => {
  return new Promise((resolve, reject) => {
    const unaPromesaDeGetLinks = getLinks2(ruta)
    unaPromesaDeGetLinks.then(arrObj => {
      const unaPromesaDeValidateLinks = validateLinks2(arrObj)
      unaPromesaDeValidateLinks.then(arrObjValidados => {
        resolve(arrObjValidados)
      })
    })
  })
}

mdLinks(process.argv[2])//.then (console.log)*/

/*mdLinks2('ruta').then(resuelve => console.log(resuelve))*/
mdLinks(process.argv[2], { validate: true }).then(console.log)
