"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
      `block text-3xl ${ 
          pathname === path ? "text-blue-600" : "text-black hover:text-blue-600"
      }`;

  return (

      <header className="w-full bg-stone-300">
        <nav className="container mx-auto flex items-center justify-between px-4 h-[79px]">
          <div className="flex-shrink-0">
            <Link href="/" className="text-black text-5xl font-sans">
              CAFEVEDY
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-5 items-center">
              <li className="text-center">
                <Link href="/menu" className={linkClasses("/menu")}>
                  МЕНЮ
                </Link>
              </li>
              <li className="text-center">
                <Link href="/contacts" className={linkClasses("/contacts")}>
                  КОНТАКТИ
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  );
};