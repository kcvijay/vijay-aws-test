import { Link, NavLink } from 'react-router-dom';
import { BankNotes } from '../ui/icons';

export default function Nav() {
  return (
    <div className='flex  justify-between items-center p-4 bg-sky-600 text-lg text-gray-100'>
      <Link to='/'>
        <BankNotes className='size-8' />
      </Link>
      <nav className='flex justify-end items-center gap-6'>
        <NavLink
          className={({ isActive }) =>
            `inline-block ${isActive ? 'font-bold' : ''}`
          }
          to='/invoices'
        >
          All Invoices
        </NavLink>
      </nav>
    </div>
  );
}
