import Link from 'next/link';

export default function Home() {
  return (
    <div>
      My first Next.js project!
      <h1 className='title'>
        Click : <Link href="/posts/mypage">Go to Mypage</Link>
      </h1>
    </div>
  )
}
