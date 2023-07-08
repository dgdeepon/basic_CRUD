const express=require('express');
const cors=require('cors');
const db = require('./config/db');
const user = require('./routes/user.route');
const app=express();


app.use(cors())
app.use(express.json())


// route
app.use('/user',user);





app.listen(8080,async()=>{
    try {
        await db;
        console.log('Database is connected.');
    } catch (error) {
        console.log('failed to connect the Db.')
    }
    console.log('server port is 8080');
})