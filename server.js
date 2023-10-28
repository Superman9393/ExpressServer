import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
const PORT = 4545;

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(PORT,()=>console.log(`listening on port... ${PORT}`));