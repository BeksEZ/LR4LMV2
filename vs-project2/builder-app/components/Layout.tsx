"use client";

import React from "react";

import { Header } from "./Header";



interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col items-center flex-grow w-full bg-stone-300 overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default Layout;