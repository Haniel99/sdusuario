import express from "express";
import { json } from "express/lib/response";
const PORT = process.env.PORT || 3100;
const app = express();

app.use(json);

app.listen(PORT, ()=>{
    console.log(`The server is running on :${PORT}`);
})