
import Link from 'next/link';

export const MenuButton = () => {
    return (
        <Link
            href="/menu"
            className="block self-stretch width px-8 py-7 w-full text-1xl font-bold text-white uppercase bg-blue-600 rounded-[30px] hover:bg-blue-700 transition-colors duration-200 max-md:px-5 text-center" // Added text-center
        >
            МЕНЮ
        </Link>
    );
};