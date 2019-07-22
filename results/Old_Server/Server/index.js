require('dotenv').config();

const express=require('express');
const bodyParser=require('body-parser');

const app=express();
//const port=8976;
const port=process.env.PORT;

app.use(bodyParser.urlencoded({extended:true}))

const db=require('./src/models');
//const handle=require('./handlers');
const handle=require('./src/handlers');
const routes=require('./src/routes/index.js');


app.get('/',(req,res)=>res.send ('server is ready send the data'));
//listing to form of index.html
app.get('/form',(req,res)=>{
    res.sendFile('/Users/shrutika/Desktop/jack_my_motor/Server/'+'index.html')
    });
//displaying the output of form 
app.post('/optionsss',(req,res)=>{
res.send(req.body);
console.log(req.body);
});

app.use('/api/auth',routes.auth);

app.use(handle.notFound);  
/*promise1.then(async()=>{
    app.listen(port,()=>
        console.log(`listening at ${port}`),
    );
});
*/

//app.use(handle.notFound);
//app.use(handle.errors);
app.listen(process.env.PORT || 3000 ,console.log(`server listening at port :${port}`));







