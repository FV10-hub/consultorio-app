'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

type menuProps = {
  menu: {
    id: number;
    name: string;
    imagen: string;
    path: string;
  };
};

export default function ContentMenu({ menu }: menuProps) {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div
      className={`${menu.path === pathname.replace("/", "") ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className="w-16 h-16 relative">
        <Image fill src={`${menu.imagen}.svg`} alt="Imagen" />
      </div>
      <Link className="text-xl font-bold" href={`/${menu.path}`}>{menu.name}</Link>
    </div>
  );
}
