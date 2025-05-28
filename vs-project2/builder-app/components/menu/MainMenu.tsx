"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import PageHeaderSection from "@/components/PageHeaderSection";
import { ProductGrid2 } from "@/components/menu/ProductGrid2";
import MenuSideBar from "@/components/menu/MenuSideBar";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Меню — CAFEVEDY',
    description: 'Ознайомтеся з нашим меню індійських страв. Знайдіть інформацію про алергени та інгредієнти.',
};

const MainMenu = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col items-center flex-grow w-full bg-stone-300 py-8 overflow-y-auto">
                <div className="container mx-auto px-4">
                    <PageHeaderSection title="МЕНЮ" className="text-center md:text-left mb-10 md:mb-16" />

                    <section className="w-full">
                        <div className="flex flex-col md:flex-row w-full gap-8">
                            <div className="md:w-1/4 w-full">
                                <MenuSideBar />
                            </div>
                            <div className="md:w-3/4 w-full">
                                <ProductGrid2 />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainMenu;