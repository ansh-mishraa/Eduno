"use client"

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to dark logo until mounted
  const logoSrc = mounted ? (theme === 'dark' ? '/dark.png' : '/light.png') : '/dark.png';

  return (
    <footer className="border-t dark:bg-black">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              {mounted && (
                <Image 
                  src={logoSrc}
                  alt="Logo" 
                  width={120} 
                  height={120} 
                  className="w-10 h-10 md:w-[120px] md:h-[120px]"
                  priority
                />
              )}
            </Link>
          </div>
          
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3 dark:text-white">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/features" className="text-xs md:text-sm dark:text-gray-300 hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs md:text-sm dark:text-gray-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3 dark:text-white">Resources</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/features" className="text-xs md:text-sm dark:text-gray-300 hover:text-primary">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-xs md:text-sm dark:text-gray-300 hover:text-primary">
                  Previous Year Questions
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3 dark:text-white">Contact</h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-xs md:text-sm dark:text-gray-300 break-words">
                Email:  khushi178shrivastava@gmail.com
              </li>
              <li className="text-xs md:text-sm dark:text-gray-300">
                Whatsapp Community : 
                <a
                  href="https://chat.whatsapp.com/D3sGnPCE4HrH2hcDOcMcKK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline hover:text-blue-500"
                >
                  Join WhatsApp Group
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t text-center text-xs md:text-sm dark:text-gray-400">
          © {new Date().getFullYear()} Eduno. All rights reserved.
        </div>
      </div>
    </footer>
  );
}