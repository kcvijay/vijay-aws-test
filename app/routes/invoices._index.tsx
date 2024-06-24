import { Link } from 'react-router-dom';
import { PencilSquareIcon, PlusIcon } from '../ui/icons';
import { getShortDate } from '../utils/dates';
import { getShortenedId } from '../utils/shortId';
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getAllInvoices } from '~/actions/crud';

export const loader: LoaderFunction = async () => {
  try {
    const invoices = await getAllInvoices();
    return json(invoices);
  } catch (err: unknown) {
    throw { error: 'Error' };
  }
};

export default function Invoices() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <div className='flex justify-between items-center gap-2 mb-8'>
        <h1 className='text-2xl font-bold'>Invoices</h1>
        <Link to='/invoices/new' className='flex gap-2 items-center border border-slate-200 py-2 pl-2 pr-4 rounded-md hover:bg-slate-200'>
          <PlusIcon className='size-5' />
          <span>Add</span>
        </Link>
      </div>
      <table className='w-full overflow-scroll'>
        <thead>
          <tr className='border bg-gray-300'>
            <th className='p-4 text-start w-20'>#</th>
            <th className='p-4 text-start'>Invoicee</th>
            <th className='p-4 text-start'>Invoiced Date</th>
            <th className='p-4 text-start'>Due Date</th>
            <th className='p-4 text-center'>Amount</th>
            <th className='p-4'>Currency</th>
            <th className='p-4 text-start'>State</th>
            <th className='p-4'></th>
          </tr>
        </thead>
        <InvoiceList invoices={data} />
      </table>
    </>
  );
}

type Invoice = {
  invoiceid: string;
  invoicee: string;
  invoiceddate: Date;
  duedate: Date;
  amount: number;
  currency: string;
  state: string;
};

function InvoiceList({ invoices }: { invoices: Invoice[] }) {
  return (
    <tbody>
      {invoices.map((invoice: Invoice) => (
        <tr
          key={invoice.invoiceid}
          className='even:bg-gray-50 hover:bg-sky-100'
        >
          <td className='p-4 text-gray-500'>
            {getShortenedId(invoice.invoiceid)}
          </td>
          <td className='p-4'>{invoice.invoicee}</td>
          <td className='p-4'>{getShortDate(invoice.invoiceddate)}</td>
          <td className='p-4'>{getShortDate(invoice.duedate)}</td>
          <td className='p-4 text-center'>
            {invoice.amount.toLocaleString('fi-FI')}
          </td>
          <td className='p-4 text-center'>{invoice.currency}</td>
          <td className='p-4 text-start'>
            <span
              className={`py-1 px-3 text-sm rounded-md capitalize ${
                invoice.state === 'Pending'
                  ? 'bg-purple-100 text-purple-600'
                  : invoice.state === 'Paid'
                  ? 'bg-green-100 text-green-600'
                  : invoice.state === 'Unpaid'
                  ? 'bg-red-100 text-red-600'
                  : ''
              }`}
            >
              {invoice.state}
            </span>
          </td>
          <td className='p-4 text-center flex'>
            <Link className='mr-2' to={`/invoices/${invoice.invoiceid}`}>
              <PencilSquareIcon className='size-6 text-gray-600 hover:text-gray-500' />
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export function ErrorBoundary({ error }: { error: any }) {
  return (
    <div className='p-4 bg-red-100 text-red-600'>
      <p>
        {error instanceof Error
          ? error.message
          : 'An error ocurred while loading the data.'}
      </p>
    </div>
  );
}
