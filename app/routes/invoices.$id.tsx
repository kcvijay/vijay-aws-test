import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { formatDateForInput } from '../utils/dates';
import Error from '../components/Error';

interface Invoice {
  invoiceid: string;
  invoicee: string;
  invoiceddate: Date;
  duedate: Date;
  amount: number;
  currency: string;
  state: string;
}

export default function InvoiceEdit() {
  const [data, setData] = useState<Invoice>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4242/invoices/${params.invoiceid}`
        );
        if (!response.ok) {
          throw { error: 'Network response was not ok' };
        }
        const data = await response.json();
        setData(data[0]);
      } catch (err: unknown) {
        setError('Error');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className='h-full md:flex justify-center items-center'>
      <div className='p-4'>
        <h2 className='text-gray-500 mb-2'>
          <span className='font-bold mr-2'>#</span>
          {data?.invoiceid}
        </h2>
        <hr />
        <form className='mt-6'>
          <fieldset className='flex gap-2 items-center'>
            <label className='font-bold w-32' htmlFor='name'>
              Invoicee
            </label>
            <input
              className='p-2 border rounded-md w-56'
              type='text'
              name='name'
              id='name'
              defaultValue={data?.invoicee}
            />
          </fieldset>
          <fieldset className='flex gap-2 mt-4 items-center'>
            <label className='font-bold w-32' htmlFor='invoicedDate'>
              Invoiced
            </label>
            <input
              className='p-2 border rounded-md w-56'
              type='date'
              name='invoicedDate'
              id='invoicedDate'
              defaultValue={data && formatDateForInput(data?.invoiceddate)}
            />
          </fieldset>
          <fieldset className='flex gap-2 mt-4 items-center'>
            <label className='font-bold w-32' htmlFor='dueDate'>
              Due
            </label>
            <input
              className='p-2 border rounded-md w-56'
              type='date'
              name='dueDate'
              id='dueDate'
              defaultValue={data && formatDateForInput(data?.duedate)}
            />
          </fieldset>
          <fieldset className='flex gap-2 mt-4 items-center'>
            <label className='font-bold w-32' htmlFor='amount'>
              Amount
            </label>
            <div>
              <input
                className='p-2 border rounded-md w-56'
                type='number'
                name='amount'
                id='amount'
                defaultValue={data?.amount}
              />
            </div>
            <div>
              <input
                className='p-2 border rounded-md w-20'
                type='text'
                name='currency'
                id='currency'
                defaultValue={data?.currency}
              />
            </div>
          </fieldset>
          <fieldset className='flex gap-2 mt-4 items-center'>
            <label className='font-bold w-32' htmlFor='state'>
              State
            </label>
            <input
              className='p-2 border rounded-md w-56'
              type='text'
              name='state'
              id='state'
              defaultValue={data?.state}
            />
          </fieldset>
          <div className='flex gap-4 justify-between items-center mt-8'>
            <button className='py-2 px-4 bg-red-600 rounded-md text-white'>
              Delete invoice
            </button>
            <div className='flex gap-4 items-center'>
              <Link className='text-red-600' to='/invoices'>
                Cancel
              </Link>
              <button className='py-2 px-4 bg-green-100 text-green-600 rounded-md'>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
