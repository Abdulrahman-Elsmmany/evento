"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const activePathName = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9 ">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                " hover:text-white transition flex items-center relative",
                {
                  "text-white": activePathName === route.path,
                  "text-white/50": activePathName !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePathName === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="absolute w-full h-1 bg-accent bottom-0"
                >
                  {" "}
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
