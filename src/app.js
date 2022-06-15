import objetivoRouter from './routes/objetivo.routes.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  return response.send('Hello World');
});

app.use('/objetivo', objetivoRouter);
// Aplicou as novas rotas

export default app;
