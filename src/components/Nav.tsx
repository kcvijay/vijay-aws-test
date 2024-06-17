import { Link, NavLink } from 'react-router-dom';
import { BankNotes } from '../ui/icons';

export default function Nav() {
  return (
    <div className='flex  justify-between items-center p-4 bg-sky-600 text-lg text-gray-100'>
      <Link to='/' className='flex items-center gap-2 text-2xl font-bold'>
        <BankNotes className='size-6'/>
        <span>Invoices</span>
      </Link>
      <nav className='flex justify-end items-center gap-6'>
        <NavLink
          className={({ isActive }) =>
            `inline-block ${isActive ? 'font-bold' : ''}`
          }
          to='/invoices'
        >
          Invoices
        </NavLink>
      </nav>
    </div>
  );
}
