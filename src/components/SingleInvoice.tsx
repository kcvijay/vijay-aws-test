import { useEffect } from 'react';
import { redirect, useParams } from 'react-router-dom';

export default function SingleInvoice() {
  const params = useParams();
  useEffect(() => {
    redirect(`/${params.invoiceid}/edit`);
  }, []);

  return <div>Redirecting...</div>;
}
