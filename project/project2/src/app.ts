

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';

const app: Express = express();
config({path: '.env'});
const port: number = parseInt(process.env.PORT || '3000');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import router from './Routes/indexRoute.js';

app.use('/', router);

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
