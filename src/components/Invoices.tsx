import { Link, Outlet } from 'react-router-dom';
import { PencilSquareIcon, TrashIcon } from '../ui/icons';
import { getShortDate } from '../utils/dates';
import { invoices } from '../utils/placeholder-data';

export default function Invoices() {
  return (
    <>
      <Outlet />
      <h1 className='text-2xl font-bold mb-8'>Invoices</h1>
      <table className='w-full'>
        <thead>
          <tr className='border bg-gray-300'>
            <th className='p-4 text-start'>#</th>
            <th className='p-4 text-start'>Company / Person</th>
            <th className='p-4 text-start'>Invoiced Date</th>
            <th className='p-4 text-start'>Due Date</th>
            <th className='p-4 text-center'>Amount</th>
            <th className='p-4'>Currency</th>
            <th className='p-4 text-start'>State</th>
            <th className='p-4'></th>
          </tr>
        </thead>
        <InvoiceList invoices={invoices} />
      </table>
    </>
  );
}

type Invoice = {
  invoiceId: string;
  invoicee: string;
  invoicedDate: string;
  dueDate: string;
  amount: number;
  currency: string;
  state: string;
};

function InvoiceList({ invoices }: { invoices: Invoice[] }) {
  return (
    <tbody>
      {invoices.map((invoice: Invoice) => (
        <tr key={invoice.invoiceId} className='even:bg-gray-50'>
          <td className='p-4'>{invoice.invoiceId}</td>
          <td className='p-4'>{invoice.invoicee}</td>
          <td className='p-4'>{getShortDate(invoice.invoicedDate)}</td>
          <td className='p-4'>{getShortDate(invoice.dueDate)}</td>
          <td className='p-4 text-center'>
            {invoice.amount.toLocaleString('fi-FI')}
          </td>
          <td className='p-4 text-center'>{invoice.currency}</td>
          <td className='p-4 text-start'>
            <span
              className={`py-1 px-3 text-sm rounded-md capitalize ${
                invoice.state === 'pending'
                  ? 'bg-purple-100 text-purple-600'
                  : invoice.state === 'paid'
                  ? 'bg-green-100 text-green-600'
                  : invoice.state === 'unpaid'
                  ? 'bg-red-100 text-red-600'
                  : ''
              }`}
            >
              {invoice.state}
            </span>
          </td>
          <td className='p-4 text-center flex'>
            <Link className='mr-2' to={`/invoices/${invoice.invoiceId}/edit`}>
              <PencilSquareIcon className='size-6 text-gray-600 hover:text-gray-500' />
            </Link>
            <button>
              <TrashIcon className='size-6 text-red-600 hover:text-red-500' />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
