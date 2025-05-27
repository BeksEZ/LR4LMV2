import Image from "next/image";
import Link from "next/link";
import instaIcon from './Instagram-Emblem.png';
import arrow from './Arrow_png_image.png';

export const InstagramPromo = () => {
    return (
        <section className="bg-blue-600 my-10 py-15 pb-25 rounded-[25px]">
            <div className="max-w-[900px] mx-auto px-8 flex justify-between items-center text-white max-md:flex-col max-md:text-center">
                <div className="max-w-lg relative">
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                        Зробіть сторіс з будь-яким напоєм, відзначте @cafevedy, та отримайте одну каву у подарунок!
                    </h3>
                    <Image
                        src={arrow}
                        alt="Arrow pointing to Instagram logo"
                        width={120}
                        height={60}
                        className="absolute right-0 top-full mt-2 max-md:static max-md:mx-auto"
                    />
                </div>
                <div className="flex-shrink-0 mt-8 md:mt-0 md:ml-8">
                    <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={instaIcon}
                            alt="Instagram Logo"
                            width={350}
                            height={350}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};
