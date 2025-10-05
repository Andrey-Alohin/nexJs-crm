'use client';

import { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';
// import CompanyFormModal from './company-form-modal';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyBtn() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        show={show}
        onClose={() => setShow(false)}
        onSubmit={console.log}
      />
    </>
  );
}
