import finance from './assets/finance.svg';

export default function App() {
  return (
    <section className='max-w-[1200px] h-full mx-auto md:grid grid-cols-2 gap-8'>
      <div className='bg-invoice bg-sky-50 flex justify-center items-center p-20 '>
        <h1 className='text-4xl md:text-[4vw] font-extrabold text-white'>
          INVOICES
        </h1>
      </div>
      <div className='flex justify-center items-center mt-4 md:mt-0'>
        <figure>
          <img src={finance} alt='Finance' className='drop-shadow-md' />
        </figure>
      </div>
    </section>
  );
}
