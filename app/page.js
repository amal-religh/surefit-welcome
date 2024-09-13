import Image from "next/image";

export default function Home() {
  return (
    <main
      className="bg-[url('https://assets.seedprod.com/1821-ZGaDcg3f0PwBj5Tx.jpg')] object-cover bg-no-repeat bg-cover bg-center "
      style={{
        backgroundColor: "rgb(31, 107, 131)",
        height: "100vh",
        backgroundSize: "100% auto",
        backgroundPosition: "center bottom",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="backdrop-blur-3xl w-full h-full flex flex-col justify-center items-center">
        <Image src="/logo.png" width="200" height={80} className="mb-3" />
        <h1 className="text-4xl my-2">Get Ready!</h1>
        <p>We are working on something really cool.</p>
      </div>
    </main>
  );
}
