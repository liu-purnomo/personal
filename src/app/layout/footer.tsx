"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Footer = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <footer>
      <div className="text-white-dark bg-black text-center ltr:sm:text-left rtl:sm:text-right p-6 pt-5 mt-10">
        <div className=" w-full mx-auto md:w-[900px]">
          {/* <hr className="text-gray-100" /> */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex md:justify-start justify-center">
              <div className="pt-2">
                <Image
                  src="/logo.png"
                  width={32}
                  height={32}
                  alt="Remote Pilot Indonesa Logo"
                />
              </div>
            </div>
            <div className="grid gap-10 grid-cols-2 mb-4 mt-2">
              <div className="flex flex-col gap-3">
                <span className="font-semibold  text-xs mb-2 text-[#7E869A]">
                  PAGES
                </span>
                <Link
                  className="font-bold text-base text-black dark:text-white"
                  href="#"
                >
                  Sponsors & Partners
                </Link>
                <Link
                  className={`font-bold text-base ${
                    pathName === "/about" ? "text-primary" : "text-white"
                  }`}
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="font-bold text-base text-black dark:text-white"
                  href="#"
                >
                  Contact
                </Link>
              </div>
              <div className="flex flex-col  gap-3">
                <span className="font-semibold  text-xs mb-2 text-[#7E869A]">
                  PRIVACY
                </span>
                <Link
                  className="font-bold text-black text-base dark:text-white"
                  href="#"
                >
                  Term and Condition
                </Link>
                <Link
                  className="font-bold text-black text-base dark:text-white"
                  href="#"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="font-bold text-black text-base dark:text-white"
                  href="#"
                >
                  Q & A
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t dark:border-white/10 border-dark/10 mt-4 pt-4">
            <p>Dibuat menggunakan Next.js</p>
            <p>© {new Date().getFullYear()} Liu Purnomo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
