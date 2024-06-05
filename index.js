import dotenv from 'dotenv';
import express from 'express';
import { neon } from '@neondatabase/serverless';
import process from 'process';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4242;
app.get('/version', async (_, res) => {
  const sql = neon(`${process.env.REACT_APP_DATABASE_URL}`);
  const response = await sql`SELECT version()`;
  const { version } = response[0];
  res.json({ version });
});

// Get All Invoices
app.get('/invoices', async (_, res) => {
  const sql = neon(`${process.env.REACT_APP_DATABASE_URL}`);
  const response = await sql`SELECT * FROM invoices`;
  res.json(response);
});
app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
