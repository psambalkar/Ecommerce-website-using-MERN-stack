const express= require("express" )
const app=express()
const port=8000;
app.get('/',(req,res)=>{
    return res.send("Hello there");});
const admin=(req,res)=>{
        return res.send("this is admin dashborad");
    }
const isAdmin=(req,res,next)=>{console.log("is Admin RUnning");
next();
};
app.get('/admin',isAdmin,admin);
app.get('/signup',(req,res)=>{
    return res.send("Hello there signup");});
app.listen(port,()=>(console.log("server is up and running...")))
// const port = 3000
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`
// ))
