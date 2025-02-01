import express from 'express';
import connectDb from './DB/cric.db.js';
import router from './Routes/cric.routes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use('/',router);
app.listen(3000,() => {
    console.log("Server is Listening");
});
connectDb();