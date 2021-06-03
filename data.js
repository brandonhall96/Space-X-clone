// the purpose of this file is to 
const axios = require('axios');

axios.get('https://api.spacexdata.com/v4/roadster')
.then(res => {
    console.log(res.data)
})