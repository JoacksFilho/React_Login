import axios from 'axios';
import { Token } from 'typescript';

const api = axios.create({
    baseURL: 'http://localhost:5107'
});

export const useApi = () => ({
    validateToken:async (token:string) => {
        //    return{
        //     user: {name: 'Joacks', password: "123456", phone: '9999-9999'},
            
        // };
        const response = await api.post('/validate', {token});
        return response.data;
        
    },
    signin:async (name:string, token: string, phone: string) => {
        const response = await api.post('/teste', {name, token, phone}); 
        // return{
        //     user: {name: 'Joacks', password: "123456", phone: '9999-9999'},
        //     token: '12'
        // };
        return response.data;   
    },

    logout:async () => {
        return {status: true};
        const response = await api.post('/logout');
        return response.data;
        
    }
});