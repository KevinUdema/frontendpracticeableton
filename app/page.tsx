import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#F3F3F3] font-sans ">
      <main className="flex w-full max-w-[100rem] p-10 bg-white sm:items-start">
        <div className="header">
          <Image
            className="dark"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>
      </main>
    </div>
  );
}
