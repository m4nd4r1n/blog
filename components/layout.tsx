import Footer from "./footer";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="text-gray-900 dark:bg-[#303340] dark:text-neutral-200 transition">
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
