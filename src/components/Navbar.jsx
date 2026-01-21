import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { GhostButton, PrimaryButton } from "./Buttons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-5 right-0 left-0 z-50 px-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-2 bg-black/50 backdrop-blur-md border border-white/4 rounded-lg px-4">
        <a href="/">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-white/70 hover:text-white transition "
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="hidden justify-between items-center space-x-2  md:flex">
          <a href="/signin" className="text-sm text-white/80">
            Sign In
          </a>
          <PrimaryButton className="px-4 py-2 rounded-2xl bg-violet-800 text-white">
            Get Started
          </PrimaryButton>
        </div>
        <GhostButton
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon className="size-6" />
        </GhostButton>
      </div>




      <div className={`fixed inset-0 bg-black/40 backdrop-blur-md z-60  flex-col transition-all duration-300 flex items-center justify-center ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <a href="/">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </a>
        <ul className="flex flex-col items-center gap-8 text-lg font-medium mt-8">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-white/70 hover:text-white transition "
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center space-y-4 mt-8">
          <a href="/signin" className="text-lg text-white/80">
            Sign In
          </a>
          <PrimaryButton className="px-6 py-3 rounded-2xl bg-violet-800 text-white text-lg">
            Get Started
          </PrimaryButton>
        </div>
        <GhostButton
          className=" bg-white my-4 p-2  rounded-2xl "
          onClick={() => setIsOpen(!isOpen)}>
          <XIcon className="size-6" />
        </GhostButton>

      </div>
    </nav>
  );
}
