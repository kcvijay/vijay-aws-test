import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='h-16 p-4 bg-gray-600 text-lg text-gray-100'>
      <nav className='flex justify-end items-center gap-6'>
        <NavLink
          className={({ isActive }) =>
            `inline-block ${
              isActive ? 'font-bold underline underline-offset-2' : ''
            }`
          }
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `inline-block ${
              isActive ? 'font-bold underline underline-offset-2' : ''
            }`
          }
          to='/subscribers'
        >
          Subscribers
        </NavLink>
      </nav>
    </div>
  );
}
