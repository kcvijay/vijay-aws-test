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
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`SELECT version()`;
  const { version } = response[0];
  res.json({ version });
});

// Get All Invoices
app.get('/invoices', async (_, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`SELECT * FROM invoices`;
  res.json(response);
});
app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});

// Get Invoice by ID
app.get('/invoices/:invoiceid', async (req, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response =
    await sql`SELECT * FROM invoices WHERE invoiceid = ${req.params.invoiceid}`;
  res.json(response);
});

// Delete Invoice by ID
app.delete('/invoices/:invoiceid', async (req, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response =
    await sql`DELETE FROM invoices WHERE invoiceid = ${req.params.invoiceid}`;
  res.json(response);
});

// Update Invoice by ID
app.put('/invoices/:invoiceid', async (req, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`
    UPDATE invoices
    SET invoicee = ${req.body.name},
        invoiceddate = ${req.body.invoicedDate},
        duedate = ${req.body.dueDate},
        amount = ${req.body.amount},
        currency = ${req.body.currency},
        state = ${req.body.state}
    WHERE invoiceid = ${req.params.invoiceid}
  `;
  res.json(response);
});

// Create Invoice
app.post('/invoices', async (req, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`
    INSERT INTO invoices (invoiceid, invoicee, invoiceddate, duedate, amount, currency, state)
    VALUES (${req.body.invoiceid}, ${req.body.invoicee}, ${req.body.invoiceddate}, ${req.body.duedate}, ${req.body.amount}, ${req.body.currency}, ${req.body.state})
  `;
  res.json(response);
});
