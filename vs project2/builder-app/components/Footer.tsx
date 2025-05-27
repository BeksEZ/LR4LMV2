import Link from "next/link";
import Image from "next/image";
import instaIcon from './Instagram-Emblem.png'

export const Footer = () => {
    return (
        <footer className="bg-[#2D2D2D] text-white w-full pt-12 pt-16 md:pb-16 px-8 ">
            <div className="max-w-[600px] mx-auto flex justify-between items-center max-md:flex-col max-md:text-center">
                <div className="max-md:mb-8">
                    <h3 className="text-3xl font-bold">CAFEVEDY</h3>
                    <nav className="mt-4">
                        <ul className="space-y-2">
                            <li>
                                <Link href="/menu" className="hover:text-gray-300">
                                    Меню
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-gray-300">
                                    Контакти
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="max-md:mb-8">
                    <p className="font-bold">Години роботи</p>
                    <p>8:00 - 22:00</p>
                    <p className="mt-4 font-bold">e-mail</p>
                    <p>cafevedy@gmail.com</p>
                </div>
                <div>
                    <Link
                        href="https://www.instagram.com" // Placeholder link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={instaIcon} // Assumes image is in /public/
                            alt="Instagram"
                            width={150}
                            height={150}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
};