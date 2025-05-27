
import Link from 'next/link';

export const MenuButton = () => {
    // The original <li> had "text-center list-none".
    // "list-none" is no longer needed as it's not an <li>.
    // "text-center" can be added to the Link's className to center the text "МЕНЮ".
    return (
        <Link
            href="/menu"
            className="block self-stretch width px-8 py-7 w-full text-1xl font-bold text-white uppercase bg-blue-600 rounded-[30px] hover:bg-blue-700 transition-colors duration-200 max-md:px-5 text-center" // Added text-center
        >
            МЕНЮ
        </Link>
    );
};