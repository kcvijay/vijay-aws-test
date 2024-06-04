import viteLogo from '/vite.svg';
import reactLogo from '../assets/react.svg';
import awsLogo from '../assets/aws.svg';
import pgLogo from '../assets/postgresql.svg';

export default function Footer() {
  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='flex gap-4 mb-2'>
        <img
          src={viteLogo}
          className='size-8 grayscale hover:grayscale-0 transition-all'
          alt='Vite logo'
        />
        <img
          src={reactLogo}
          className='size-8 grayscale hover:grayscale-0 transition-all'
          alt='React logo'
        />
        <img
          src={awsLogo}
          className='size-8 grayscale hover:grayscale-0 transition-all'
          alt='React logo'
        />
        <img
          src={pgLogo}
          className='size-8 grayscale hover:grayscale-0 transition-all'
          alt='React logo'
        />
      </div>

      <h2 className='text-gray-500 text-center'>
        Created with <span className='font-bold'>Vite</span> and{' '}
        <span className='font-bold'>React</span>. Integrated with{' '}
        <span className='font-bold'>AWS</span> and{' '}
        <span className='font-bold'>PostgreSQL.</span>
      </h2>
    </div>
  );
}
