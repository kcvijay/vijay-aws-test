import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='h-screen flex flex-col'>
      <Nav />
      <div className='flex-1 p-8'>
        <Outlet />
      </div>
      <footer className='flex-shrink bg-gray-100 p-4 flex justify-center items-center'>
        <Footer />
      </footer>
    </div>
  );
}
