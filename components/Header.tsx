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
    <div className="header w-full mx-auto border-b-2 border-[#eeeeee]">
      <nav className="nav flex items-center p-2 text-xl text-black">
        <Image
          className="dark"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
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
