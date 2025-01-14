"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/upload", label: "Convert" },
  { href: "/history", label: "History" },
  { href: "/settings", label: "Settings" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-white/50 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-14%2014.06.45%20-%20A%20modern%20and%20minimalistic%20logo%20for%20a%20project%20titled%20'BereVox'%20(derived%20from%20Bereket%20and%20voice).%20The%20logo%20should%20feature%20a%20combination%20of%20a%20stylized%20mi-jIsDxMCVfzY8O7Tt728dNJlg8IDuFl.webp"
            alt="BereVox Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
                  layoutId="underline"
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
