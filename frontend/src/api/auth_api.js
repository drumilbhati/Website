import axios from 'axios';

const BASE_URL = process.env.API_URL;

export const login = async (username, password) => {
    try {
        console.log('Attempting to login...');
        const response = await axios.post(`${BASE_URL}/api/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

export const register = async (username, password) => {
    try{
        console.log('Attempting to register...');
        const response = await axios.post(`${BASE_URL}/api/register`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Register error:', error);
        throw error;
    }
}

export const adminLogin = async (username, password) => {
    try{
        console.log('Attempting to login');
        const response = await axios.post(`${BASE_URL}/api/admin-login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}