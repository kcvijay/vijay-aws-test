import { Link } from 'react-router-dom';
import { PencilSquareIcon, XCircleIcon } from '../ui/icons';
import { getShortDate } from '../utils/dates';
import { useEffect, useState } from 'react';
import { getShortenedId } from '../utils/shortId';

export default function Invoices() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4242/invoices');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className='text-2xl font-bold mb-8'>Invoices</h1>
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

export function ErrorComponent({ error }: { error: string }) {
  return (
    <div className='size-80 mx-auto flex justify-center items-center bg-red-50'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <XCircleIcon className='size-12 text-orange-300' />
        <h2 className='text-2xl text-orange-500'>An error is ocurred.</h2>
        <p className='text-gray-500'>{error}</p>
      </div>
    </div>
  );
}
