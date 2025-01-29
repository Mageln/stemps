"use client";

import React, { useEffect, useState } from "react";
import logoIcon from "../../../public/logo-big.svg";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NavigationMenu } from "./NavigationMenu";
import { NAV_MENU } from "@/constants/constants";
import { MobileMenu } from "./MobileMenu";
import { useUser } from "@/ctx/userContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUser();

  useEffect(() => {
    const userDate = sessionStorage.getItem("user");
    if (userDate) {
      setUser(JSON.parse(userDate));
    }
  }, [setUser]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div>
        <Link href="/" className="flex items-center">
          <Image src={logoIcon} alt="logo" width={40} height={40} />
          <p className="hidden sm:block ml-2">STEMPS</p>
        </Link>
      </div>
      <NavigationMenu menuItems={NAV_MENU} className="hidden md:flex" />
      {user ? (
        <div className="hidden md:flex items-center">
          <span className="mr-4">{user.login}</span>
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Выйти
          </button>
        </div>
      ) : (
        <Link
          className="hidden md:flex items-center hover:text-gray-600"
          href={"/sign-in"}
        >
          <span className="group flex">
            Вход
            <span className="ml-2 bg-black rounded-sm w-[25px] h-[28px] overflow-hidden inline-flex items-center justify-center">
              <ArrowRight
                className="relative left-[-7px] transition-transform duration-300 ease-in-out group-hover:translate-x-[4px]"
                stroke="white"
              />
            </span>
          </span>
        </Link>
      )}

      <button
        onClick={toggleMenu}
        className="md:hidden bg-black text-white text-center rounded px-2 py-1"
      >
        Меню
      </button>
      <MobileMenu
        isOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menuItems={NAV_MENU}
        user={user}
        handleLogout={handleLogout}
      />
    </header>
  );
};

export default Header;
