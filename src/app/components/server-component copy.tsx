import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentProps) {
  console.log('Server Component Copy');
  return (
    <div>
      <span className="block text-center">Server Component Copy</span>
      {children}
    </div>
  );
}
