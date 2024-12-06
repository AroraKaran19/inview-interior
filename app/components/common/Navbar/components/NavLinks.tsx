"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  index: number;
  name: string;
  url: string;
  classValue?: string;
  mobileWrapper?: (value: boolean) => void;
}

const Navlink = ({
  index,
  name,
  url,
  classValue,
  mobileWrapper,
}: NavLinkProps) => {
  const currentPath = usePathname();

  const handleNavClick = () => {
    if (mobileWrapper) {
      mobileWrapper(false); // Closes the mobile menu
      document.body.style.overflow = "auto";
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      tabIndex={index}
      href={url}
      onClick={handleNavClick}
      className={`navigation-link leading-none transition-all duration-200 ease-in-out whitespace-nowrap ${
        currentPath === url || "/" + currentPath.split("/")[1] === url
          ? "text-black"
          : "text-[#8F8F8F] hover:text-black/70"
      } ${classValue || ""}`}
    >
      {name}
    </Link>
  );
};

export default Navlink;
