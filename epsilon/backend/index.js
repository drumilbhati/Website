import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));

axios.get('/api/products', (req, res) => {
    
    const products = [
        {
            id: 1,
            name: 'Wooden table',
            price: 300
        },
        {
            id: 2,
            name: 'Carpet',
            price: 300
        },
        {
            id: 3,
            name: 'Chair',
            price: 300
        }
    ]
    
    res.send(products);
})

axios.get('https://jsonplaceholder.typicode.com/todos/1', {
    headers: {
        'Accept': 'application/json'
    }   
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);

})