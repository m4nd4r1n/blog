import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h2 className="text-2xl select-none pt-4 md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20">
        <Link href="/">
          <a className="hover:underline hover:underline-offset-2">Devlog</a>
        </Link>
        .
      </h2>
      <DarkModeToggle />
    </div>
  );
};

export default Header;
