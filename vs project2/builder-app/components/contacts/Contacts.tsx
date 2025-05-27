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
        // Replicating the main layout structure for consistency and to include the Footer
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* Main content area with consistent styling */}
            <main className="flex flex-col items-center flex-grow w-full bg-stone-300 py-8 overflow-y-auto">
                {/* Container to align content with Header's width */}
                <div className="container mx-auto px-4">
                    <PageHeaderSection title="КОНТАКТИ" className="text-center md:text-left">
                        {/* Content for the Contacts page */}
                        <div className="mt-8 w-full">
                            <div className="flex flex-col md:flex-row gap-5">
                                {/* ContactInfo takes up slightly less than half the width on medium screens */}
                                <div className="w-full md:w-[46%]">
                                    <ContactInfo />
                                </div>
                                {/* ContactMap takes up the remaining width */}
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