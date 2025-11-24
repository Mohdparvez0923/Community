import 'dotenv/config';
import express from 'express';
import DBConnection from './models/db.js';
import accountRouter from './routes/router.js';
import postRouter from './routes/postRouter.js';
import cors from 'cors'


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cors())
app.use('/account', accountRouter)
app.use("/post",postRouter)
DBConnection()
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

