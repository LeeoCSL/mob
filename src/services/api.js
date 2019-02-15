// import axios from 'axios';

// const api = axios.create({
//     baseUrl: 'http://192.168.15.18:3000/api/v1/estacao'
// });

// export default api;

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.18:3000/api/v1'
})

export default api;