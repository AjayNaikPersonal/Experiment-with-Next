import Link from "next/link";


async function getPosts(){
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  console.log(res)
  return res
}
export  default async function Home() {
  const data = await getPosts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Link href='/about'>About page</Link>
    </main>
  );
}
