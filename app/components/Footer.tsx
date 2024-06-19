// import viteLogo from '/vite.svg';
// import reactLogo from '../assets/react.svg';
// import awsLogo from '../assets/aws.svg';
// import pgLogo from '../assets/postgresql.svg';

import { BankNotes } from "~/ui/icons"

export default function Footer() {
  return (
    <div className='w-screen flex flex-col items-start justify-center h-26 p-4 bg-gray-700 text-gray-200'>
      <BankNotes className="size-12 text-gray-400 mb-2"/>
      <p>Created with Remix Vite, integrated with Postgres and AWS</p>
    </div>
  );
}
