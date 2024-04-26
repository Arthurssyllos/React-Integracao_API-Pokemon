import axios from "axios"; // importando biblioteca axios (caso não tenha, dê um 'npm install axios')


const URL = 'https://pokeapi.co/api/v2/pokemon' 

const api = axios.create({  

    baseURL: URL,
    timeout: 5000
});

export default api;