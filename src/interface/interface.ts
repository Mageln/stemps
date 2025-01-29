import { StaticImageData } from "next/image";

export interface MobileMenuProps {
  isOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  menuItems: { title: string; link: string }[];
  user: { login: string } | null;
  handleLogout: () => void;
}

export interface NavigationMenuProps {
  menuItems: { title: string; link: string }[];
  className?: string;
}

export interface SlideProps {
  content: string;
  image: StaticImageData;
  description?: string;
}

export interface PaginationProps {
  slides: { logo: StaticImageData; text: string; description: string }[];
  currentSlide: number;
  goToSlide: (index: number) => void;
}

export interface SignInProps {
  login: string;
  password: string;
}
export interface User {
  login: string;
  password: string;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
