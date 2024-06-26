import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import stylesheet from './tailwind.css?url';
import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='flex flex-col'>
        <Nav />
        <main className='flex-1 p-6'>{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
