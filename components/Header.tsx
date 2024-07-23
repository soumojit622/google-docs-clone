import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <div className="hidden md:flex items-center">
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="Logo with name"
            width={42}
            height={32}
          />
          <span className="text-xl font-semibold">Scribee.</span>
        </div>
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
