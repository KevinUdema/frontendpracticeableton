import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Live", href: "#" },
  { name: "Push", href: "#" },
  { name: "Move", href: "#" },
  { name: "Note", href: "#" },
  { name: "Link", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Packs", href: "#" },
  { name: "Help", href: "#" },
  { name: "More +", href: "#" },
];

export default function Header() {
  return (
    <div className="header w-full mx-auto border-b-2 px-10 border-[#eeeeee]">
      <nav className="nav flex items-center p-2 text-lg font-bold text-black">
        <Image
          className="dark m-3"
          src="/next.svg"
          alt="Next.js logo"
          width={60}
          height={15}
          priority
        />
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="px-3">
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
