"use client";

import Layout from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { MenuButton } from "@/components/MenuButton";
import { ProductGrid } from "@/components/ProductGrid";
import { InstagramPromo } from "@/components/InstagramPromo";
import { Footer } from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CAFEVEDY — Головна',
    description: 'Повідай смак індійської кухні! Найкращі страви індійської кухні у нашому кафе.',
};

const Desktop1 = () => {
    return (
        <Layout>
            <Hero />
            <section className="flex flex-col mt-16 w-full max-w-[900px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="w-full md:w-3/12 max-md:ml-0">
                        <MenuButton />
                    </div>
                    <div className="ml-0 md:ml-5 w-full md:w-9/12 max-md:ml-0">
                        <ProductGrid />
                    </div>
                </div>
            </section>
            <InstagramPromo />
            <Footer />
        </Layout>
    );
};

export default Desktop1;