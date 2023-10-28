import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
const PORT = 4545;

app.listen(PORT,()=>console.log(`listening on port... ${PORT}`));