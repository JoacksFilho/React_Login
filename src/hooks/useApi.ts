import axios from 'axios';

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
    signin:async (Name:string, Token: string, Phone: string) => {
        const response = await api.post('/teste', {Name, Token, Phone}); 
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