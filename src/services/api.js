import axios from 'axios';
const host = 'http://localhost:4000/api';

export const setToken = (token) => async (method,path,data) => 
{
    if(token)
        {
            axios.defaults.header.common['Authorization']=`secretkey ${token}`;
         }
    else
        {
            delete axios.defaults.headers.common['Authorization'];
        }
};   


export const call = async (method,path,data) => 
{//method for get post etc
    const response=await axios[method](`${host}/${path}`,data);
    return response.data;
};


export default {setToken,call};

