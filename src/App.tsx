import { PersonIcon } from './ui/icons';

export default function App() {
  return (
    <>
      <div className='md:flex justify-center items-center h-full'>
        <section className='flex flex-col justify-between items-center'>
          <PersonIcon className='bg-gray-600 p-1 size-20 text-gray-100 rounded-md mb-4' />
          <h1 className='text-2xl md:text-3xl font-extrabold'>
            List of the Subscribers
          </h1>
        </section>
      </div>
    </>
  );
}
