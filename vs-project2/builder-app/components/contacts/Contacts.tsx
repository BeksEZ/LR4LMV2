"use client";

// Import necessary components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import PageHeaderSection from "@/components/PageHeaderSection";
import { ContactInfo } from "@/components/contacts/ContactInfo";
import { ContactMap } from "@/components/contacts/ContactMap";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Контакти закладу — CAFEVEDY',
    description: 'Контакта інформація закладу CAFEVEDY для швидкого звязку, а саме: номер телефону, електронна пошта'
};

const Contacts = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col items-center flex-grow w-full bg-stone-300 py-8 overflow-y-auto">
                <div className="container mx-auto px-4">
                    <PageHeaderSection title="КОНТАКТИ" className="text-center md:text-left">
                        <div className="mt-8 w-full">
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="w-full md:w-[46%]">
                                    <ContactInfo />
                                </div>
                                <div className="w-full md:w-[54%] mt-5 md:mt-0">
                                    <ContactMap />
                                </div>
                            </div>
                        </div>
                    </PageHeaderSection>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contacts;