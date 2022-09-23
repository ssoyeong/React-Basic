import Link from 'next/link';

export default function Mypage() {
    return (
        <>
            <h2>
                Click: <Link href="/">Back to home</Link>
            </h2>
            <h1>This my Mypage</h1>
        </>
    );
}