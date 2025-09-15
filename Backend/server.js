import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { exec } from 'child_process';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  exec(`ollama chat llama2 "${message}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error ejecutando OLLAMA' });
    }
    res.json({ response: stdout.trim() });
  });
});

app.listen(3001, () => console.log('Servidor backend corriendo en http://localhost:3001'));
