import { Form, Link } from '@remix-run/react';

export default function AddNewInvoice() {
  return (
    <div>
      <section className='w-full h-full grid place-items-center'>
        <h2 className='mb-2 font-bold text-2xl'>New Invoice</h2>
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
              placeholder='Company Oy'
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
                placeholder='0.00'
                step='0.01'
              />
            </div>
            <div>
              <select
                name='currency'
                id='currency'
                className='p-2 border rounded-md w-20'
                defaultValue='eur'
              >
                <option value='eur'>EUR</option>
                <option value='gbp'>GBP</option>
                <option value='usd'>USD</option>
              </select>
            </div>
          </fieldset>
          <fieldset className='flex gap-2 mt-4 items-center'>
            <label className='font-bold w-32' htmlFor='state'>
              State
            </label>
            <select
              name='state'
              id='state'
              className='p-2 border rounded-md w-56'
              defaultValue='pending'
            >
              <option value='pending'>Pending</option>
              <option value='paid'>Paid</option>
              <option value='unpaid'>Unpaid</option>
            </select>
          </fieldset>
          <div className='flex gap-4 justify-between items-center mt-8'>
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
        </Form>
      </section>
    </div>
  );
}
