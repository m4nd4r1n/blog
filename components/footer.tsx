import Container from "./container";
import { EXAMPLE_PATH } from "@lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t text-xs border-neutral-200 dark:bg-[#0d1117] dark:border-[#21262d] transition">
      <Container>
        <div className="py-7 flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:w-1/2">
            Based on
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-2 font-bold hover:underline"
            >
              Next.js/blog-starter-typescript
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
