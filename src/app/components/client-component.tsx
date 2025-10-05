'use client';

import React from 'react';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('Client Component');
  return (
    <div>
      <span className="block text-center">Client Component</span>]{children}
    </div>
  );
}
