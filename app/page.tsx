import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#F3F3F3] font-sans ">
      <main className="flex w-full max-w-[100rem] py-5 bg-white sm:items-start">
        <Header />
      </main>
    </div>
  );
}
