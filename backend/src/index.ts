import 'express-async-errors';
import express, { request, response } from 'express';
import { globalErrors } from './middlewares/globalErrors';
import routes from './routes';
import {createConnection } from 'typeorm';

createConnection().then(connection => {

  const app = express();
  const PORT = 3333;

  app.use(express.json())
  app.use(routes)
  app.use(globalErrors)

  app.listen(3333, () => {
    console.log('Back-end started in 3333 port!');});

}).catch((error)=> {
  console.log("falha na conexão com database", error)
});