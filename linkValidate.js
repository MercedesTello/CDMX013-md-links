const axios = require('axios');
//trabajar la validación de un sólo link
const linkValidate= (link) =>{
    //console.log(link);

    return axios.get(link.href)
  .then(function (response) {
    //tengo que formar el objeto con href
    return {status: response.status, message: response.statusText, ...link}//buscar
    
    //console.log(response.status);
  })
  .catch(function (error) {
    // handle error
   // return {status: error.status, ...link}
   return {status: 'fail', ...link} //fail es el mensaje que se le dio a los códigos erróneos
    //console.log(error);
  })

}

module.exports= { linkValidate }