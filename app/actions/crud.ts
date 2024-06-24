import { neon } from '@neondatabase/serverless';

type Invoice = {
  invoicee: string;
  invoiceddate: Date;
  duedate: Date;
  amount: number;
  currency: string;
  state: string;
};

export async function getAllInvoices() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`SELECT * FROM invoices`;
  return response;
}

export async function getInvoice(id: string) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`SELECT * FROM invoices WHERE invoiceid = ${id}`;
  return response;
}

export async function updateInvoice(id: string, invoice: Invoice) {
  const { invoicee, invoiceddate, duedate, amount, currency, state } = invoice;
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`
    UPDATE invoices
    SET invoicee = ${invoicee},
        invoiceddate = ${invoiceddate},
        duedate = ${duedate},
        amount = ${amount},
        currency = ${currency},
        state = ${state}
    WHERE invoiceid = ${id}
  `;
  return response;
}

export async function deleteInvoice(id: string) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`DELETE FROM invoices WHERE invoiceid = ${id}`;
  return response;
}
