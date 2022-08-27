import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dapper-bublanina-217977.netlify.app',
})