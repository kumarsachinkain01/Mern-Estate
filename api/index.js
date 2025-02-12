import express from 'express';

const app = express();

app.use(express.json());

app.listen(9090, ()=>{
    console.log('Server is running on port 9090 !!!!')
})

