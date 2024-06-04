import express from 'express';
import Pool from 'pg';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';

const app = express();
const port = parseInt(process.env.REACT_APP_PG_PORT || '5432');

app.use(bodyParser.json()); // support json encoded bodies // Middleware

const pool = new Pool.Pool({
  user: process.env.REACT_APP_PG_USER,
  host: process.env.REACT_APP_PG_HOST,
  database: process.env.REACT_APP_PG_DBNAME,
  password: process.env.REACT_APP_PG_PASSWORD,
  port: port,
});

app.get('/subscribers', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM subscribers');
    res.json(result.rows);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
