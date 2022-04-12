import DarkModeToggle from "./darkModeToggle";

export default function FloatingButton() {
  return (
    <div className="fixed top-6 right-5 floating:right-auto flex items-center pr-2.5 floating:pr-16 justify-end z-50 w-full max-w-6xl ">
      <DarkModeToggle isFloating />
    </div>
  );
}
