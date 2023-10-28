import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
const PORT = 4545;

app.get("/",(req,res)=>{
    res.send(`welcome to the server ${req.headers.host}`)
})
app.listen(PORT,()=>console.log(`listening on port... ${PORT}`));