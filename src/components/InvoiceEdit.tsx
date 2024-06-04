import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useState } from 'react';
import { Link, redirect, useParams } from 'react-router-dom';
import { invoices } from '../utils/placeholder-data';
import { formatDateForInput } from '../utils/dates';

export default function InvoiceEdit() {
  const [isOpen, setIsOpen] = useState(true);

  const params = useParams();

  const data = invoices.find(
    (invoice) => invoice.invoiceId === params.invoiceId
  );

  console.log(data);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => redirect('/invoices')}
        className='relative z-50'
      >
        <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel className='max-w-lg space-y-4 border bg-white p-6'>
            <DialogTitle className='font-bold'>Edit invoice</DialogTitle>
            <form>
              <input
                className='p-2 rounded-md bg-gray-100 w-32'
                type='text'
                name='invoiceId'
                id='invoiceId'
                defaultValue={`#${data?.invoiceId}`}
                disabled
              />
              <fieldset className='flex gap-2 mt-4 items-center'>
                <label className='w-32' htmlFor='name'>
                  Name
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
                <label className='w-32' htmlFor='invoicedDate'>
                  Invoiced Date
                </label>
                <input
                  className='p-2 border rounded-md w-56'
                  type='date'
                  name='invoicedDate'
                  id='invoicedDate'
                  defaultValue={formatDateForInput(data?.invoicedDate ?? '')}
                />
              </fieldset>
              <fieldset className='flex gap-2 mt-4 items-center'>
                <label className='w-32' htmlFor='dueDate'>
                  Due Date
                </label>
                <input
                  className='p-2 border rounded-md w-56'
                  type='date'
                  name='dueDate'
                  id='dueDate'
                  defaultValue={formatDateForInput(data?.dueDate ?? '')}
                />
              </fieldset>
              <fieldset className='flex gap-2 mt-4 items-center'>
                <label className='w-32' htmlFor='amount'>
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
                <label className='w-32' htmlFor='state'>
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
            </form>
            <div className='flex gap-4 items-center justify-end mt-8'>
              <Link className='text-red-600' to='..'>
                Cancel
              </Link>
              <Link
                className='py-2 px-4 bg-green-100 text-green-600 rounded-md'
                to='..'
              >
                Save
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
