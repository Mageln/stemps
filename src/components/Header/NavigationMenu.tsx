import { NavigationMenuProps } from "@/interface/interface";
import Link from "next/link";

export const NavigationMenu = ({ menuItems, className = "" }: NavigationMenuProps) => {
  return (
    <nav className={className}>
      <ul className="flex space-x-6">
        {menuItems.map((nav, index) => (
          <li key={index}>
            <Link href={nav.link} className="hover:text-gray-600">
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}