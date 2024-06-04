import { BankNotes } from './ui/icons';

export default function App() {
  return (
    <>
      <div className='md:flex justify-center items-center h-full'>
        <section className='flex flex-col justify-between items-center'>
          <BankNotes className='size-20 text-gray-600 rounded-md mb-4' />
          <h1 className='text-2xl md:text-3xl font-extrabold'>
            INVOICES
          </h1>
        </section>
      </div>
    </>
  );
}
