"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
      `block text-3xl ${ // Note: text-3xl is quite large for a compact header.
          pathname === path ? "text-blue-600" : "text-black hover:text-blue-600"
      }`;

  return (
      // 1. Added `bg-white`: This explicitly sets the header's background to white,
      //    overriding any inherited black background or browser defaults.
      //    You can change this to any color you prefer (e.g., `bg-gray-100`).
      // 2. Simplified outer structure: Removed problematic padding (`pb-24`) and fixed height (`h-[79px]`)
      //    from the <header> tag itself, letting the <nav> define the main interactive height.
      // 3. Added `mb-5` for spacing below the header, if needed.
      // 4. Changed `w-screen` to `w-full` for better compatibility within typical layout flows.
      <header className="w-full bg-stone-300">
        {/*
        The `container` class centers the content and applies a max-width,
        which is good for responsiveness. `mx-auto` achieves the centering.
        `h-[79px]` sets the desired height for your navigation bar.
        `px-4` provides some horizontal padding inside the navigation.
      */}
        <nav className="container mx-auto flex items-center justify-between px-4 h-[79px]">
          {/* flex-shrink-0 prevents the logo from shrinking if menu items are too wide */}
          <div className="flex-shrink-0">
            {/* Note: text-5xl is very large for a 79px tall header. Consider reducing font size. */}
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