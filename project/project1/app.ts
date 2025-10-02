import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors';

// dotenv.config({path: '.env'});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log(`Server is running on : http://localhost:${3000}`);
});