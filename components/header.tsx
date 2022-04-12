import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center items-center w-full bg-white dark:bg-[#0d1117] pb-4 shadow transition-colors">
      <div className="grid grid-cols-2 w-full items-center justify-between max-w-6xl px-8">
        <h2 className="text-2xl select-none pt-4 md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/">
            <a className="hover:underline hover:underline-offset-2">Devlog</a>
          </Link>
          .
        </h2>
        <div className="flex justify-end items-center">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
