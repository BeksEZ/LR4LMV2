"use client";

import React from "react";

interface PageHeaderSectionProps {
    title: string;
    children?: React.ReactNode;
    className?: string;
}

const PageHeaderSection = ({ title, children, className }: PageHeaderSectionProps) => {
    return (

        <section className={`mt-2.5 w-full max-w-full ${className || ''}`}>
            <div className="">
                <h1 className="text-7xl font-extrabold text-black max-md:text-4xl">
                    {title}
                </h1>
            </div>
            {children}
        </section>
    );
};

export default PageHeaderSection;