import { Link } from 'react-router-dom';
import { formatDateForInput } from '../utils/dates';
import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  redirect,
} from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { getInvoice, updateInvoice } from '~/actions/crud';

export async function loader({ params }: LoaderFunctionArgs) {
  try {
    const invoice = await getInvoice(params.id!);
    return { data: invoice[0] };
  } catch (err: unknown) {
    throw { error: 'Error' };
  }
}

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const invoice = {
    invoicee: formData.get('invoicee') as string,
    invoiceddate: new Date(formData.get('invoicedDate') as string),
    duedate: new Date(formData.get('dueDate') as string),
    amount: Number(formData.get('amount')),
    currency: formData.get('currency') as string,
    state: formData.get('state') as string,
  };

  try {
    await updateInvoice(params.id as string, invoice);
    return redirect('/invoices');
  } catch (error: unknown) {
    return json({ error: 'Failed to update the invoice' }, { status: 500 });
  }
};

export default function InvoiceEdit() {
  const { data } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div className='h-full md:flex justify-center items-center'>
      <div className='p-4'>
        <h2 className='text-gray-500 mb-2'>
          <span className='font-bold mr-2'>#</span>
          {data?.invoiceid}
        </h2>
        <hr />
        <Form method='post' className='mt-6' reloadDocument>
          <fieldset className='flex gap-2 items-center'>
            <label className='font-bold w-32' htmlFor='invoicee'>
              Invoicee
            </label>
            <input
              className='p-2 border rounded-md w-56'
              type='text'
              name='invoicee'
              id='invoicee'
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
                step='0.01'
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
              <button
                type='submit'
                className='py-2 px-4 bg-green-100 text-green-600 rounded-md'
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
