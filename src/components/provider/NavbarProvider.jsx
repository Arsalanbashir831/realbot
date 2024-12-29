'use client';

import { usePathname } from 'next/navigation';
import { Nav } from '@/components/shared/Nav';

export default function NavbarProvider({ children }) {
  const pathname = usePathname();

  return (
    <div>
      {/* Conditionally render Nav */}
      { <Nav />}
      {children}
    </div>
  );
}
