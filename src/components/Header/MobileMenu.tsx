"use client";

import Link from "next/link";
import { MobileMenuProps } from "@/interface/interface";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export const MobileMenu = ({ isOpen, setIsMenuOpen, menuItems, user, handleLogout }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMenuOpen]);

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className="md:hidden fixed top-0 right-0 bg-white shadow-lg rounded-lg p-4">
      <ul className="space-y-4">
        {user && (
          <li className="font-bold text-lg">{user.login}</li> 
        )}
        {menuItems.map((nav, index) => (
          <li key={index}>
            <Link href={nav.link} className="hover:text-gray-600">
              {nav.title}
            </Link>
          </li>
        ))}
        {user ? (
          <li>
            <button
              onClick={handleLogout}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-black w-full text-left"
            >
              Выйти
            </button>
          </li>
        ) : (
          <li>
            <Link href="/sign-in" className="flex items-center hover:text-gray-600">
              Вход
              <span className="ml-2">
                <ArrowRight size={16} />
              </span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};