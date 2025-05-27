"use client";

import React from "react";

interface PageHeaderSectionProps {
    title: string;
    children?: React.ReactNode; // To allow content within the same section, like in Contacts.tsx
    className?: string;         // For any additional custom styling
}

const PageHeaderSection = ({ title, children, className }: PageHeaderSectionProps) => {
    return (
        // Original classes: "ml-20 mt-2.5 text-7xl text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl w-full"
        // The ml-20 might be better handled by page-specific containers if not all pages need this exact margin.
        // For now, keeping it as it was common.
        <section className={`mt-2.5 w-full max-w-full ${className || ''}`}>
            <div className=""> {/* Simplified margins, adjust as per overall design */}
                <h1 className="text-7xl font-extrabold text-black max-md:text-4xl">
                    {title}
                </h1>
            </div>
            {children}
        </section>
    );
};

export default PageHeaderSection;