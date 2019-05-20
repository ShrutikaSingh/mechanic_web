const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}))
const port=3000;



app.get('/',(req,res)=>res.send ('server is ready send the data'));

app.get('/form',(req,res)=>{
    res.sendFile('/Users/shrutika/Desktop/hi/Server/'+'index.html')
    });

app.post('/optionsss',(req,res)=>{
res.send(req.body);
console.log(req.body);
})

app.use((req,res,next)=>{
  const err= new Error('not found');
  err.status=404;
  next(err);

})



app.listen(port,console.log(`server listening at port :${port}`));







