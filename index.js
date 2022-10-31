let path = require('path');

//validar si el archivo que recibo si existe ese archivo

let fileInput = (file) => {
  let ext = (path.extname(file));
  console.log(ext);

  if (ext === '.md') {
    console.log('si es la extensión ', ext);
  } else {
    console.log('no es md ', ext);
  }
}
const mdLinks = (ruta) => {
  //evaluar si es absoluta o no la ruta
  let rutaConvertida

  if (path.isAbsolute(ruta)) {
    rutaConvertida = ruta
  } else {
    rutaConvertida = path.resolve(ruta)
  }
  console.log(rutaConvertida)
  let ext = (path.extname(rutaConvertida));
  console.log(ext);

  if (ext === '.md') {
    console.log('si es la extensión ', ext);
  } else {
    console.log('no es md ', ext);
  }
  //tengo un ruta absoluta
  //md o no md
}

mdLinks(process.argv[2]);
