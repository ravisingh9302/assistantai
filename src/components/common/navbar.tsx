"use client";

// import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-white">
          AI Interviewer
        </Link>

        {/* Desktop Links */}
        {/* <div className="hidden md:flex space-x-4">
          <SignedOut>
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div> */}

        {/* Mobile Menu Button */}
        {/* <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 p-4">
          <SignedOut>
            <Link href="/signin" className="block py-2">Sign In</Link>
            <Link href="/signup" className="block py-2">Sign Up</Link>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard" className="block py-2">Dashboard</Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )} */}
    </nav>
  );
}
