let express=require("express")
let app=express()
app.use(express.json())

app.get("/user",(req,res)=>{
    res.send("hi node js")
    res.end()
})
app.listen(3001, ()=>{
    console.log("server running on 3002")
})