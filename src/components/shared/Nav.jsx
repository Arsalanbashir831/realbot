'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function Nav() {
  const pathname = usePathname(); // Get the current pathname

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/chat', label: 'Chat' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white text-2xl font-bold">
            <img height={200} width={200} src='/image.png'/>
          </Link>
          <div className="hidden md:flex space-x-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <Button
                  variant="link"
                  className={`${
                    pathname === link.href
                      ? 'text-white underline underline-offset-4'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
