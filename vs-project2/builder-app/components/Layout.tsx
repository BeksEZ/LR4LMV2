"use client";

import React from "react";
// Adjust import paths based on your actual file structure
// For example, if Header/Footer are in the same directory:
import { Header } from "./Header";

// Or if they are in a more general components folder:
// import { Header } from "@/components/common/Header";
// import { Footer } from "@/components/common/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* Main content area */}
            {/* bg-stone-300 was on the original main element. Adjust if Header/Footer have their own backgrounds. */}
            {/* items-center will center the direct children of main (your page content sections) */}
            {/* py-8 provides vertical padding; original had pb-28. Adjust as needed. */}
            <main className="flex flex-col items-center flex-grow w-full bg-stone-300 overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default Layout;