import axios from 'axios'

export function getMovie(params) {
    return axios({
        method: 'get',
        url: '/test/getMovie',
        params,
        timeout: 2000,
        //responseType: 'stream'
      })
        .then(function (response) {
            console.log(response);  
            return response;
        })
        .catch(function (error){ 
            console.log(error);
        });

  }