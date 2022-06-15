import 'dotenv/config';
import app from './app.js';
import { conectarAoDatabase } from './database/index.js';

const port = process.env.PORT || 5000;

app.listen(port, () => {
  conectarAoDatabase();
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
