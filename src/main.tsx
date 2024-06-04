import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './components/Invoices.tsx';
import Layout from './components/Layout.tsx';
import InvoiceEdit from './components/InvoiceEdit.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='/invoices' element={<Invoices />}>
            <Route path='/invoices/:invoiceId/edit' element={<InvoiceEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
