import Image from "next/image";
import Link from "next/link";
import IconMenu from "../../../public/Icon/IconMenu";

export default function Header() {
  return (
    <header className="z-40 dark sticky top-0">
      <div className="shadow-sm">
        <div className="relative flex w-full bg-white px-5 py-2.5 dark:bg-black">
          <div className="w-[900px] flex justify-between mx-auto">
            <div className="horizontal-logo flex items-center gap-5 justify-between ltr:mr-2 rtl:ml-2 ">
              <Link
                href="/"
                className="main-logo flex shrink-0 items-center gap-2"
              >
                <Image
                  src="/logo.png"
                  alt="Logo Liu Purnomo"
                  width={24}
                  height={24}
                />
                <span className="hidden align-middle text-2xl  font-semibold  transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">
                  Liu Purnomo
                </span>
              </Link>
              <button
                type="button"
                className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
              >
                <IconMenu className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center space-x-1.5  dark:text-[#d0d2d6] ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2">
              <button className="btn btn-outline-primary">kontak</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
